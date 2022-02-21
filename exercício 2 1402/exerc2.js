function calcular(){
    //Obter dados 
    let num1 = Number(document.getElementById ("num1").value )
    let num2 = Number( document.getElementById ("num2").value )
    let num3 = Number(document.getElementById("num3").value)
  
    //Calcular comissão 
    
    let total = (num1*num2*num3)
    //Saída de dados 
    document.getElementById("total").innerHTML = "O valor da multiplicação é igual a  " + total
    }
