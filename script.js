let values = []
let simbolos = []
let index = 0
let lastValue = 0

const AdicionarNumero = (value) => {
  const text = document.getElementById('text')
  
  if (values[index]) {
    values[index] += value
  } else {
    values[index] = value
  }

  if (index === 0) {
    text.setAttribute('value', values[index])
  } else {
    const valueAlreadyExists = text.getAttribute('value')
    text.setAttribute('value', `${valueAlreadyExists}${value}`)
  }

  Resultado()
}

const AdicionarSinal = (value) => {
  const text = document.getElementById('text')
  const valueAlreadyExists = text.getAttribute('value')

  switch (value) {
    case 1:   //  ADIÇÃO
      text.setAttribute('value', `${valueAlreadyExists} + `)
      break;
    case 2:   //  SUBTRAÇÃO
      text.setAttribute('value', `${valueAlreadyExists} - `)
      break;
    case 3:   //  MULTIPLICAÇÃO
      text.setAttribute('value', `${valueAlreadyExists} x `)
      break;
    case 4:   //  DIVISÃO
      text.setAttribute('value', `${valueAlreadyExists} ÷ `)
      break;
    default:
      break;
  }

  simbolos[index] = value

  index++
}

const AdicionarVirgula = () => {
  values[index] += ','
  const text = document.getElementById('text')
  const valueAlreadyExists = text.getAttribute('value')
  text.setAttribute('value', `${valueAlreadyExists},`)
}

const Resultado = () => {
  let result = Number(values[0].replace(',','.'))

  for (let i = 1; i < values.length; i++) {
    switch (simbolos[i - 1]) {
      case 3:   //  MULTIPLICAÇÃO
        result *= Number(values[i].replace(',','.'));
        break;
      case 4:   //  DIVISÃO
        result /= Number(values[i].replace(',','.'));
        break;
      default:
        break;
    }
  }

  for (let i = 1; i < values.length; i++) {
    switch (simbolos[i - 1]) {
      case 1:   //  ADIÇÃO
        result += Number(values[i].replace(',','.'));
        break;
      case 2:   //  SUBTRAÇÃO
        result -= Number(values[i].replace(',','.'));
        break;
      default:
        break;
    }
  }

  const resultId = document.getElementById('result')
  if (result == 0) {
    resultId.setAttribute('value', '')
  } else {
    resultId.setAttribute('value', String(result).replace('.',','))
  }
}

const Reset = () => {
  const text = document.getElementById('text')

  const valueNoFormated = values[index]

  const valueFormated = valueNoFormated.slice(0, valueNoFormated.length - 1)

  values[index] = valueFormated

  const valueAlreadyExists = text.getAttribute('value')

  text.setAttribute('value', `${valueAlreadyExists.slice(0, valueAlreadyExists.length - 1)}`)

  Resultado()
}

const ResetAll = () => {
  values = []
  simbolos = []
  index = 0

  document.getElementById('text').setAttribute('value', '')
  document.getElementById('result').setAttribute('value', '')
}

document.getElementById('zero').addEventListener('click', () => AdicionarNumero('0'))
document.getElementById('um').addEventListener('click', () => AdicionarNumero('1'))
document.getElementById('dois').addEventListener('click', () => AdicionarNumero('2'))
document.getElementById('tres').addEventListener('click', () => AdicionarNumero('3'))
document.getElementById('quatro').addEventListener('click', () => AdicionarNumero('4'))
document.getElementById('cinco').addEventListener('click', () => AdicionarNumero('5'))
document.getElementById('seis').addEventListener('click', () => AdicionarNumero('6'))
document.getElementById('sete').addEventListener('click', () => AdicionarNumero('7'))
document.getElementById('oito').addEventListener('click', () => AdicionarNumero('8'))
document.getElementById('nove').addEventListener('click', () => AdicionarNumero('9'))

document.getElementById('adicionar').addEventListener('click', () => AdicionarSinal(1))
document.getElementById('subtrair').addEventListener('click', () => AdicionarSinal(2))
document.getElementById('multiplicar').addEventListener('click', () => AdicionarSinal(3))
document.getElementById('dividir').addEventListener('click', () => AdicionarSinal(4))

document.getElementById('virgula').addEventListener('click', () => AdicionarVirgula())

document.getElementById('reset').addEventListener('click', () => Reset())
document.getElementById('resetall').addEventListener('click', () => ResetAll())