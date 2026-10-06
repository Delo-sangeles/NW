import { profile } from '../data/portfolio';
import { t } from '../i18n';

export const renderFooter = () => `
<footer class="mt-space-xl pt-space-lg flex flex-col items-center gap-space-sm">
  <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container/80 text-on-surface-variant font-label-code-sm text-label-code-sm shadow-[0_0_12px_rgba(47,59,255,0.15)]">
    <span class="material-symbols-outlined text-primary text-[15px]">location_on</span>
    <span>${t('common.location')}</span><span class="text-outline">•</span><span class="text-tertiary font-medium">UTC+1</span>
  </div>
  <p class="font-label-code-sm text-label-code-sm text-outline text-center">© ${new Date().getFullYear()} ${profile.firstName} ${profile.lastName}</p>
</footer>
<a href="#hero" aria-label="${t('footer.top')}" class="fixed bottom-28 right-margin-mobile z-40 w-11 h-11 rounded-full bg-surface-container-high/90 backdrop-blur-xl text-primary flex items-center justify-center shadow-[0_0_18px_rgba(124,58,237,0.35)] hover:bg-primary-container hover:text-on-primary-container active:scale-95 transition-all">
  <span class="material-symbols-outlined text-[20px]">north</span>
</a>`;
