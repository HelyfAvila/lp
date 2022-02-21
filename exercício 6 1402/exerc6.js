function calcular(){
//Obter dados 
let salario = Number(document.getElementById ("salario").value )
let vendas = Number( document.getElementById ("vendas").value )
let percentual= Number(document.getElementById ("percentual").value)
//Calcular comissão 
let comissao = vendas* (percentual/100)
let total = salario + comissao 
//Saída de dados 
document.getElementById("total").innerHTML = "O valor da comissão é " + comissao + " E o valor total é " + total
}