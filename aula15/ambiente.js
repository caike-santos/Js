let num = [2, 500, 90, 7, 3]
num.sort(function(a, b){return a-b})
num.push(8)
console.log(num)
for(let pos in num){
    console.log(`A posição ${pos} é = ${num[pos]}`)
}
let p = num.indexOf(1)
console.log(p)