var idade = 25

if(idade < 16){
    console.log('Não pode votar')
}else if(idade < 18 || idade > 65){
    console.log('Voto não obrigatório')
}else {
    console.log('Voto obrigatório')
}