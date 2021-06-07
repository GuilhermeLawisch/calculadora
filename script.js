const values = []
const simbolos = []
let index = 0

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
      text.setAttribute('value', `${valueAlreadyExists} * `)
      break;
    case 4:   //  DIVISÃO
      text.setAttribute('value', `${valueAlreadyExists} / `)
      break;
    default:
      break;
  }

  simbolos[index] = value

  index++
}

const AdicionarVirgula = () => {
  values[index] += ','
  document.getElementById('text').setAttribute('value', values[index])
}

const Resultado = () => {
  let result = Number(values[0].replace(',','.'))

  for (let i = 1; i < values.length; i++) {
    switch (simbolos[i - 1]) {
      case 1:   //  ADIÇÃO
        result += Number(values[i].replace(',','.'));
        break;
      case 2:   //  SUBTRAÇÃO
        result -= Number(values[i].replace(',','.'));
        break;
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
  
  document.getElementById('result').setAttribute('value', result)
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

document.getElementById('resultado').addEventListener('click', () => Resultado())
