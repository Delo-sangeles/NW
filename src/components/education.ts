import { education } from '../data/portfolio';
import { t, tList } from '../i18n';
import { sectionHeader } from '../utils/ui';

const style = {
  primary: { border: 'border-primary/20', badge: 'bg-primary-container/20 text-primary', org: 'text-tertiary' },
  secondary: { border: 'border-secondary/20', badge: 'bg-secondary-container/20 text-secondary', org: 'text-secondary-fixed-dim' },
  tertiary: { border: 'border-tertiary/20', badge: 'bg-surface-container-highest text-tertiary', org: 'text-tertiary' },
};

export const renderEducation = () => {
  const texts = tList<{ title: string; org: string; text: string }>('education.items');
  return `
<section id="education" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  ${sectionHeader('school', t('education.title'), t('education.subtitle'), 'bg-primary-container/30 text-primary')}
  <div class="space-y-4 w-full">
    ${education
      .map((e, i) => {
        const s = style[e.accent];
        return `<div class="p-4 rounded-2xl bg-surface-container/75 backdrop-blur-xl shadow-md border-t ${s.border} hover:scale-[1.01] transition-transform">
      <div class="flex flex-wrap items-center justify-between gap-1 mb-1">
        <h4 class="font-headline-sm text-headline-sm text-white font-semibold">${texts[i].title}</h4>
        <span class="px-2 py-0.5 rounded-full ${s.badge} font-label-code-sm text-label-code-sm">${e.date}</span>
      </div>
      <div class="${s.org} font-body-sm text-body-sm mb-2 font-medium">${texts[i].org}</div>
      <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">${texts[i].text}</p>
    </div>`;
      })
      .join('')}
  </div>
</section>`;
};
