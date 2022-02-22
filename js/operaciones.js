function operacion(){

   var numero1=document.getElementById("numero1").value;
   numero1=parseFloat(numero1);
  
   var operation = document.getElementById("operaciones").value;

   if (operation=="1" && numero1 >= 200 ){
        /*Codigo de la operacion del plan trimestral aqui*/
     valor =    'Su ganancia total es de ' + '$'+(numero1*2)+ 'MXN' + ' por 3 meses.';
     valor2 =   `\$${numero1} de tu invesión mas \$${numero1} de tu ganancia.`;
     
     document.getElementById('resultado').innerHTML = valor;
     document.getElementById('resultado2').innerHTML = valor2;
     
   } else if (operation=="1" && numero1<= 199 ){
    alert("La inversión mínima es de $200 y la inversión máxima es ilimitada");
   }

  
   if (operation=="2" && numero1 >= 200 ){
      /*Codigo de la operacion del plan maestro aqui*/
  
        valor = 'Sus rendimientos en 52 semanas es de '+ '$'+((numero1*.1)*52);
        document.getElementById('resultado').innerHTML = valor;
        valor2 = 'En las primeras 10 semanas recuperas tu inversión '+ '$'+((numero1*.1)*10);
        document.getElementById('resultado2').innerHTML = valor2; 

        for ( i = 1; i <= 52 ; i++ ){
          document.getElementById('resultado3').innerHTML += 'Semana ' + i + ' - ' + '$'+(numero1*.1)+' MXN' + '<br>';
          
         }

          }  else if (operation=="2" && numero1<= 199 ){
          alert("La inversión mínima es de $200 y la inversión máxima es ilimitada");
          }

   if (operation=="3" && numero1 >= 500 && numero1 <= 3000){
        /*Codigo de la operacion del plan compuesto aqui*/
     valor = (+': '+(numero1) );
   }      else if (operation=="3" ){ 
    alert("La inversión mínima es de $500 y la inversión máxima es 3000");
   }
   if (operation=="4" ){
    /*Codigo de la operacion del plan fondo de ahorro aqui*/
 alert(operation+': '+(numero1/numero2) );
}   
if (operation=="5" ){
  /*Codigo de la operacion del plan 20x50 aqui*/
alert(operation+': '+(numero1/numero2) );
}   

if (operation=="6" && numero1 >= 5000){
  /*Codigo de la operacion del plan especial aqui*/
  valor = 'Sus rendimientos en 78 semanas es de '+ '$'+((numero1*.13)*78);
  document.getElementById('resultado').innerHTML = valor;
  valor2 = 'En las primeras 8 semanas recuperas mas de tú inversión '+ '$'+((numero1*.13)*8);
  document.getElementById('resultado2').innerHTML = valor2; 

  for ( i = 1; i <= 78 ; i++ ){
    document.getElementById('resultado3').innerHTML += 'Semana ' + i + ' - ' + '$'+(numero1*.13)+' MXN' + '<br>';
    
   }

    }  else if (operation=="6" && numero1<= 4999 ){
    alert("La inversión mínima es de $5000 y la inversión máxima es ilimitada");
    }

if (operation=="7" ){
  /*Codigo de la operacion del plan socio jr aqui*/
alert(operation+': '+(numero1/numero2) );
}   
if (operation=="8" ){
  /*Codigo de la operacion del plan maestro aqui*/
alert(operation+': '+(numero1/numero2) );
}   
if (operation=="9" ){
  /*Codigo de la operacion del plan socio fundador aqui*/
alert(operation+': '+(numero1/numero2) );
}   
if (operation=="10" ){
  /*Codigo de la operacion del plan master aqui*/
alert(operation+': '+(numero1/numero2) );
}   
 
     return false;
}

