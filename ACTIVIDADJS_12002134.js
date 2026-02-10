function ObtenerSignoZodiacal(dia, mes) {
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
      return "Aries";
    } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
      return "Tauro";
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
      return "Geminis";
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
      return "Cancer";
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
      return "Leo";
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
      return "Virgo";
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
      return "Libra";
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
      return "Escorpio";
    } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
      return "Sagitario";
    } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
      return "Capricornio";
    } else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
      return "Aquario";
    } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
      return "Piscis";
    } else {
      return "Las fecha que ingreso es incorrecta";
    }
  }
  
  var mes = parseInt(prompt("Ingrese su mes de nacimiento (1-12):"));
  var dia = parseInt(prompt("Ingrese su dia de nacimiento (1-31):"));
  
  var zodiaco = ObtenerSignoZodiacal(dia, mes);
  alert("Tu signo zodiacal es: " + zodiaco);