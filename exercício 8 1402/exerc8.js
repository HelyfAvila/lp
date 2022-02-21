function calcular(){
    //Obter dados 
    let peso = Number(document.getElementById ("peso").value )

   
    
    //calculo
    total  = (peso * 1000)

        
       
  
    //Saída de dados 
    
   document.getElementById("total").innerHTML = "O valor do peso convertido em gramas é igual a  " + total
    }
