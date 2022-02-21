function calcular(){
    //Obter dados 
    let preco = Number(document.getElementById ("preco").value )
    
   
    
    //calculo
    total  = (preco * 10/100)
    total2 = (preco - total)

        
       
  
    //Saída de dados 
    
   document.getElementById("total2").innerHTML = "O valor da divisão do primeiro pelo segundo número é igual a  " + total2
    }
