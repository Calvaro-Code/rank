//Sistema de rankeada

function ponto(vitorias, derrotas){
    return vitorias - derrotas
}

let rank = ponto(101, 0)


if(rank<=10){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel ferro")

}else if(rank<=20){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel bronze")

}else if(rank<=50){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel prata")

}else if(rank<=80){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel ouro")

}else if(rank<=90){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel diamante")

}else if(rank<=100){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel lendário")

}else if(rank>100){
    console.log("O Herói tem saldo de "+ rank +" vitorias e " + "está no nivel imortal")

}
