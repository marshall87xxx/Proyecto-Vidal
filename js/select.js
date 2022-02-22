
var provincia_1=new Array("100%") 
var provincia_2=new Array("10%") 
var provincia_3=new Array("7%") 
var provincia_4=new Array("15%")
var provincia_5=new Array("20%") 
var provincia_6=new Array("13%") 
var provincia_7=new Array("3%") 
var provincia_8=new Array("5%")
var provincia_9=new Array("2.5%") 
var provincia_10=new Array("10%") 

var todasProvincias= [
    [],
    provincia_1,
    provincia_2,
    provincia_3,
    provincia_4,
    provincia_5,
    provincia_6,
    provincia_7,
    provincia_8,
    provincia_9,
   provincia_10,
];

function cambia_provincia(){ 
     //tomo el valor del select del pais elegido 
     var pais 
     pais = document.f1.pais[document.f1.pais.selectedIndex].value 
     //miro a ver si el pais está definido 
     if (pais != 0) { 
        //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
        //selecciono el array de provincia adecuado 
        mis_provincias=todasProvincias[pais]
        //calculo el numero de provincias 
        num_provincias = mis_provincias.length 
        //marco el número de provincias en el select 
        document.f1.provincia.length = num_provincias 
        //para cada provincia del array, la introduzco en el select 
        for(i=0;i<num_provincias;i++){ 
           document.f1.provincia.options[i].value=mis_provincias[i] 
           document.f1.provincia.options[i].text=mis_provincias[i] 
        }	
     }else{ 
        //si no había provincia seleccionada, elimino las provincias del select 
        document.f1.provincia.length = 1 
        //coloco un guión en la única opción que he dejado 
        document.f1.provincia.options[0].value = "Selecciona un Plan" 
        document.f1.provincia.options[0].text = "Selecciona un Plan" 
     } 
     //marco como seleccionada la opción primera de provincia 
     document.f1.provincia.options[0].selected = true 
}
