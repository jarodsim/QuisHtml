//arrays de objetos para gardar s perguntas e respostas
var perguntas = [{
        pergunta: 'Qual dessas NÃO é uma Tag da linguagem de marcação HTML?',
        opcoes: [
            '<!DOCTYPE html>',
            '<strong>',
            '<i>',
            '<meta>',
            '<link>'
        ]
    },
    {
        pergunta: 'Qual das Tags abaixo, serve para deixar o texto em itálico?',
        opcoes: [
            '<b>',
            '<italic>',
            '<i>',
            '<small></small>',
            '<a></a>'
        ]

    },
    {
        pergunta: 'Qual linha abaixo deixaria o texto de uma tag P sublinhada?',
        opcoes: [
            '<p> <sub> texto sublinhado </sub></p>',
            '<p> <i> texto sublinhado </i> </p>',
            '<p> <u> texto sublinhado </u> </p>',
            '<p> <strong> texto sublinado </strong> </p>',
            '<p> <b> texto sublinado </b> </p>'
        ]
    },
    {
        pergunta: 'Qual das opções abaixo serve para adicionarmos um css externo à nosssa página HTML?',
        opcoes: [
            '<link rel="stylesheet" type="text/css" href="estilo.css">',
            '<a href="estilo.css"></a>',
            '<link rel="estilo.css />',
            '<link rel="stylesheet" type="text/css" src="estilo.css">',
            '<style rel="stylesheet" type="text/css" src="estilo.css">'
        ]
    },
    {
        pergunta: 'HTML é uma?',
        opcoes: [
            'Linguagem de marcação de texto',
            'Linguagem de programação voltada a web',
            'Linguagem de programação orientada a web',
            'Lingagem de folha de estilo em cascata',
            'Lingagem de folha de estilo para web'
        ]
    }
]

//para verificar quais respostas ele errou
var errou = [true, true, true, true, true]

//pontuacao
var pontos = 0;

//criar botao para verificar as respostas
var p = document.getElementById('perguntas')
let input = document.createElement('input')
input.type = 'button'
input.value = 'Verificar respostas'
input.addEventListener('click', verificar)


//add as perguntas
for (let i = 0; i < perguntas.length; i++) {
    p.innerHTML += `
    <p>${perguntas[i].pergunta}
    <br>
    <select name="pergunta" id="pergunta${i}" size="5">
    </select>
    </p>`

    //add as opcoes
    for (let o = 0; o < 5; o++) {
        let select = document.getElementById('pergunta' + i)
        var option = document.createElement('option')
        option.text = perguntas[i].opcoes[o]
        option.value = o
        select.appendChild(option)
    }

}

//adiciona o botao verificar
p.appendChild(input)



/*funcao para pegar as opcoes selecionadas e verificar se bate com a resposta*/
function verificar() {
    pontos = 0;
    var titulo_resultado = document.getElementById('titulo_resultado')
    for (let p = 0; p < 5; p++) {
        let select = document.getElementById('pergunta' + p)
        if (p == 0 && select.options[select.selectedIndex].index == 0) {
            pontos += 1
            errou[p] == false
        }
        if (p == 1 && select.options[select.selectedIndex].index == 2) {
            pontos += 1
            errou[p] == false
        }
        if (p == 2 && select.options[select.selectedIndex].index == 2) {
            pontos += 1
            errou[p] == false
        }
        if (p == 3 && select.options[select.selectedIndex].index == 0) {
            pontos += 1
            errou[p] == false
        }
        if (p == 4 && select.options[select.selectedIndex].index == 0) {
            pontos += 1
            errou[p] == false
        }
    }

    //adiciona texto e pontos
    switch (pontos) {
        case 0:
            titulo_resultado.innerText = `Que pena, precisa estudar mais! \u{1F62A} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#eb2f06'
            break;
        case 1:
            titulo_resultado.innerText = `Da pra melhorar! precisa estudar mais! \u{1F626} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#e55039'
            break;
        case 2:
            titulo_resultado.innerText = `Quase na média...! precisa estudar mais! \u{1F615} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#fa983a'
            break;
        case 3:
            titulo_resultado.innerText = `Mediano! Não foi mal, mas precisa estudar mais! \u{1F609} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#78e08f'
            break;
        case 4:
            titulo_resultado.innerText = `Foi bem! Mas precisa estudar mais! \u{1F917} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#38ada9'
            break;
        case 5:
            titulo_resultado.innerText = `Parabéns! Você acertou TUDO! \u{1F60D} Sua pontuação foi de ${pontos} pontos`
            titulo_resultado.style.backgroundColor = '#079992'
            break;
    }
    explicacao()
    console.log(pontos)
}

/*funcao para verificar quais questões o usuario errou e exibir uma explicacao para tal */
function explicacao() {
    let explicacao = document.getElementById('explicacao')
    explicacao.style.display = 'block'

    for (let e = 0; e < 5; e++) {
        if (errou[0] == true) {
            console.log('errou a primeira, vagabundo')
            return
        }
        if (errou[1] == true) {
            console.log('errou a primeira, vagabundo')
            return
        }
        if (errou[2] == true) {
            console.log('errou a primeira, vagabundo')
            return
        }
        if (errou[3] == true) {
            console.log('errou a primeira, vagabundo')
            return
        }
        if (errou[4] == true) {
            console.log('errou a primeira, vagabundo')
            return
        }
    }
}