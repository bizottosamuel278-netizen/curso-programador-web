// Credenciais estáticas para o teste simulado
const EMAIL_CORRETO = "admin@email.com";
const SENHA_CORRETA = "123456";

/**
 * Valida se as credenciais batem estritamente com as gravadas
 * @param {string} email 
 * @param {string} password 
 * @returns {boolean}
 */
export function verificarCredenciais(email, password) {
    if (email === EMAIL_CORRETO && password === SENHA_CORRETA) {
        return true;
    } else {
        return false;
    }
}

/**
 * Valida o preenchimento básico do cadastro
 * @param {string} nome 
 * @param {string} email 
 * @returns {boolean}
 */
export function validarDadosCadastro(nome, email) {
    if (nome !== "" && email.includes("@")) {
        return true;
    } else {
        return false;
    }
}