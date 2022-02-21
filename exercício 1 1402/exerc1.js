  function calcular(){
        //Obter dados 
        let num1 = Number(document.getElementById ("num1").value )
        let num2 = Number( document.getElementById ("num2").value )
      
        //Calcular comissão 
        
        let total = num1 - num2
        //Saída de dados 
        document.getElementById("total").innerHTML = "O valor da subtração é igual a  " + total
        }
