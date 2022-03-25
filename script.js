const input = document.getElementById('input')

const spanCerto = document.getElementById('span-certo')
const spanErrado = document.getElementById('span-errado')

const h1 = document.getElementById('h1')
const containerH1 = document.getElementById('container-h1')
const btnRecarregar = document.getElementById('recarregar')

const timeBtn = document.getElementById('time-btn')
const paragrafoTime = timeBtn.querySelector('p')

// const iniciar = document.getElementById('iniciar')
const esconder = document.getElementById('esconder')

const card = document.querySelector('.card')
const texto = document.getElementById('texto')

let num = 0
let certo = 0
let errado = 0


let n = 5

const arr = [
    'Lucas', 'Televisão',
    'Tomada', 'Histórico',
    'Toalha', 'Mouse',
    'Mousepad', 'Presidente',
    'senhores', 'estrófe',
    'cor', 'Mateus',
    'monitor', 'Thalyta',
    'Artur', 'torcida', 'dinheiro',
    'acabar', 'celular', 'Espanha',
    'Estados Unidos', 'programação',
    'mercado', 'funil', 'jogos', 'poupança',
    'Fernando', 'há', 'à', 'Twitter', 'YouTube',
    'plataforma', 'custo', 'contador',
    'estranho', 'normal', 'Brasília', 'parede', 'Brasil', 'internet',
    'JavaScript', 'descoberta', 'Whatsapp', 'Visual Studio Code', 'garrafa',
    'barra', 'academia', 'linha', 'coluna', 'fone', 'Anitta', 'Drake',
    'coberta', 'televisor', 'aspas', 'luz', 'anos',
    'Flamengo', 'torcida', 'Formiga', 'DaNiLo', 'perder', 'ganhar', 'ouro',
    'perigo', 'cabeça', 'encarar', 'entendo', 'seleção',
    'mês', 'fita', 'editor', 'confiança', 'manter',
    'atividade', 'ponto', 'porrada', 'expectativa', 'realidade', 'reais',
    'galera', 'época', 'sério', 'isso', 'convidado',
    'show', 'vestiu', 'artista', 'sabia', 'culpado',
    'será', 'dia', 'hoje', 'oposto', 'porque',
    'por quê', 'porquê', 'por que', 'barulho', 'cara'
]

function attCard(numCerto, numErrado) {
    spanCerto.textContent = numCerto
    spanErrado.textContent = numErrado
}

function intervalo() {
    const interval = setInterval(function () {
        paragrafoTime.textContent = n

        if (paragrafoTime != '1:00') {
            paragrafoTime.textContent = `0:${n--}`
        }

        if (paragrafoTime.textContent == '0:0') {

            paragrafoTime.textContent = '1:00'
            input.value = ''
            num = 0

            // iniciar.style.display = 'block'
            clearInterval(interval)
        }

        if (n == -1) {
            hide(containerH1)
            input.blur()
            n = 5
            clearInterval(interval)
        }
    }, 1000)
}

function sorteio() {

    const sorteioVar = Math.floor(Math.random() * arr.length)
    h1.textContent = arr[sorteioVar]
    // iniciar.style.display = 'block'
    
}
sorteio()


function validWord() {
    console.log(input.value)
    // let valorDOInput = input.value
    // console.log(valorDOInput.trim())
    input.value.trim()
    if (input.value === h1.textContent) {

        certo++
        attCard(certo, errado)
        input.value = ''

    } else {

        errado++
        attCard(certo, errado)
        input.value = ''

    }

    input.focus()
    sorteio()
    
}

function enivarTecla(e) {
    num++

    if (num === 1) {
        init()
    }

    if (e.keyCode === 32) {
        // input.value = ''
        validWord()
    }
}

function hide(item) {
    const itemClassList = item.classList

    if (itemClassList.contains('hide')) {
        itemClassList.remove('hide')
    } else {
        itemClassList.add('hide')
    }

}

function init() {

    certo = 0
    errado = 0
    attCard(certo, errado)

    input.value = ''

    input.focus()
    intervalo()
}

btnRecarregar.addEventListener('click', () => {
    hide(containerH1)
    sorteio()
   
})

// btn.addEventListener('click', validWord)
timeBtn.addEventListener('click', () => hide(paragrafoTime))

input.addEventListener('keypress', enivarTecla)
esconder.addEventListener('click', () => hide(card))

// input.addEventListener('keypress', function (event) {
//     num++

//     if (event.keyCode === 32) {
//         validWord()
//     }

//     if (num === 1) {
//         init()
//     }
// })