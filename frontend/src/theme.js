// src/theme.ts
export const themeOverrides = {
  common: {
    primaryColor: '#2F80ED',
    primaryColorHover: '#5393f9',
    primaryColorPressed: '#1c6dd0',
    primaryColorSuppl: '#2F80ED'
  },
  Button: {
    colorPrimary: '#2F80ED',
    colorHoverPrimary: '#5393f9',
    colorPressedPrimary: '#1c6dd0',
    textColorPrimary: '#ffffff',        
    heightMedium: '48px',         
    borderRadiusMedium: '12px',   
    fontWeight: '600',            
    transitionDuration: '.2s',     
    rippleDuration: '.3s'       
  },
  Input: {
    heightMedium: '48px',           
    borderRadius: '12px',           
    fontSizeMedium: '14px',
    paddingMedium: '12px 14px'       
  },
  Tag: {
    colorPrimary: '#2F80ED',
    textColorPrimary: '#ffffff'
  },
  Checkbox: {
    colorChecked: '#2F80ED'
  },
  Radio: {
    colorChecked: '#2F80ED',
    buttonBorderRadius: '12px',
    buttonHeightMedium: '48px'
  },
  RadioGroup: {
    peers: {
      RadioButton: {
        color: '#ffffff',
        colorActive: '#2F80ED',
        textColor: '#374151',
        textColorActive: '#ffffff',
        border: '1px solid #d1d5db',
        borderActive: '1px solid #2F80ED',
      }
    }
  },
  Upload: {
    color: '#ffffff',
    colorHover: '#f9fafb',
    borderColor: '#e5e7eb',
    borderColorHover: '#2F80ED',
    textColor: '#374151',
    draggerColor: '#ffffff',
    draggerColorHover: '#f9fafb',
    draggerBorder: '2px dashed #d1d5db',
    draggerBorderHover: '2px dashed #2F80ED',
  },
  DatePicker: {
    peers: {
      Input: {
        color: '#ffffff',
        colorFocus: '#ffffff',
        textColor: '#111827',
        border: '1px solid #d1d5db',
        borderHover: '1px solid #2F80ED',
        borderFocus: '1px solid #2F80ED',
      }
    }
  },
  Pagination: {              
    itemBorderRadius: '8px', 
  },
  Select: {
    peers: {
      InternalSelection: {
        borderRadius: '12px',
        heightMedium: '48px',
        paddingSingle: '0 14px',
        fontSizeMedium: '14px',
      },
      InternalSelectMenu: {
        borderRadius: '8px',
      }
    }
  },
  Dialog: {
    borderRadius: '12px'
  },
}

