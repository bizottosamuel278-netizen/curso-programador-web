let posicaoAtual = 0;
let larguraBanner = 70;
let qntBanner = 5;


export function moverBanner(direcao) {
    const navBanner = document.getElementById('navegacao-banner');

    if (direcao === 'E') {
        if (posicaoAtual >= 0){
            posicaoAtual = -(larguraBanner * (qntBanner - 1));
        }else{
            posicaoAtual += larguraBanner;
        }
    } else {
        if (posicaoAtual <= -(larguraBanner * (qntBanner - 1))){
            posicaoAtual = 0;
        }else{
            posicaoAtual -= larguraBanner;
        }
    }
    navBanner.style.left = `${posicaoAtual}vw`;
}

export function rotacaoAutomatica() {
    setInterval(() => {
        moverBanner('D');
    }, 5000);
}