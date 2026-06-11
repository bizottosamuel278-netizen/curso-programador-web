    let currentSize = '';
    let discountApplied = false;
    const basePrice = 159.90;

    function changeView(sideName, imageUrl, buttonElement) {
      document.getElementById('main-product-image').src = imageUrl;
      document.getElementById('view-label').innerText = sideName;

      const buttons = document.querySelectorAll('.thumb-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      buttonElement.classList.add('active');
    }

    function selectSize(buttonElement) {
      const buttons = document.querySelectorAll('.size-btn');
      buttons.forEach(btn => btn.classList.remove('selected'));
      
      buttonElement.classList.add('selected');
      currentSize = buttonElement.innerText;
    }

    function applyCoupon() {
      const couponInput = document.getElementById('coupon-field').value.trim().toUpperCase();
      const messageElement = document.getElementById('coupon-msg');
      const priceElement = document.getElementById('display-price');

      if (discountApplied) {
        messageElement.style.color = '#ffcc00';
        messageElement.innerText = "Um cupom já foi aplicado nesta compra.";
        messageElement.style.display = 'block';
        return;
      }

      if (couponInput === 'NIKE10') {
        let finalPrice = basePrice * 0.9;
        priceElement.innerText = `R$ ${finalPrice.toFixed(2).replace('.', ',')}`;
        
        messageElement.style.color = '#00e65a';
        messageElement.innerText = "Cupom 'NIKE10' aplicado! 10% de desconto.";
        messageElement.style.display = 'block';
        discountApplied = true;
      } else if (couponInput === '') {
        messageElement.style.color = '#ff4444';
        messageElement.innerText = "Por favor, digite um cupom.";
        messageElement.style.display = 'block';
      } else {
        messageElement.style.color = '#ff4444';
        messageElement.innerText = "Cupom inválido ou expirado.";
        messageElement.style.display = 'block';
      }
    }

    function checkout() {
      if (!currentSize) {
        alert('Por favor, selecione um tamanho (P, M, G, GG) antes de comprar!');
      } else {
        alert(`Produto adicionado ao carrinho!\nTamanho: ${currentSize}\nValor: ${document.getElementById('display-price').innerText}`);
      }
    }