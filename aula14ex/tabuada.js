function tabuada(){
    var num = document.getElementById('inum')
    var i = 0
    var res = document.getElementById('res')
    res.innerHTML = ''
    if(num.value.length == 0){
        alert('[ERRO] Digite um número!')
        return
    }
    for(i=0; i<=10; i++){
       
        res.innerHTML += `<li>${num.value} x ${i} = ${Number(num.value) * i}</li>`
    }
}
