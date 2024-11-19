const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesTintasGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasUsandoTintas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemUsandoTintas = ((pessoasUsandoTintas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto-tinta') // Classe ajustada para o tema de tinta
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasUsandoTintas} bilhões</span> utilizam algum tipo de produto de tinta, passando em média <span>${horas} horas</span> e <span>${minutos} minutos</span> por ano em atividades de pintura e manutenção de superfícies.<br>Isso significa que aproximadamente <span>${porcentagemUsandoTintas}%</span> da população utiliza tintas em suas residências ou locais de trabalho.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesTintasGlobais()
