function calcular(){ 
 //Recupera o que usuário digita e converte para número
 let numero= Number(document.getElementById("numero").value)
 
 //Gerar a tabuada
 
 let tabuada= numero + "x 0 = " + numero*0
 
 tabuada = tabuada + "<br/>" + numero + "x1 = " + numero*1
 tabuada = tabuada + "<br/>" + numero + "x2 = " + numero*2
 tabuada = tabuada + "<br/>" + numero + "x3 = " + numero*3
 tabuada = tabuada + "<br/>" + numero + "x4 = " + numero*4
 tabuada = tabuada + "<br/>" + numero + "x5 = " + numero*5
 tabuada = tabuada + "<br/>" + numero + "x6 = " + numero*6
 tabuada = tabuada + "<br/>" + numero + "x7 = " + numero*7
 tabuada = tabuada + "<br/>" + numero + "x8 = " + numero*8
 tabuada = tabuada + "<br/>" + numero + "x9 = " + numero*9
 tabuada = tabuada + "<br/>" + numero + "x10 = "+ numero*10
 //Mostrar resultado
 document.getElementById("saida").innerHTML = tabuada
 

}