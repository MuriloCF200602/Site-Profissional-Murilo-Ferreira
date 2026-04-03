/* ==========================================
   1. FUNCIONALIDADE: ALTERNAR TEMA (DARK/LIGHT)
   ========================================== */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já tinha uma preferência salva no navegador
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleButton();
}

themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-theme' no body
    body.classList.toggle('dark-theme');
    
    // Salva a escolha do usuário para a próxima vez que ele abrir o site
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', '');
    }
    
    updateToggleButton();
});

function updateToggleButton() {
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Escuro';
    }
}

/* ==========================================
   2. FUNCIONALIDADE: VALIDAÇÃO E ENVIO DE FORMULÁRIO
   ========================================== */
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    // Impede o recarregamento da página (comportamento padrão do form)
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Regex simples para validar formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Lógica de validação
    if (nome === '' || email === '' || mensagem === '') {
        showFeedback('Por favor, preencha todos os campos!', 'red');
        return;
    }

    if (!emailRegex.test(email)) {
        showFeedback('Por favor, insira um e-mail válido.', 'orange');
        return;
    }

    // SIMULAÇÃO DE ENVIO COM SUCESSO
    // Aqui fingimos que os dados foram para um servidor
    showFeedback('Enviando...', 'blue');

    setTimeout(() => {
        // Limpa o formulário
        contactForm.reset();

        // Exibe o alerta de sucesso conforme solicitado no trabalho
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        showFeedback('Mensagem enviada com sucesso!', 'green');
        
        // Remove a mensagem de feedback após 5 segundos
        setTimeout(() => {
            formFeedback.textContent = '';
        }, 5000);

    }, 1500); // Simula um atraso de rede de 1.5 segundos
});

// Função auxiliar para mostrar mensagens abaixo do formulário
function showFeedback(text, color) {
    formFeedback.textContent = text;
    formFeedback.style.color = color;
}

/* ==========================================
   3. INTERAÇÃO ADICIONAL: FECHAR MENU AO CLICAR (MOBILE)
   ========================================== */
// Em dispositivos móveis, é uma boa prática fechar o menu após clicar em um link
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navegando para: ${link.getAttribute('href')}`);
    });
});