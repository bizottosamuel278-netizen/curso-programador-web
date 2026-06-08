import {moverBanner, rotacaoAutomatica} from "./banner.js";
import {createCards} from "./card.js";

const sectionCard = document.getElementById('cards_sec');

window.moverBanner = moverBanner;

document.addEventListener('DOMContentLoaded', () => {
    rotacaoAutomatica();
    createCards(sectionCard);
});

