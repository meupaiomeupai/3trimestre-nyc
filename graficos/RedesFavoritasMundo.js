import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function tintasFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/tintas-favoritas.json' // Substitua pelo caminho adequado para um JSON sobre tintas
    const res = await fetch(url)
    const dados = await res.json()
    const tiposTintas = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: tiposTintas,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Tipos de Tintas Mais Populares',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Entre as diversas opções de tintas disponíveis no mercado, a tinta <span>Acrílica</span> destaca-se como uma das <span>preferidas pelos usuários</span> para pinturas residenciais, seguida pela tinta <span>Esmalte</span>, popular em aplicações de metais e madeiras. Essas escolhas mostram as tendências de preferência por tintas que oferecem durabilidade e acabamento de alta qualidade.`)
}

tintasFavoritasMundo()