export const lightThemeOverrides = {
  common: {
    primaryColor: '#2F80ED',
    primaryColorHover: '#5393f9',
    primaryColorPressed: '#1c6dd0',
    primaryColorSuppl: '#2F80ED',
      
    bodyColor: '#ffffff',
    cardColor: '#ffffff',
    modalColor: '#ffffff',
    popoverColor: '#ffffff',
    tableColor: '#ffffff',
    
    borderColor: '#e5e7eb', 
    dividerColor: '#e5e7eb',
    
    textColorBase: '#111827', 
    textColor1: '#111827', 
    textColor2: '#374151', 
    textColor3: '#6b7280', 
    textColorDisabled: '#9ca3af',
    
    inputColor: '#ffffff',
    inputColorDisabled: '#f9fafb',
  },
  Button: {
    colorPrimary: '#2F80ED',
    colorHoverPrimary: '#5393f9',
    colorPressedPrimary: '#1c6dd0',
    textColorPrimary: '#ffffff',
        
    colorSecondary: '#f3f4f6', 
    colorHoverSecondary: '#e5e7eb',
    colorPressedSecondary: '#d1d5db',
    textColorSecondary: '#374151', 
    
    heightMedium: '48px',
    borderRadiusMedium: '12px',
    fontWeight: '600',
    transitionDuration: '.2s',
    rippleDuration: '.3s'
  },
  Input: {
    color: '#ffffff',
    colorFocus: '#ffffff',
    textColor: '#111827',
    placeholderColor: '#9ca3af',
    border: '1px solid #d1d5db',
    borderHover: '1px solid #2F80ED',
    borderFocus: '1px solid #2F80ED',
    
    heightMedium: '48px',
    borderRadius: '12px',
    fontSizeMedium: '14px',
    paddingMedium: '12px 14px'
  },
  Card: {
    color: '#ffffff',
    borderRadius: '12px',
    borderColor: '#e5e7eb',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
  Modal: {
    color: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  Tag: {
    colorPrimary: '#2F80ED',
    textColorPrimary: '#ffffff'
  },
  Checkbox: {
    colorChecked: '#2F80ED'
  },
  Radio: {
    colorChecked: '#2F80ED',
    buttonBorderRadius: '12px',
    buttonHeightMedium: '48px'
  },
  Pagination: {
    itemBorderRadius: '8px',
  },
  Select: {
    peers: {
      InternalSelection: {
        color: '#ffffff',
        textColor: '#111827',
        border: '1px solid #d1d5db',
        borderHover: '1px solid #2F80ED',
        borderActive: '1px solid #2F80ED',
        
        borderRadius: '12px',
        heightMedium: '48px',
        paddingSingle: '0 14px',
        fontSizeMedium: '14px',
      },
      InternalSelectMenu: {
        color: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    }
  },
  Dialog: {
    color: '#ffffff',
    borderRadius: '12px'
  },
  Table: {
    color: '#ffffff',
    borderRadius: '8px',
    thColor: '#f9fafb',
    tdColor: '#ffffff',
    borderColor: '#e5e7eb',
  },
  DataTable: {
    thColor: '#f9fafb',
    tdColor: '#ffffff',
    borderColor: '#e5e7eb',
    thTextColor: '#374151',
    tdTextColor: '#111827',
  }
}

export const darkThemeOverrides = {
  common: {
    primaryColor: '#4285F4',
    primaryColorHover: '#5A96F5',
    primaryColorPressed: '#2C5FF0',
    primaryColorSuppl: '#6BA3F7',
    
    bodyColor: '#0a0a0a', 
    cardColor: '#171717', 
    modalColor: '#171717', 
    popoverColor: '#171717', 
    tableColor: '#171717', 
        
    borderColor: '#404040', 
    dividerColor: '#404040', 
        
    textColorBase: '#fafafa',
    textColor1: '#fafafa', 
    textColor2: '#e5e5e5', 
    textColor3: '#a3a3a3', 
    textColorDisabled: '#737373', 
      
    inputColor: '#262626', 
    inputColorDisabled: '#404040',
  },
  Button: {
    colorPrimary: '#4285F4',
    colorHoverPrimary: '#5A96F5',
    colorPressedPrimary: '#2C5FF0',
    textColorPrimary: '#ffffff',
      
    colorSecondary: '#262626', 
    colorHoverSecondary: '#404040', 
    colorPressedSecondary: '#525252',
    textColorSecondary: '#e5e5e5', 
    
    heightMedium: '48px',
    borderRadiusMedium: '12px',
    fontWeight: '600',
    transitionDuration: '.2s',
    rippleDuration: '.3s'
  },
  Input: {
    color: '#262626', 
    colorFocus: '#262626',
    textColor: '#fafafa',
    placeholderColor: '#737373',
    border: '1px solid #404040',
    borderHover: '1px solid #4285F4',
    borderFocus: '1px solid #4285F4',
    
    heightMedium: '48px',
    borderRadius: '12px',
    fontSizeMedium: '14px',
    paddingMedium: '12px 14px'
  },
  Card: {
    color: '#171717',
    borderRadius: '12px',
    borderColor: '#404040',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
  },
  Modal: {
    color: '#171717',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
  },
  Tag: {
    colorPrimary: '#4285F4',
    textColorPrimary: '#ffffff'
  },
  Checkbox: {
    colorChecked: '#4285F4',
    color: '#262626',
    colorDisabled: '#404040',
  },
  Radio: {
    colorChecked: '#4285F4',
    color: '#262626',
    colorDisabled: '#404040',
    buttonBorderRadius: '12px',
    buttonHeightMedium: '48px'
  },
  RadioGroup: {
    peers: {
      RadioButton: {
        color: '#262626',
        colorActive: '#4285F4',
        textColor: '#fafafa',
        textColorActive: '#ffffff',
        border: '1px solid #404040',
        borderActive: '1px solid #4285F4',
      }
    }
  },
  Upload: {
    color: '#171717',
    colorHover: '#262626',
    borderColor: '#404040',
    borderColorHover: '#4285F4',
    textColor: '#fafafa',
    draggerColor: '#171717',
    draggerColorHover: '#262626',
    draggerBorder: '2px dashed #404040',
    draggerBorderHover: '2px dashed #4285F4',
  },
  DatePicker: {
    peers: {
      Input: {
        color: '#262626',
        colorFocus: '#262626',
        textColor: '#fafafa',
        border: '1px solid #404040',
        borderHover: '1px solid #4285F4',
        borderFocus: '1px solid #4285F4',
      }
    }
  },
  Pagination: {
    itemBorderRadius: '8px',
    itemColor: '#262626',
    itemColorHover: '#404040',
    itemColorPressed: '#525252',
    itemTextColor: '#e5e5e5',
  },
  Select: {
    peers: {
      InternalSelection: {
        color: '#262626',
        textColor: '#fafafa',
        border: '1px solid #404040',
        borderHover: '1px solid #4285F4',
        borderActive: '1px solid #4285F4',
        
        borderRadius: '12px',
        heightMedium: '48px',
        paddingSingle: '0 14px',
        fontSizeMedium: '14px',
      },
      InternalSelectMenu: {
        color: '#171717',
        borderRadius: '8px',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
      }
    }
  },
  Dialog: {
    color: '#171717',
    borderRadius: '12px'
  },
  Table: {
    color: '#171717',
    borderRadius: '8px',
    thColor: '#0a0a0a',
    tdColor: '#171717',
    borderColor: '#404040',
  },
  DataTable: {
    thColor: '#0a0a0a',
    tdColor: '#171717',
    borderColor: '#404040',
    thTextColor: '#e5e5e5',
    tdTextColor: '#fafafa',
  }
}