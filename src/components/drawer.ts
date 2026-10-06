import { navItems } from '../data/portfolio';
import { t } from '../i18n';
import { closeDrawer } from '../utils/ui';

export const renderDrawer = () => `
<div id="mobile-drawer" class="hidden fixed inset-0 z-40 bg-surface-container-lowest/80 backdrop-blur-2xl flex-col pt-24 px-margin-mobile pb-safe">
  <div class="flex justify-between items-center py-space-sm max-w-3xl mx-auto w-full">
    <span class="font-label-tag text-label-tag text-tertiary uppercase tracking-wider">${t('drawer.title')}</span>
    <button id="drawer-close" class="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
  <div class="grid grid-cols-2 gap-space-sm mt-space-sm overflow-y-auto max-w-3xl mx-auto w-full">
    ${navItems
      .map(
        (n) => `<a data-drawer-link href="#${n.id}" class="p-space-sm rounded-xl bg-surface-container/70 hover:bg-surface-container-high flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm">
      <span class="material-symbols-outlined ${n.color} text-[18px]">${n.icon}</span>${t(n.label)}</a>`,
      )
      .join('')}
  </div>
</div>`;

export const initDrawer = () => {
  const drawer = document.getElementById('mobile-drawer');
  document.getElementById('menu-toggle-btn')?.addEventListener('click', () => {
    drawer?.classList.toggle('hidden');
    drawer?.classList.toggle('flex');
  });
  document.getElementById('drawer-close')?.addEventListener('click', closeDrawer);
  document.querySelectorAll('[data-drawer-link]').forEach((a) => a.addEventListener('click', closeDrawer));
};
