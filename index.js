let growcoins = [50, 10, 5 ,1]
let retirada = parseInt(prompt("digite o numero inteiro a retirar"))
    for (let i = 0; i < growcoins.length; i++) {
        if(growcoins[i] <= retirada){
        totalgrow = parseInt(retirada / growcoins[i])
        retirada = retirada - (growcoins[i] * totalgrow)
        console.log(retirada)
            if (totalgrow !== 0) {
                document.write(`${totalgrow} growcoins de ${growcoins[i]},00<br>`)
            }
        }
    }