import { skills } from '../data/portfolio';
import { t, tList } from '../i18n';
import { accentText, chips, sectionHeader } from '../utils/ui';

export const renderSkills = () => {
  const groups = tList<string>('skills.groups');
  return `
<section id="skills" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  ${sectionHeader('memory', t('skills.title'), t('skills.subtitle'), 'bg-primary-container/30 text-primary')}
  <div class="space-y-4 w-full">
    ${skills
      .map(
        (s, i) => `<div class="p-4 rounded-2xl bg-surface-container/75 backdrop-blur-xl shadow-md">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2 font-headline-sm text-headline-sm text-white font-semibold">
          <span class="material-symbols-outlined ${accentText[s.accent]} text-[20px]">${s.icon}</span><span>${groups[i]}</span>
        </div>
        <span class="font-label-code-sm text-label-code-sm ${accentText[s.accent]} font-bold">${s.pct}%</span>
      </div>
      <div class="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden mb-3">
        <div class="h-full rounded-full bg-gradient-to-r ${s.bar}" style="width:${s.pct}%"></div>
      </div>
      <div class="flex flex-wrap gap-1.5">${chips(s.chips, 'bg-surface-container-high', 'px-2 py-0.5')}</div>
    </div>`,
      )
      .join('')}
  </div>
</section>`;
};
