function verificar(){
    var ano = document.getElementById('iano')
    var texto = document.getElementById('text')
    var imagem = document.getElementById('img')
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var idade = anoatual - Number(ano.value)
   
    if(idade < 0 || ano.value.length == 0){
        texto.innerHTML = `Data invalida`
        imagem.src = 'pergunta.jpg'
    }else{
        var sexo = document.getElementsByClassName('sexo')
        var genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
        }else if(sexo[1].checked){
            genero = 'Mulher'
        }else{
            genero = 'Não especificado'
        }
        texto.innerHTML = `Detectamos ${genero} com ${idade} anos`
        if(idade < 10){
            if(genero == 'Homem'){
                imagem.src = 'criançaM.jpg'
            }else{
                imagem.src = 'criançaF.jpg'
            }
        }else if(idade < 12){
            if(genero == 'Homem'){
                imagem.src = 'preadolescenteM.jpg'
            }else{
                imagem.src = 'preadolescenteF.jpg'
            }
        }else if(idade < 18){
            if(genero == 'Homem'){
                imagem.src = 'adolescenteM.jpg'
            }else{
                imagem.src = 'adolescenteF.jpg'
            }
        }else if(idade < 29){
            if(genero == 'Homem'){
                imagem.src = 'jadultoM.jpg'
            }else{
                imagem.src = 'jadultoF.jpg'
            }
        }else if(idade < 59){
            if(genero == 'Homem'){
                imagem.src = 'adultoM.jpg'
            }else{
                imagem.src = 'adultoF.jpg'
            }
        }else {
            if(genero == 'Homem'){
                imagem.src = 'idosoM.jpg'
            }else{
                imagem.src = 'idosoF.jpg'
            }
        }
    }
      
}