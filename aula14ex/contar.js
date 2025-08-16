function contar(){
    var i = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
    res.innerHTML = 'Contando: <br>'
    if(i.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
        return
    }
    if(Number(passo.value) <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        passo.value = 1
    }
    if(Number(i.value) < Number(fim.value)){
        for(i=Number(i.value); i<=Number(fim.value); i+=Number(passo.value)){
            res.innerHTML += `${i} \u{1F449}`
        }
    }else{
        for(i=Number(i.value); i>=Number(fim.value); i-=Number(passo.value)){
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}