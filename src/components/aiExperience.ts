import { aiExperience as ai } from '../data/portfolio';
import { t } from '../i18n';
import { chips, sectionHeader } from '../utils/ui';

export const renderAiExperience = () => `
<section id="ai-experience" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  ${sectionHeader('smart_toy', t('aiExp.title'), t('aiExp.subtitle'), 'bg-secondary-container/30 text-secondary', 'mb-5')}
  <div class="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-primary-container before:via-tertiary-container before:to-transparent">
    <div class="relative p-5 rounded-2xl bg-surface-container/75 backdrop-blur-xl shadow-lg border-l-2 border-primary">
      <div class="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_12px_#7c3aed]"></div>
      <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
        <span class="font-headline-sm text-headline-sm text-white font-semibold">${t('aiExp.role')}</span>
        <span class="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-code-sm text-label-code-sm font-semibold">${t('aiExp.date')}</span>
      </div>
      <div class="flex items-center gap-2 text-tertiary font-body-sm text-body-sm mb-3">
        <span class="font-semibold text-white">${ai.company}</span><span>•</span><span>${t('aiExp.meta')}</span>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">${t('aiExp.description')}</p>
      <div class="flex flex-wrap gap-1.5">${chips(ai.tech)}</div>
    </div>
  </div>
</section>`;
