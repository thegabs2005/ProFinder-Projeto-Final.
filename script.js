// Variáveis de Estado Globais
let isLogin = true; 
let userRole = 'client'; 
let profissionalLogado = {
    nome: "Novo Profissional",
    categoria: "Serviço Editável (Ex: Cabeleireira)",
    foto: "ana-hair.png" 
};


// FUNÇÃO DE MOSTRAR SEÇÃO
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    if (id === 'professional-dashboard') {
        // Preenche o painel com os dados do profissional logado
        document.getElementById('pro-name').value = profissionalLogado.nome;
        document.getElementById('pro-category').value = profissionalLogado.categoria;
        document.getElementById('pro-profile-pic').src = profissionalLogado.foto;
        document.getElementById('dashboard-link').style.display = 'block';
    } else {
        document.getElementById('dashboard-link').style.display = 'none';
    }
}


// FUNÇÃO PARA ALTERNAR ENTRE LOGIN E CADASTRO (CORRIGIDA E TESTADA)
function toggleAuth() {
    // Inverte o estado atual
    isLogin = !isLogin; 
    
    const title = document.getElementById('auth-title');
    const btn = document.querySelector('.btn-main');
    const p = document.querySelector('.toggle-link');

    if (isLogin) {
        // Modo Login
        title.innerText = "Login";
        btn.innerText = "Entrar";
        p.innerText = "Não tem conta? Cadastre-se";
    } else {
        // Modo Cadastro
        title.innerText = "Cadastro";
        btn.innerText = "Criar Conta";
        p.innerText = "Já tem conta? Faça Login";
    }
}


// FUNÇÃO PARA SELECIONAR O TIPO DE USUÁRIO
function setRole(role) {
    userRole = role;
    document.getElementById('btn-client').classList.remove('active-role');
    document.getElementById('btn-pro').classList.remove('active-role');
    document.getElementById('btn-' + role).classList.add('active-role');
}


// FUNÇÃO PRINCIPAL QUE SIMULA O LOGIN/CADASTRO
function acaoPrincipal() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === "" || password === "") {
        alert("Por favor, preencha E-mail e Senha!");
        return;
    }

    if (isLogin) {
        alert(`Login (${userRole.toUpperCase()}) realizado com sucesso!`);
    } else {
        alert(`Cadastro (${userRole.toUpperCase()}) realizado com sucesso!`);
    }

    // Redirecionamento após o sucesso
    if (userRole === 'client') {
        showSection('home');
    } else {
        // Se for profissional, personaliza o nome e vai para o painel
        profissionalLogado.nome = email.split('@')[0].toUpperCase().replace('.', ' ') || "Meu Nome Profissional"; 
        showSection('professional-dashboard');
    }
}


// FUNÇÕES DE SIMULAÇÃO (Cliente)
function agendar() {
    alert("Simulação de Agendamento: Escolha a data e hora!");
}

function avaliar() {
    alert("Simulação de Avaliação: Dê suas estrelas e envie um comentário!");
}

// FUNÇÃO SALVAR PERFIL (Profissional)
function salvarPerfil() {
    profissionalLogado.nome = document.getElementById('pro-name').value;
    profissionalLogado.categoria = document.getElementById('pro-category').value;

    alert(`Simulação: Perfil salvo!\nNome: ${profissionalLogado.nome}\nCategoria: ${profissionalLogado.categoria}`);
}