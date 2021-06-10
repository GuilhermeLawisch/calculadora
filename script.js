let values = []
let operators = []
let index = 0

const AddNumber = (value) => {
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

  ShowResult()
}

const AddOperator = (value) => {
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

  operators[index] = value

  index++
}

const AddComma = () => {
  values[index] += ','
  const text = document.getElementById('text')
  const valueAlreadyExists = text.getAttribute('value')
  text.setAttribute('value', `${valueAlreadyExists},`)
}

const ShowResult = () => {
  if (values.length > 1) {
    let resultParse = []
    let operatorsParse = []

    for (let i = 1; i < values.length; i++) {
      resultParse.push(values[0])

      switch (operators[i-1]) {
        case 1:   //  ADIÇÃO
        case 2:   //  SUBTRAÇÃO
          resultParse.push(values[i])
          operatorsParse.push(operators[i-1])
          break;
        case 3:   //  MULTIPLICAÇÃO
          resultParse[i-1] = String(Number(resultParse[i-1]) * Number(values[i].replace(',','.'))); 
          break;
        case 4:   //  DIVISÃO
          resultParse[i-1] = String(Number(resultParse[i-1]) / Number(values[i].replace(',','.'))); 
          break;
        default:
          resultParse.push(values[i])
          operatorsParse.push(operators[i-1])
          break;
      }
    }
    console.log(values)
    console.log(operators)
    console.log(resultParse)
    console.log(operatorsParse)

    let result = Number(resultParse[0].replace(',','.'))

    for (let i = 1; i < resultParse.length; i++) {
      switch (operatorsParse[i - 1]) {
        case 1:   //  ADIÇÃO
          result += Number(resultParse[i].replace(',','.'));
          break;
        case 2:   //  SUBTRAÇÃO
          result -= Number(resultParse[i].replace(',','.'));
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
  } else {
    let result = Number(values[0].replace(',','.'))

    const resultId = document.getElementById('result')
    if (result == 0) {
      resultId.setAttribute('value', '')
    } else {
      resultId.setAttribute('value', String(result).replace('.',','))
    }
  }
}

const Reset = () => {
  const text = document.getElementById('text')

  const valueNoFormated = values[index]

  const valueFormated = valueNoFormated.slice(0, valueNoFormated.length - 1)

  values[index] = valueFormated

  const valueAlreadyExists = text.getAttribute('value')

  text.setAttribute('value', `${valueAlreadyExists.slice(0, valueAlreadyExists.length - 1)}`)

  ShowResult()
}

const ResetAll = () => {
  values = []
  operators = []
  index = 0

  document.getElementById('text').setAttribute('value', '')
  document.getElementById('result').setAttribute('value', '')
}

document.getElementById('zero').addEventListener('click', () => AddNumber('0'))
document.getElementById('one').addEventListener('click', () => AddNumber('1'))
document.getElementById('two').addEventListener('click', () => AddNumber('2'))
document.getElementById('three').addEventListener('click', () => AddNumber('3'))
document.getElementById('four').addEventListener('click', () => AddNumber('4'))
document.getElementById('five').addEventListener('click', () => AddNumber('5'))
document.getElementById('six').addEventListener('click', () => AddNumber('6'))
document.getElementById('seven').addEventListener('click', () => AddNumber('7'))
document.getElementById('eight').addEventListener('click', () => AddNumber('8'))
document.getElementById('nine').addEventListener('click', () => AddNumber('9'))

document.getElementById('addition').addEventListener('click', () => AddOperator(1))
document.getElementById('subtraction').addEventListener('click', () => AddOperator(2))
document.getElementById('multiplication').addEventListener('click', () => AddOperator(3))
document.getElementById('division').addEventListener('click', () => AddOperator(4))

document.getElementById('comma').addEventListener('click', () => AddComma())

document.getElementById('reset').addEventListener('click', () => Reset())
document.getElementById('resetall').addEventListener('click', () => ResetAll())