import { career } from '../data/portfolio';
import { t, tList } from '../i18n';
import { accentText, sectionHeader } from '../utils/ui';

const dot = {
  primary: 'bg-primary shadow-[0_0_8px_#d2bbff]',
  secondary: 'bg-secondary shadow-[0_0_8px_#faabff]',
  tertiary: 'bg-tertiary shadow-[0_0_8px_#bec2ff]',
};

export const renderCareer = () => {
  const texts = tList<{ title: string; text: string }>('career.items');
  return `
<section id="experience" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  ${sectionHeader('history', t('career.title'), t('career.subtitle'), 'bg-tertiary-container/30 text-tertiary')}
  <div class="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-tertiary-container before:via-primary-container before:to-surface-container-high">
    ${career
      .map(
        (c, i) => `<div class="relative p-4 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-md">
      <div class="absolute -left-[29px] top-5 w-3 h-3 rounded-full ${dot[c.accent]}"></div>
      <div class="flex flex-wrap items-center justify-between gap-1 mb-1">
        <h4 class="font-headline-sm text-headline-sm text-white font-semibold">${texts[i].title}</h4>
        <span class="px-2 py-0.5 rounded-full bg-surface-container-highest ${accentText[c.accent]} font-label-code-sm text-label-code-sm">${c.date}</span>
      </div>
      <div class="font-body-sm text-body-sm text-tertiary mb-2 font-medium">${c.org}</div>
      <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">${texts[i].text}</p>
    </div>`,
      )
      .join('')}
  </div>
</section>`;
};
