<template>
  <n-config-provider
    :theme="themeStore.isDark ? darkTheme : null"
    :theme-overrides="currentThemeOverrides"
  >
    <n-message-provider>
      <div
        class="min-h-screen transition-colors duration-300"
        :class="
          themeStore.isDark
            ? 'dark bg-neutral-900 text-white'
            : 'bg-white text-black'
        "
      >
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { computed } from "vue";
import { NConfigProvider, NMessageProvider, darkTheme } from "naive-ui";
import { useAuthStore } from "@/stores/Auth";
import {
  themeOverrides,
  lightThemeOverrides,
  darkThemeOverrides,
} from "@/theme";
import { useThemeStore } from "@/stores/ThemeMode";

const authStore = useAuthStore();
const themeStore = useThemeStore();

const currentThemeOverrides = computed(() => {
  if (themeStore.isDark) {
    return {
      ...themeOverrides,
      ...darkThemeOverrides,
    };
  } else {
    return {
      ...themeOverrides,
      ...lightThemeOverrides,
    };
  }
});

if (!authStore.isAuthenticated) {
  authStore.logout();
}
</script>
