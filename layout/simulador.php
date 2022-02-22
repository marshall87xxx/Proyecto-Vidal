    <section class="select__form">    
    <div class="select">
        <h1 class="logo"> Simulador de Planes </h1>
        <div class="simulador-wrapper">
            <div class="simulator-form">
        <br>
            <form name="f1" action="" enctype="multipart/form-data">
            <label>Inversión:</label>
            <input id="numero1" type="text" name="inversion">  

            <label>Plan:</label>       
            <select name="pais" onchange="cambia_provincia()" id="operaciones">
            <option selected value="0"> Elige un Plan Activo: </option>
            <optgroup label="Planes activos"> 
            <option value="1">Trimestral</option> 
            <option value="2">Maestro</option> 
            <option value="3">Compuesto</option> 
            <option value="4">Fondo de Ahorro</option> 
            <option value="5">20x50</option> 
            <option value="6">Especial</option> 
            <option value="7">Socio Jr.</option> 
            <option value="8">Socio Maestro</option> 
            <option value="9">Socio Fundador</option> 
            <option value="10">Master</option> 
            </select>    

            <label></label>
            <select name="provincia">
            <option selected value="0"> Porcentaje: </option>
            <optgroup label="Porcentajes"> 
            <option value="%">%</option>
            </select>  
            <button type="button" value="calcular" onclick="operacion()" >
            Calcular 
            </button>
            <button href="javascript:location.reload()">Limpiar campos</button>
            </form>
            </div>
            </div> 
    </div>
</div>
<br>
<br>
<div id="div">
    <div id="resultado"></div>
    <div id="resultado2"></div>
    <div id="resultado3"></div>
</div>
<br>
<br>

