const STORAGE_KEY = 'sentimentos_estrelas';

// Criar elemento tooltip uma vez e reutilizar
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

// Função para mostrar tooltip
function mostrarTooltip(texto, e) {
    tooltip.textContent = texto;
    tooltip.style.opacity = '1';
    
    // Posicionar tooltip próximo ao mouse, mas evitando bordas da tela
    const rect = tooltip.getBoundingClientRect();
    let x = e.clientX + 10;
    let y = e.clientY + 10;
    
    if (x + rect.width > window.innerWidth) {
        x = e.clientX - rect.width - 10;
    }
    if (y + rect.height > window.innerHeight) {
        y = e.clientY - rect.height - 10;
    }
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

// Função para esconder tooltip
function esconderTooltip() {
    tooltip.style.opacity = '0';
}

// Função para posicionar elementos aleatoriamente
function posicionarElementoAleatorio(elemento) {
    // Agora vamos posicionar dentro dos limites visíveis da tela
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    elemento.style.left = `${x}px`;
    elemento.style.top = `${y}px`;
}

// Função para salvar sentimentos no localStorage
function salvarSentimentos(sentimento, posicao) {
    let sentimentos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    sentimentos.push({
        texto: sentimento,
        posicao: posicao,
        data: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sentimentos));
}

// Função para carregar sentimentos do localStorage
function carregarSentimentos() {
    const sentimentos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    sentimentos.forEach(sentimento => {
        criarEstrelaSentimento(sentimento.texto, sentimento.posicao);
    });
}

// Função para criar estrela de sentimento
function criarEstrelaSentimento(texto, posicao = null) {
    const container = document.getElementById('background-stars');
    const estrela = document.createElement('div');
    const tamanho = Math.random() * 4 + 3;
    
    estrela.className = 'estrela estrela-sentimento';
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = `${tamanho}px`;
    estrela.style.opacity = '0';
    
    // Armazenar o sentimento na estrela
    estrela.dataset.sentimento = texto;
    
    // Adicionar eventos de mouse
    estrela.addEventListener('mousemove', (e) => {
        mostrarTooltip(estrela.dataset.sentimento, e);
        e.stopPropagation();
    });
    
    estrela.addEventListener('mouseleave', esconderTooltip);
    
    // Adicionar evento de clique na estrela
    estrela.addEventListener('click', () => {
        const data = new Date();
        const mensagem = {
            texto: texto,
            data: data.toLocaleDateString(),
            hora: data.toLocaleTimeString()
        };
        localStorage.setItem('mensagem', JSON.stringify(mensagem));
        abrirModal(mensagem);
    });
    
    container.appendChild(estrela);
    
    // Usar posição salva ou gerar nova
    if (posicao) {
        estrela.style.left = posicao.left;
        estrela.style.top = posicao.top;
    } else {
        posicionarElementoAleatorio(estrela);
    }
    
    // Animação de aparecimento suave
    requestAnimationFrame(() => {
        estrela.style.opacity = '1';
        estrela.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    });
    
    return {
        left: estrela.style.left,
        top: estrela.style.top
    };
}

// Função para adicionar nova estrela quando sentimento for adicionado
function adicionarEntrada() {
    const entrada = document.getElementById('entrada');
    const texto = entrada.value.trim();
    
    if (texto !== "") {
        // Criar estrela e obter sua posição
        const posicao = criarEstrelaSentimento(texto);
        
        // Salvar no localStorage
        salvarSentimentos(texto, posicao);
        
        entrada.value = "";
    }
}

// Função para abrir o modal com a mensagem
function abrirModal(mensagem) {
    document.getElementById('modal-texto').textContent = `Mensagem: ${mensagem.texto}`;
    document.getElementById('modal-data').textContent = `Data: ${mensagem.data}`;
    document.getElementById('modal-hora').textContent = `Hora: ${mensagem.hora}`;
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Inicialização
window.addEventListener('load', () => {
    // Carregar sentimentos salvos
    carregarSentimentos();
    
    // Verifica a cada 5 segundos se deve criar um planeta
    setInterval(criarPlaneta, 5000);
    
    // Verifica a cada 2 segundos se deve criar uma estrela cadente
    setInterval(criarEstrelaCadente, 2000);
});

// Recalcular a posição das estrelas ao redimensionar a janela
window.addEventListener('resize', () => {
    document.querySelectorAll('.falling-star').forEach(estrela => {
        estrela.style.top = `${Math.random() * 100}vh`;
        estrela.style.left = `${Math.random() * 100}vw`;
    });
});
let totalSentimentos = 0;

function adicionarEntrada() {
    const entrada = document.getElementById('entrada');
    const texto = entrada.value.trim();
    
    if (texto !== "") {
        // Criar estrela e obter sua posição
        const posicao = criarEstrelaSentimento(texto);
        
        // Salvar no localStorage
        salvarSentimentos(texto, posicao);
        
        entrada.value = "";
        
        // Incrementar o total de sentimentos
        totalSentimentos++;
        
        // Atualizar o texto do elemento total-sentimentos
        document.querySelector('#total-sentimentos span').innerText = `Você tem: ${totalSentimentos} sentimentos`;
    }
}