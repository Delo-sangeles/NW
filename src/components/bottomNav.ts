import { bottomNav } from '../data/portfolio';
import { t } from '../i18n';

const ACTIVE = ['text-primary', 'font-semibold'];
const IDLE = ['text-on-surface-variant', 'hover:text-on-surface'];

export const renderBottomNav = () => `
<nav class="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-4px_20px_rgba(9,13,32,0.6)]">
  <div class="flex justify-around items-center h-16 px-space-xs max-w-3xl mx-auto">
    ${bottomNav
      .map(
        (n) => `<a data-nav="${n.id}" href="#${n.id}" class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-all active:scale-95 ${IDLE.join(' ')}">
      <span class="material-symbols-outlined text-[22px]">${n.icon}</span>
      <span class="font-label-tag text-label-tag text-[10px] leading-tight">${t(n.label)}</span>
    </a>`,
      )
      .join('')}
  </div>
</nav>`;

/** Resalta el item del menú inferior según la sección visible. */
export const initBottomNav = () => {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'));
  const setActive = (id: string) =>
    links.forEach((a) => {
      const on = a.dataset.nav === id;
      a.classList.remove(...ACTIVE, ...IDLE);
      a.classList.add(...(on ? ACTIVE : IDLE));
    });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: '-40% 0px -50% 0px' },
  );
  links.forEach((a) => {
    const s = document.getElementById(a.dataset.nav!);
    if (s) observer.observe(s);
  });
  setActive('hero');
};
