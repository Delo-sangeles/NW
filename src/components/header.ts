import { profile } from '../data/portfolio';
import { t, currentLang } from '../i18n';

export const renderHeader = () => `
<header class="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(9,13,32,0.6)] pt-safe">
  <div class="h-20 px-margin-mobile flex items-center justify-between max-w-3xl mx-auto w-full">
    <div class="flex items-center gap-space-sm">
      <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-container via-secondary-container to-secondary flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
        <span class="font-headline-sm text-headline-sm text-white font-bold tracking-tight">NB</span>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center gap-1.5">
          <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[130px]">${profile.firstName} B.</span>
          <span class="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
        </div>
        <div class="flex items-center gap-1">
          <span class="px-1.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-code-sm text-label-code-sm font-semibold tracking-wide">${t('header.badge')}</span>
          <span class="text-outline font-label-code-sm text-label-code-sm">•</span>
          <span class="text-on-surface-variant font-label-code-sm text-label-code-sm">${t('header.subtitle')}</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-space-xs">
      <button id="lang-toggle" aria-label="${t('header.langAria')}" class="px-3 h-11 rounded-full bg-surface-container/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-tag text-label-tag font-semibold active:scale-95 transition-all">${currentLang() === 'es' ? 'EN' : 'ES'}</button>
      <button id="menu-toggle-btn" aria-label="Menu" class="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface bg-surface-container/60 hover:bg-surface-container-high active:scale-95 transition-all">
        <span class="material-symbols-outlined text-[22px]">terminal</span>
      </button>
    </div>
  </div>
</header>`;
