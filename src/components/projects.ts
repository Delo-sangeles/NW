import { project } from '../data/portfolio';
import { t, tList } from '../i18n';
import { chips } from '../utils/ui';

export const renderProjects = () => {
  const blocks = tList<{ title: string; text: string }>('projects.blocks');
  return `
<section id="projects" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  <div class="flex items-center justify-between mb-2">
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-secondary text-[22px]">code_blocks</span>
      <h2 class="font-headline-lg text-headline-lg text-white font-bold tracking-tight">${t('projects.title')}</h2>
    </div>
    <span class="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-code-sm text-label-code-sm font-semibold">${t('projects.badge')}</span>
  </div>
  <p class="font-body-sm text-body-sm text-on-surface-variant mb-4">${t('projects.subtitle')}</p>

  <div class="relative rounded-3xl bg-surface-container/80 backdrop-blur-2xl p-5 shadow-[0_12px_44px_rgba(9,13,32,0.9)] overflow-hidden">
    <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
    <h3 class="font-headline-md text-headline-md text-white font-bold mb-1">${t('projects.name')}</h3>
    <p class="font-body-sm text-body-sm text-on-surface-variant mb-4">${t('projects.description')}</p>

    <div class="relative w-full rounded-2xl overflow-hidden mb-5 group shadow-[0_0_28px_rgba(47,59,255,0.3)]">
      <img alt="${t('projects.name')}" class="w-full h-56 object-cover object-center transform transition-transform duration-700 group-hover:scale-105" src="${project.image}" />
      <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span class="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-secondary font-label-code-sm text-label-code-sm flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>${t('projects.status')}
        </span>
        <span class="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-tertiary font-label-code-sm text-label-code-sm">${t('projects.load')}</span>
      </div>
    </div>

    <div class="space-y-3 mb-5">
      ${project.blocks
        .map(
          (b, i) => `<div class="p-3.5 rounded-xl bg-surface-container-low/90 flex flex-col gap-1">
        <div class="flex items-center gap-2 font-headline-sm text-headline-sm ${b.color} font-semibold">
          <span class="material-symbols-outlined text-[18px]">${b.icon}</span><span>${blocks[i].title}</span>
        </div>
        <p class="font-body-sm text-body-sm text-on-surface-variant">${blocks[i].text}</p>
      </div>`,
        )
        .join('')}
    </div>

    <div class="flex flex-wrap gap-1.5 mb-5">${chips(project.stack, 'bg-surface-container-highest')}</div>

    <div class="flex flex-col gap-2.5">
      
      <a href="https://github.com/Bootcamp-IA-P6/Generador-de-contenido-A-N" target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 rounded-full bg-surface-container-high/90 text-on-surface hover:text-white font-label-tag text-label-tag text-center uppercase tracking-wider font-semibold active:scale-95 transition-all flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-[18px]">code</span><span>${t('projects.github')}</span>
      </a>
    </div>
  </div>
</section>`;
};
