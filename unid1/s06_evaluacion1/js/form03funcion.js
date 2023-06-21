function fnGenerarTabla(res,num,nom,ape,tur)
{
    document.write("<table>");
        document.write("<tr>");
        document.write("</tr>");
        document.write("<tr>");
        
            document.write("<td id='tdIzq'>Apellidos Y Nombres:</td><td id='tdDer'>"+ape+" "+nom+"</td>");
            document.write("<td rowspan='3'><img src='img/f"+num+".jpg' ></td>");
        document.write("</tr>");    
        document.write("<tr>");
            document.write("<td id='tdIzq'>Turno:</td><td id='tdDer'>"+tur+"</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td id='tdIzq'>Genero:</td><td id='tdDer'>"+gen+"</td>");
        
        document.write("</tr>");
        document.write("<tr>");
            document.write("<th class='titulo' colspan='4'> Datos Personales"+res+"</th>");
    document.write("</table><br>")
    
}       

function fnTurno(turno)
{
    switch(turno)
    {
        case 'M': return "Dia"; break;
        case 'N': return "Noche"; break;
        default : return "???"; break;

    }
}
function fnGen(gen)
{
    switch(gen)
    {
        case 'M': return "Masculino"; break;
        case 'F': return "Femenino"; break;
       

    }
}
    
    