document.addEventListener('DOMContentLoaded', () => {
    const div_login = document.getElementById('div_login');
    const input_email = document.getElementById('input_email');
    const input_password = document.getElementById('input_password');
    const input_nome = document.getElementById('input_nome');
    const button_login = document.getElementById('button_login');
    const body = document.getElementById('body');

    div_login.style.width = '25vw';
    div_login.style.height = '50vh';
    div_login.style.backgroundColor = 'lightgray';

    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.backgroundColor = '#0656a1';
    body.style.margin = '0';
    body.style.fontFamily = 'Arial, sans-serif';
    button_login.style.fontSize = '16px';
    button_login.style.padding = '10px 217px';
    button_login.style.backgroundColor = '#299b1a';
    button_login.style.color = 'white';
    button_login.style.border = 'none';
    button_login.style.cursor = 'pointer';


    div_login.style.width = '25vw';
    div_login.style.height = '50vh';
    div_login.style.backgroundColor = 'lightgray';

    button_login.addEventListener('click', () => {
        if (
            input_email.value === 'exemplo@email.com' &&
            input_password.value === '123456' &&
            input_nome.value === 'exemplo'
        ) {
            alert('Bem-vindo!');
        } else {
            alert('Nome, senha ou email inválido.');
        }
    });
});