import { languages } from '../data/portfolio';
import { t, tList } from '../i18n';
import { sectionHeader } from '../utils/ui';

export const renderLanguages = () => {
  const texts = tList<{ name: string; level: string }>('languages.items');
  return `
<section id="languages" class="relative z-10 flex flex-col py-6 w-full scroll-mt-24">
  ${sectionHeader('translate', t('languages.title'), t('languages.subtitle'), 'bg-secondary-container/30 text-secondary', 'mb-4')}
  <div class="grid grid-cols-2 gap-3 w-full">
    ${languages
      .map(
        (l, i) => `<div class="p-4 rounded-2xl bg-surface-container/75 backdrop-blur-xl shadow-md flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="font-headline-sm text-headline-sm text-white font-semibold">${texts[i].name}</span>
          <span class="font-label-code-sm text-label-code-sm ${l.badgeColor} font-bold">${l.badge}</span>
        </div>
        <span class="font-body-sm text-body-sm ${l.levelColor}">${texts[i].level}</span>
      </div>
      <div class="w-full h-1.5 rounded-full bg-surface-container-lowest mt-3 overflow-hidden">
        <div class="h-full rounded-full bg-gradient-to-r ${l.bar}" style="width:${l.pct}%"></div>
      </div>
    </div>`,
      )
      .join('')}
  </div>
</section>`;
};
