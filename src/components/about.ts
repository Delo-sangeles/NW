import { aboutHighlights } from '../data/portfolio';
import { t, tList } from '../i18n';

export const renderAbout = () => {
  const texts = tList<{ title: string; text: string }>('about.highlights');
  return `
<section id="about" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  <div class="flex items-center gap-2 mb-3">
    <div class="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
    <h2 class="font-headline-lg text-headline-lg text-white font-bold tracking-tight">${t('about.title')}</h2>
    <div class="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-transparent"></div>
  </div>
  <div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg mb-6">
    <p class="font-body-lg text-body-lg text-on-surface leading-relaxed mb-3">${t('about.text')}</p>
    <div class="flex items-center gap-2 font-label-code-sm text-label-code-sm text-secondary">
      <span class="material-symbols-outlined text-[16px]">verified</span>
      <span>${t('about.tagline')}</span>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3 w-full">
    ${aboutHighlights
      .map(
        (h, i) => `<div class="p-4 rounded-2xl bg-surface-container-low/80 backdrop-blur-md shadow-md flex flex-col gap-1.5 hover:bg-surface-container transition-all">
      <div class="w-8 h-8 rounded-lg ${h.box} flex items-center justify-center mb-1"><span class="material-symbols-outlined text-[20px]">${h.icon}</span></div>
      <span class="font-headline-sm text-headline-sm text-white font-semibold">${texts[i].title}</span>
      <span class="font-body-sm text-body-sm text-on-surface-variant">${texts[i].text}</span>
    </div>`,
      )
      .join('')}
  </div>
</section>`;
};
