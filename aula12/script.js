
function carregar(){
    var texto = document.getElementById('text');
    var img = document.getElementById('imagem');
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
     texto.innerHTML = `Agora são exatamente ${hora}:${minuto} minutos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}