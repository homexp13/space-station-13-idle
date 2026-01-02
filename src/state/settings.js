import Vue from 'vue'

const settings = {
	namespaced: true,
	state: {
		showVirtualLevels: false,
		showXPNeeded: false,
		showFullValues: false,
		showCompletionLines: false,
		inventoryFullStop: true,
		pocketsEmptyStop: false,
		autoEatEnabled: true,
		chronoPanelEnabled: false,
		darkMode: true,
		hideLockedJobs: false,
		allButOne: false,
		locale: null, // null означает автоопределение
	},
	getters: {
		showVirtualLevels(state) {
			return state.showVirtualLevels;
		},
		showXPNeeded(state) {
			return state.showXPNeeded;
		},
		showFullValues(state) {
			return state.showFullValues;
		},
		showCompletionLines(state) {
			return state.showCompletionLines;
		},
		inventoryFullStop(state) {
			return state.inventoryFullStop;
		},
		pocketsEmptyStop(state) {
			return state.pocketsEmptyStop;
		},
		autoEatEnabled(state) {
			return state.autoEatEnabled;
		},
		chronoPanelEnabled(state) {
			return state.chronoPanelEnabled;
		},
		darkMode(state) {
			return state.darkMode;
		},
		darkModeClass(state) {
			return state.darkMode ? 'dark-mode' : ''
		},
		hideLockedJobs(state) {
			return state.hideLockedJobs;
		},
		allButOne(state) {
			return state.allButOne;
		},
		locale(state) {
			// Если locale не установлен, определяем из localStorage или браузера
			if (state.locale === null) {
				const saved = localStorage.getItem('ss13-idle-locale')
				if (saved && (saved === 'en' || saved === 'ru')) {
					return saved
				}
				const browserLang = navigator.language || navigator.userLanguage
				return browserLang.startsWith('ru') ? 'ru' : 'en'
			}
			return state.locale;
		},
	},
	mutations: {
		setShowVirtualLevels(state, val) {
			state.showVirtualLevels = val;
		},
		setShowXPNeeded(state, val) {
			state.showXPNeeded = val;
		},
		setShowFullValues(state, val) {
			state.showFullValues = val;
		},
		setShowCompletionLines(state, val) {
			state.showCompletionLines = val;
		},
		setInventoryFullStop(state, val) {
			state.inventoryFullStop = val;
		},
		setPocketsEmptyStop(state, val) {
			state.pocketsEmptyStop = val;
		},
		setAutoEatEnabled(state, val) {
			state.autoEatEnabled = val;
		},
		setChronoPanelEnabled(state, val) {
			state.chronoPanelEnabled = val;
		},
		setDarkMode(state, val) {
			state.darkMode = val;
		},
		setHideLockedJobs(state, val) {
			state.hideLockedJobs = val;
		},
		setAllButOne(state, val) {
			state.allButOne = val;
		},
		setLocale(state, val) {
			if (val && (val === 'en' || val === 'ru')) {
				state.locale = val;
				localStorage.setItem('ss13-idle-locale', val);
			}
		}
	}
}

export default settings;
