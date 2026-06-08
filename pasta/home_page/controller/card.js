export function createCards(sectionCard) {
    for (let i = 0; i < 8; i++) {
        const card = document.createElement('div');
        card.className = 'card';

        // Image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image_container';

        const imageSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        imageSvg.setAttribute('viewBox', '0 0 24 24');
        imageSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        imageSvg.classList.add('image');

        const imagePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        imagePath.setAttribute('d', 'M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z');

        imageSvg.appendChild(imagePath);
        imageContainer.appendChild(imageSvg);

        // Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        const titleSpan = document.createElement('span');
        titleSpan.textContent = 'New brand name';
        titleDiv.appendChild(titleSpan);

        // Size
        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'size';
        const sizeSpan = document.createElement('span');
        sizeSpan.textContent = 'Size';
        const sizeList = document.createElement('ul');
        sizeList.className = 'list-size';

        [37, 38, 39, 40, 41].forEach(size => {
            const li = document.createElement('li');
            li.className = 'item-list';
            const btn = document.createElement('button');
            btn.className = 'item-list-button';
            btn.textContent = size;
            li.appendChild(btn);
            sizeList.appendChild(li);
        });

        sizeDiv.appendChild(sizeSpan);
        sizeDiv.appendChild(sizeList);

        // Action
        const actionDiv = document.createElement('div');
        actionDiv.className = 'action';

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';
        const priceSpan = document.createElement('span');
        priceSpan.textContent = '$299';
        priceDiv.appendChild(priceSpan);

        const cartButton = document.createElement('button');
        cartButton.className = 'cart-button';

        const cartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cartSvg.classList.add('cart-icon');
        cartSvg.setAttribute('stroke', 'currentColor');
        cartSvg.setAttribute('stroke-width', '1.5');
        cartSvg.setAttribute('viewBox', '0 0 24 24');
        cartSvg.setAttribute('fill', 'none');
        cartSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const cartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cartPath.setAttribute('d', 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z');
        cartPath.setAttribute('stroke-linejoin', 'round');
        cartPath.setAttribute('stroke-linecap', 'round');

        cartSvg.appendChild(cartPath);

        const cartSpan = document.createElement('span');
        cartSpan.textContent = 'Add to cart';

        cartButton.appendChild(cartSvg);
        cartButton.appendChild(cartSpan);

        actionDiv.appendChild(priceDiv);
        actionDiv.appendChild(cartButton);

        // Montar card
        card.appendChild(imageContainer);
        card.appendChild(titleDiv);
        card.appendChild(sizeDiv);
        card.appendChild(actionDiv);

        // Inserir na section
        sectionCard.appendChild(card);
    }
}