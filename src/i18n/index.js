import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'
import ru from './locales/ru'

Vue.use(VueI18n)

// Определяем язык по умолчанию из localStorage или браузера
function getDefaultLocale() {
  const saved = localStorage.getItem('ss13-idle-locale')
  if (saved && (saved === 'en' || saved === 'ru')) {
    return saved
  }
  
  // Определяем язык браузера
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('ru')) {
    return 'ru'
  }
  
  return 'en'
}

const defaultLocale = getDefaultLocale()

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
})

// Слушаем изменения языка из store
export function setupI18nWatcher(store) {
  // Синхронизируем начальное значение из store
  const storeLocale = store.getters['settings/locale']
  if (storeLocale && (storeLocale === 'en' || storeLocale === 'ru')) {
    i18n.locale = storeLocale
  } else if (store.state.settings.locale === null) {
    // Если в store locale = null, устанавливаем значение из localStorage
    store.commit('settings/setLocale', defaultLocale)
  }
  
  // Слушаем изменения языка из store
  store.watch(
    (state) => state.settings.locale,
    (newLocale) => {
      if (newLocale && (newLocale === 'en' || newLocale === 'ru')) {
        i18n.locale = newLocale
      }
    }
  )
}

export default i18n

