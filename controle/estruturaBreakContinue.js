/* estrutura de controle usando break/Continue é usado em laços de repetição while, do/while, for e com os comandos switch/case. 
Quando usado em laço de repetição, causa uma interrupção imediata do mesmo
*/

const nums = [9, 4, 89, 49, 57, 30, 58]


for (x in nums) {
    if (x == 49) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
};



for (y in nums) {
    if (y == 49) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


externo: for (a in nums){
    for (b in nums) {
       if(a == 4 && b == 58) break externo
       console.log(`par == ${a}, ${b}`)
    }


}

