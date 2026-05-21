import { verificarCredenciais, validarDadosCadastro } from '../model/authModel.js';

/**
 * Alterna a exibição usando strings de ID para manipular o DOM básico
 * @param {string} idEsconder 
 * @param {string} idMostrar 
 */
function alternarTelas(idEsconder, idMostrar) {
    const elementoEsconder = document.getElementById(idEsconder);
    const elementoMostrar = document.getElementById(idMostrar);
    
    elementoEsconder.classList.add('hidden');
    elementoMostrar.classList.remove('hidden');
    
    // Reaplica a classe de animação para reiniciar o efeito visual de entrada
    elementoMostrar.classList.remove('animar-entrada');
    void elementoMostrar.offsetWidth; // Truque do DOM para resetar animação CSS
    elementoMostrar.classList.add('animar-entrada');
}

/**
 * Processa a verificação de Login por parâmetros textuais
 * @param {string} email 
 * @param {string} senha 
 */
function processarLogin(email, senha) {
    // Aplicação estrita da lógica if/else solicitada
    if (verificarCredenciais(email, senha) === true) {
        window.location.href = './home_page/home_page.html'; // Redireciona para a página principal
        document.getElementById('login-form').reset();
    } else {
        alert("❌ E-mail ou senha inválidos!");
    }
}

/**
 * Processa os dados de cadastro e retorna aviso de sucesso
 * @param {string} nome 
 * @param {string} email 
 */
function processarCadastro(nome, email) {
    if (validarDadosCadastro(nome, email) === true) {
        window.location.href = './home_page/home_page.html'; 
    } else {
        alert("❌ Falha ao cadastrar. Verifique os dados fornecidos.");
    }
}

/**
 * Configura e dispara as funções através do DOM básico
 */
export function inicializarFormularios() {
    // Captura básica de cliques para trocar de tela
    document.getElementById('link-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        alternarTelas('login-container', 'register-container');
    });

    document.getElementById('link-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        alternarTelas('register-container', 'login-container');
    });

    // Captura de envio do Login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInformado = document.getElementById('login-email').value;
        const senhaInformada = document.getElementById('login-password').value;
        
        // Passa os valores brutos capturados por parâmetro
        processarLogin(emailInformado, senhaInformada);
    });

    // Captura de envio do Cadastro
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeInformado = document.getElementById('register-name').value;
        const emailInformado = document.getElementById('register-email').value;
        
        // Passa os valores brutos capturados por parâmetro
        processarCadastro(nomeInformado, emailInformado);
    });
}

