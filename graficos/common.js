const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'), // cor primária para o tema de tinta
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div')
    grafico.className = 'grafico-tinta' // nome de classe ajustado para tema de tinta
    document.getElementById('graficos-container').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto-tinta') // nome de classe ajustado para tema de tinta
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export { getCSS, tickConfig, criarGrafico, incluirTexto }
