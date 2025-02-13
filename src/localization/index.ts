import { configureLocalization } from '@lit/localize';
import {
	sourceLocale,
	targetLocales,
} from './locale-codes';

import * as ru from './locales/ru';

const localizedTemplates = new Map([
	['ru', ru]
])

export const { getLocale, setLocale } = configureLocalization({
	sourceLocale,
	targetLocales,
	// @ts-ignore
	loadLocale: async (lang: string) => localizedTemplates.get(lang)
});

export const changeLocale = (lang: string) => {
	try {
		setLocale(lang.slice(0,2));
	}
	catch {
		console.warn(`pwa-install: translation error - unsupported locale: ${lang}`);
	}
};
