let num1 = prompt('Você está em uma calculadora digital. Digite aqui um número inteiro')
num1 = parseInt(num1)

let num2 = prompt('Agora, digite outro número inteiro.')
num2 = parseInt(num2)

const calcular = prompt('Digite qual operação você quer fazer. Lembre-se: O sinal de adição é "+". O de subtração é "-". O de multiplicação é "*" e o de divisão é "/"')

if (calcular == "+") {
    alert (`O resultado da sua operação é ${num1 + num2}`)
}
else if (calcular == "-") {
    alert (`O resultado da sua operação é ${num1 - num2}`)
}
else if (calcular == "*") {
    alert (`O resultado da sua operação é ${num1 * num2}`)
}
else if (calcular == "/") {
    alert (`O resultado da sua operação é ${num1 / num2}`)
}

else {
    ("Você não digitou nenhuma operação")
}
