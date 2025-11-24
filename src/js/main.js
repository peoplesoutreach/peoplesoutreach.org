import {Offcanvas} from 'bootstrap';
import 'bsky-embed/dist/bsky-embed.es.js';

const menu = new Offcanvas(document.getElementById('Menu'));
const navButtons = document.querySelectorAll('#nav-buttons button');
console.log(navButtons)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

navButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    await menu.hide();
    await sleep(300); // Wait for the menu to close
    const targetId = button.dataset.nav;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
