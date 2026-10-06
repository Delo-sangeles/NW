import type { Accent } from '../data/portfolio';

export const accentText: Record<Accent, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
};

const cycle: Accent[] = ['primary', 'secondary', 'tertiary'];

export const chip = (label: string, accent: Accent, bg = 'bg-surface-container-high', pad = 'px-2.5 py-1') =>
  `<span class="${pad} rounded-full ${bg} ${accentText[accent]} font-label-code-sm text-label-code-sm font-medium">${label}</span>`;

export const chips = (labels: string[], bg?: string, pad?: string) =>
  labels.map((l, i) => chip(l, cycle[i % 3], bg, pad)).join('');

export const sectionHeader = (icon: string, title: string, subtitle: string, box: string, mb = 'mb-6') => `
  <div class="flex items-center gap-2 mb-2">
    <div class="w-7 h-7 rounded-lg ${box} flex items-center justify-center">
      <span class="material-symbols-outlined text-[18px]">${icon}</span>
    </div>
    <h2 class="font-headline-lg text-headline-lg text-white font-bold tracking-tight">${title}</h2>
  </div>
  <p class="font-body-sm text-body-sm text-on-surface-variant ${mb}">${subtitle}</p>`;

export const closeDrawer = () => {
  const d = document.getElementById('mobile-drawer');
  d?.classList.add('hidden');
  d?.classList.remove('flex');
};
