import { profile } from '../data/portfolio';
import { t } from '../i18n';

const gradientBtn = 'bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white';

const getLinks = () => [
  { label: t('contact.email'), value: profile.email, href: `mailto:${profile.email}`, icon: 'mail', box: 'bg-primary-container/30 text-primary', ext: false },
  { label: t('contact.phone'), value: profile.phone, href: profile.phoneHref, icon: 'call', box: 'bg-secondary-container/30 text-secondary', ext: false },
  { label: 'GitHub', value: profile.github, href: profile.githubUrl, icon: 'terminal', box: 'bg-tertiary-container/30 text-tertiary', ext: true },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, icon: 'badge', box: 'bg-primary-container/30 text-primary', ext: true },
];

export const renderContact = () => `
<section id="contact" class="relative z-10 flex flex-col py-8 w-full scroll-mt-24">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></div>
    <h2 class="font-headline-lg text-headline-lg text-white font-bold tracking-tight">${t('contact.title')}</h2>
  </div>
  <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">${t('contact.text')}</p>

  <div class="grid grid-cols-1 gap-2.5 mb-6 w-full">
    ${getLinks()
      .map(
        (l) => `<a href="${l.href}" ${l.ext ? 'target="_blank" rel="noopener noreferrer"' : ''} class="p-3.5 rounded-2xl bg-surface-container/80 backdrop-blur-md flex items-center justify-between hover:bg-surface-container-high transition-all group">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl ${l.box} flex items-center justify-center group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-[20px]">${l.icon}</span></div>
        <div class="flex flex-col">
          <span class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-wider">${l.label}</span>
          <span class="font-label-code-sm text-label-code-sm text-white truncate max-w-[210px]">${l.value}</span>
        </div>
      </div>
      <span class="material-symbols-outlined text-outline text-[18px]">open_in_new</span>
    </a>`,
      )
      .join('')}
  </div>

  <a href="${import.meta.env.BASE_URL}Naizabeth_Bermudez_CV.pdf" download class="w-full py-4 px-6 rounded-full ${gradientBtn} font-headline-sm text-headline-sm text-center font-bold tracking-tight shadow-[0_8px_32px_rgba(224,64,251,0.4)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3">
    <span class="material-symbols-outlined text-[24px]">download</span><span>${t('contact.download')}</span>
  </a>
</section>`;
