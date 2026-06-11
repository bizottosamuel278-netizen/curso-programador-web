import { bd } from '../model/bd.js';

export function createCards(cards_sec) {
    if (!cards_sec) return;
    cards_sec.innerHTML = ""; 

    bd.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image_container';
        
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.className = 'product-img';
        imageContainer.appendChild(img);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        const titleSpan = document.createElement('span');
        titleSpan.textContent = produto.nome;
        titleDiv.appendChild(titleSpan);

        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'size';
        const sizeSpan = document.createElement('span');
        sizeSpan.textContent = "Tamanhos";
        sizeDiv.appendChild(sizeSpan);

        const ulSize = document.createElement('ul');
        ulSize.className = 'list-size';

        produto.tamanhos.slice(0, 4).forEach(tamanho => {
            const li = document.createElement('li');
            li.className = 'item-list';
            const btnSize = document.createElement('button');
            btnSize.className = 'item-list-button';
            btnSize.textContent = tamanho;
            li.appendChild(btnSize);
            ulSize.appendChild(li);
        });
        sizeDiv.appendChild(ulSize);

        const actionDiv = document.createElement('div');
        actionDiv.className = 'action';

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
        priceDiv.appendChild(priceSpan);

        const cartButton = document.createElement('button');
        cartButton.className = 'cart-button';
        cartButton.innerHTML = `
            <svg class="cart-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
            <span>Comprar</span>
        `;

        actionDiv.appendChild(priceDiv);
        actionDiv.appendChild(cartButton);

        card.appendChild(imageContainer);
        card.appendChild(titleDiv);
        card.appendChild(sizeDiv);
        card.appendChild(actionDiv);

        cards_sec.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('cards_sec');
    createCards(section);
});






















