function calcular_fecha(){

    let diaValue =parseInt(document.getElementById("dia").value); 
    
    let mesValue = parseInt(document.getElementById("mes").value); 
    mesValue = mesValue-1; 
    let añoValue = parseInt(document.getElementById("año").value); 
    const d = new Date(añoValue, mesValue, diaValue);
    let day = d.getDay();

    let mensaje;
    switch (day) {
        case 0:
            mensaje = "Domingo, día no laborable";
            break;
        case 1:
            mensaje = "Lunes, día laborable";
            break;
        case 2:
            mensaje = "Martes, dia laborable";
            break;
        case 3:
            mensaje = "Miercoles, dia laborable";
            break;
        case 4:
            mensaje = "Jueves, día laborable";
            break;
        case 5:
            mensaje = "Viernes, día laborable";
            break;
        case 6:
            mensaje = "Sábado, día no laborable";
            break;
    }

    document.getElementById("dia_de_la_semana").value = mensaje;   
}
