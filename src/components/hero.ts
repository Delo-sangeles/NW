import { profile } from '../data/portfolio';
import { t } from '../i18n';

export const renderHero = () => `
<section id="hero" class="relative z-10 flex flex-col items-center pt-2 pb-12 w-full text-center scroll-mt-24">
  <div class="mb-4 inline-flex items-center justify-center p-0.5 rounded-2xl bg-gradient-to-tr from-primary-container via-secondary-container to-secondary shadow-[0_0_24px_rgba(124,58,237,0.5)]">
    <div class="px-3.5 py-1.5 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md flex items-center gap-2">
      <span class="font-headline-sm text-headline-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NB</span>
      <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
      <span class="font-label-code-sm text-label-code-sm text-tertiary">SYS.ONLINE</span>
    </div>
  </div>

  <h1 class="font-display-hero-mobile text-display-hero-mobile tracking-tight text-white mb-2">
    ${profile.firstName} <span class="bg-gradient-to-r from-primary via-secondary to-secondary-fixed-dim bg-clip-text text-transparent">${profile.lastName}</span>
  </h1>

  <div class="flex flex-wrap items-center justify-center gap-2 mb-6">
    <span class="px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-headline-sm text-headline-sm font-semibold shadow-sm">${t('hero.role')}</span>
    <span class="text-outline font-label-code-sm text-label-code-sm">•</span>
    <span class="font-body-md text-body-md text-tertiary font-medium">${t('hero.tagline')}</span>
  </div>

  <div class="relative w-full max-w-sm mx-auto mb-8 p-4 rounded-3xl bg-surface-container/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(9,13,32,0.8)] border border-white/10 group">
    <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-container via-tertiary-container to-secondary-container opacity-40 blur-xl group-hover:opacity-75 transition-opacity"></div>
    <div class="relative flex flex-col items-center">
      <div class="flex flex-wrap items-center justify-center gap-1.5 mb-4">
        <span class="px-2.5 py-1 rounded-full bg-surface-container-highest/90 text-on-surface font-label-code-sm text-label-code-sm flex items-center gap-1.5 shadow-sm">
          <span class="material-symbols-outlined text-[14px] text-primary">location_on</span>${t('common.location')}
        </span>
        <span class="px-2.5 py-1 rounded-full bg-surface-container-highest/90 text-secondary font-label-code-sm text-label-code-sm flex items-center gap-1.5 shadow-sm">
          <span class="material-symbols-outlined text-[14px] text-secondary">bolt</span>${t('hero.badge')}
        </span>
      </div>
      <div class="w-full py-2 px-3 rounded-full bg-surface-container-lowest/80 text-on-surface-variant font-label-code-sm text-label-code-sm flex items-center justify-center gap-2 mb-4">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></span>
        <span>${t('hero.status')}</span>
      </div>
      <div class="flex w-full gap-2.5">
        <a href="#about" class="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-tag text-label-tag text-center uppercase tracking-wider font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.45)] hover:shadow-[0_4px_28px_rgba(224,64,251,0.55)] active:scale-95 transition-all">${t('hero.learnMore')}</a>
        <a href="#contact" class="flex-1 py-3 px-4 rounded-full bg-surface-container-high/80 text-on-surface hover:text-white font-label-tag text-label-tag text-center uppercase tracking-wider font-semibold active:scale-95 transition-all shadow-sm">${t('hero.contactMe')}</a>
      </div>
    </div>
  </div>

  <a href="#about" class="inline-flex flex-col items-center text-outline hover:text-primary transition-colors">
    <span class="font-label-code-sm text-label-code-sm mb-1 tracking-wider uppercase">${t('hero.scroll')}</span>
    <span class="material-symbols-outlined animate-bounce text-primary text-[24px]">keyboard_arrow_down</span>
  </a>
</section>`;
