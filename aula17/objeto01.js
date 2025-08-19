let amigo = {idade:54, nome:'Jose', sexo:'M', peso:85, engordou(p = 0){this.peso += p}}
amigo.engordou(4)
console.log(amigo.peso)