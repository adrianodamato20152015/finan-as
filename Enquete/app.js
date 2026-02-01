// app.js - Lógica principal do app Enquete
// (Firebase será integrado na próxima etapa)

let usuario = null;
let isChefe = false;

// Elementos
const formInscricao = document.getElementById('formInscricao');
const painelChefe = document.getElementById('painelChefe');
const votacao = document.getElementById('votacao');
const resultado = document.getElementById('resultado');
const enviarVoto = document.getElementById('enviarVoto');
const iniciarEnquete = document.getElementById('iniciarEnquete');
const pergunta = document.getElementById('pergunta');
const grafico = document.getElementById('grafico');
const legenda = document.getElementById('legenda');

// Simulação de chefe (primeiro a entrar é o chefe)
let inscritos = [];
let metaAtual = '';
let votos = [];

formInscricao.onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    if (!nome) return;
    usuario = { nome, telefone };
    inscritos.push(usuario);
    document.getElementById('inscricao').style.display = 'none';
    // O primeiro a entrar é o chefe
    if (inscritos.length === 1) {
        isChefe = true;
        painelChefe.style.display = '';
    } else {
        votacao.style.display = '';
    }
};

iniciarEnquete && (iniciarEnquete.onclick = function() {
    metaAtual = document.getElementById('meta').value.trim();
    if (!metaAtual) return alert('Cole a meta para iniciar!');
    painelChefe.style.display = 'none';
    votacao.style.display = '';
    pergunta.innerText = `Meta: ${metaAtual}`;
});

enviarVoto && (enviarVoto.onclick = function() {
    const esforco = parseInt(document.getElementById('esforco').value);
    const efetividade = parseInt(document.getElementById('efetividade').value);
    if (isNaN(esforco) || isNaN(efetividade)) return alert('Preencha os dois campos!');
    votos.push({ nome: usuario.nome, esforco, efetividade });
    // Simulação: todos votaram
    if (votos.length === inscritos.length) {
        votacao.style.display = 'none';
        mostrarResultado();
    } else {
        votacao.innerHTML = '<h2>Aguardando os demais votarem...</h2>';
    }
});

function mostrarResultado() {
    resultado.style.display = '';
    // Média
    const mediaEsforco = votos.reduce((a, v) => a + v.esforco, 0) / votos.length;
    const mediaEfetividade = votos.reduce((a, v) => a + v.efetividade, 0) / votos.length;
    desenharGrafico(mediaEsforco, mediaEfetividade);
    legenda.innerHTML = `<b>A</b>: ${metaAtual}`;
}

function desenharGrafico(x, y) {
    const ctx = grafico.getContext('2d');
    ctx.clearRect(0, 0, grafico.width, grafico.height);
    // Eixos
    ctx.beginPath();
    ctx.moveTo(40, 360); ctx.lineTo(360, 360); // X
    ctx.moveTo(40, 360); ctx.lineTo(40, 40);   // Y
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Seta X
    ctx.beginPath();
    ctx.moveTo(360, 360); ctx.lineTo(350, 350);
    ctx.moveTo(360, 360); ctx.lineTo(350, 370);
    ctx.stroke();
    // Seta Y
    ctx.beginPath();
    ctx.moveTo(40, 40); ctx.lineTo(30, 50);
    ctx.moveTo(40, 40); ctx.lineTo(50, 50);
    ctx.stroke();
    // Ponto médio
    const px = 40 + (x * 3.2);
    const py = 360 - (y * 3.2);
    ctx.beginPath();
    ctx.arc(px, py, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#2980b9';
    ctx.fill();
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText('A', px - 6, py + 6);
    // Labels
    ctx.font = '12px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText('Esforço', 200, 390);
    ctx.save();
    ctx.translate(10, 200);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('Efetividade', 0, 0);
    ctx.restore();
}
