function fnValidar01()
{
    let xNombre = document.getElementById("tres").value;
    if(xNombre=="" ||/^\s+$/.test(xNombre)) {
        alert("No ingresar espacios");
        return false;
   
    }
}