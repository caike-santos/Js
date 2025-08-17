function calc(){
var num1 = document.getElementById('inum1')
var num2 = document.getElementById('inum2')
var soma = document.getElementById('isoma')
var res = Number(num1.value) + Number(num2.value)
soma.innerHTML += res
}

function verificar(){
    var num1 = document.getElementById('iv1')
    var num2 = document.getElementById('iv2')
    var res = document.getElementById('iver')
    while (res.firstChild) {
        res.removeChild(res.firstChild)
    }
    if(Number(num1.value) == Number(num2.value)){
        var texto = document.createElement('p')
        texto.textContent = 'Números iguais'
        res.appendChild(texto) 
    }else if(Number(num1.value) > Number(num2.value)){
        var texto = document.createElement('p')
        texto.textContent = `O maior número é ${num1.value}`
        res.appendChild(texto)
    }else{
        var texto = document.createElement('p')
        texto.textContent = `O maior número é ${num2.value}`
        res.appendChild(texto)
    }
}


