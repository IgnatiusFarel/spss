import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '@/components/auth/Login.vue'
import { vi } from 'vitest'


// ===== MOCK ROUTER =====
const pushMock = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}))

// ===== MOCK NAIVE UI =====
vi.mock('naive-ui', async () => {
  const actual = await vi.importActual('naive-ui')
  return {
    ...actual,
    useMessage: () => ({
      success: vi.fn(),
      error: vi.fn(),
      destroyAll: vi.fn(),
    }),
  }
})

// ===== MOCK PINIA STORES =====
vi.mock('@/stores/Auth.js', () => ({
  useAuthStore: () => ({
    login: vi.fn().mockResolvedValue({
      message: 'Login berhasil',
    }),
    user: {
      role: 'superadmin',
    },
  }),
}))

vi.mock('@/stores/ThemeMode.js', () => ({
  useThemeStore: () => ({
    isDark: false,
  }),
}))

describe('Login.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders login form', () => {
    const wrapper = mount(Login)

    expect(wrapper.text()).toContain('Masuk')
    expect(wrapper.text()).toContain('Email')
    expect(wrapper.text()).toContain('Kata Sandi')
  })

  it('updates email and password input', async () => {
    const wrapper = mount(Login)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('test@mail.com')
    await inputs[1].setValue('password123')

    expect(inputs[0].element.value).toBe('test@mail.com')
    expect(inputs[1].element.value).toBe('password123')
  })

it('submit login success and redirect', async () => {
  vi.useFakeTimers()

  const wrapper = mount(Login)

  wrapper.vm.formRef = {
    validate: vi.fn().mockResolvedValue(true),
    restoreValidation: vi.fn(),
  }

  const inputs = wrapper.findAll('input')
  await inputs[0].setValue('superadmin@mail.com')
  await inputs[1].setValue('password123')

  await wrapper.find('form').trigger('submit.prevent')

  // Jalankan semua setTimeout
  vi.runAllTimers()

  expect(pushMock).toHaveBeenCalledWith('/presensi')

  vi.useRealTimers()
})

})
