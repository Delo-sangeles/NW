import './styles.css';

import { initI18n, setLang, currentLang } from './i18n';
import { renderHeader } from './components/header';
import { renderDrawer, initDrawer } from './components/drawer';
import { renderHero } from './components/hero';
import { renderAbout } from './components/about';
import { renderAiExperience } from './components/aiExperience';
import { renderProjects } from './components/projects';
import { renderCareer } from './components/career';
import { renderSkills } from './components/skills';
import { renderEducation } from './components/education';
import { renderLanguages } from './components/languages';
import { renderContact } from './components/contact';
import { renderFooter } from './components/footer';
import { renderBottomNav, initBottomNav } from './components/bottomNav';
import { renderNeuralCanvas, renderBackgroundGlow, initNeuralCanvas } from './effects/neuralCanvas';

const app = document.getElementById('app')!;

const render = () => {
  const scrollY = window.scrollY;

  app.innerHTML = `
    ${renderBackgroundGlow()}
    ${renderHeader()}
    ${renderDrawer()}
    <main class="flex flex-col relative w-full max-w-3xl mx-auto pt-20 pb-36 px-margin-mobile bg-surface z-10">
      <div class="flex flex-col w-full relative">
        ${renderNeuralCanvas()}
        ${renderHero()}
        ${renderAbout()}
        ${renderAiExperience()}
        ${renderProjects()}
        ${renderCareer()}
        ${renderSkills()}
        ${renderEducation()}
        ${renderLanguages()}
        ${renderContact()}
      </div>
      ${renderFooter()}
    </main>
    ${renderBottomNav()}
  `;

  initDrawer();
  initBottomNav();
  initNeuralCanvas();

  document.getElementById('lang-toggle')?.addEventListener('click', async () => {
    await setLang(currentLang() === 'es' ? 'en' : 'es');
    render();
  });

  window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior });
};

initI18n().then(render);
