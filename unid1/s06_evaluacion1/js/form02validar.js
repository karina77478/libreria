function fnValidar02()
{
    let xNombre = document.getElementById("txTexto").value;
    if(xNombre=="" ||/^\s+$/.test(xNombre)) {
        alert("No ingresar espacios");
        return false;
   
    }
	let elementoPref = document.getElementsByName("radEstado");
	let valorElegidoPreferencia ="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia=elementoPref[i].value;
			eligioPreferencia = true;
		}
    }
	
	let elementoEstado = document.getElementsByName("chkPrefer");
	let valorElegidoPreEstado = "";
	let eligioEstado = false;
	for(let i=1; i < elementoEstado.length; i++){
		if(elementoEstado[i].checked){
			valorElegidoPreEstado = elementoEstado[i].value;
			eligioEstado = true;
		}
	}
	if(!eligioPreferencia){
		alert("Elija una preferencia...");
		return false;
	}else{if(!eligioEstado){
		alert("Elija dos preferencias...");
		return false;
	}else{
		value;
	}
	return true



}
}