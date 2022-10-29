/* ---------- Declaracion Constantes ---------- */

const nombreForm = document.getElementById("nombre");

const apellidoForm = document.getElementById("apellido");

const correoForm = document.getElementById("correo");

const cantidadForm = document.getElementById("cantidad");

const resumenBoton = document.getElementById("resumen");

const borrarBoton = document.getElementById("borrar");

const msjNombre = document.getElementById("mensajeNombre");

const msjApellido = document.getElementById("mensajeApellido");

const msjCantidad = document.getElementById("mensajeCantidad");

const msjCorreo = document.getElementById("mensajeCorreo");

const seleccionar = document.getElementById("seleccion");

const ticket = document.getElementById("precio");

var tiempo = 5000;

var valorTicket = 200;

/* ---------- Declaracion Eventos ---------- */

resumenBoton.addEventListener("click",nombres);

resumenBoton.addEventListener("click",apellidos);

resumenBoton.addEventListener("click",correos);

resumenBoton.addEventListener("click",cantidades);

resumenBoton.addEventListener("click",opciones);

borrarBoton.addEventListener("click",borrarTodo);

/* ---------- Declaracion Funciones ---------- */

function opciones() {
    var valor = seleccionar.value;
    switch (valor) {
      case '1':
        var categoria = sinCategoria();
        ticket.innerHTML = categoria;
      break;
      case '2':
        var estudiante = conEstudiante();
        ticket.innerHTML = estudiante;
      break;
      case '3':
        var trainee = conTrainee();
        ticket.innerHTML = trainee;
      break;
      case '4':
        var junior = conJunior();
        ticket.innerHTML = junior;
      break;
      default:
        console.log('Opcion Incorrecta');
    }
}

function nombres() {
    if (nombreForm.value.length <= 0) {
        msjNombre.innerHTML = "(Nombre) = No Escribio Ningun Nombre";
    } else {
        msjNombre.innerHTML = "";
    }
}
    
function apellidos() {
    if (apellidoForm.value.length <= 0) {
        msjApellido.innerHTML = "(Apellido) = No Escribio Ningun Apellido";
    } else {
        msjApellido.innerHTML = "";
    }
}

function correos() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(correoForm.value.match(mailformat))) {
        msjCorreo.innerHTML = "(Correo) = Tiene Que Ingresar un correo Valido";
    } else {
        msjCorreo.innerHTML = "";
    }
}

function cantidades() {
    if (cantidadForm.value.length <= 0) {
        msjCantidad.innerHTML = "(Cantidad) = Tiene Que Ingresar un valor mayor a 0";
    } else {
        msjCantidad.innerHTML = "";
    }
}

function sinCategoria() {
    var total = cantidadForm.value * valorTicket;
    return total;
}

function conEstudiante() {
    var total = (cantidadForm.value * valorTicket) - ((cantidadForm.value * valorTicket) * 0.8);
    return total;
}

function conTrainee() {
    var total = (cantidadForm.value * valorTicket) - ((cantidadForm.value * valorTicket) * 0.5);
    return total;
}

function conJunior() {
    var total = (cantidadForm.value * valorTicket) - ((cantidadForm.value * valorTicket) * 0.15);
    return total;
}

function borrarTodo() {
    nombreForm.value = "";
    apellidoForm.value = "";
    correoForm.value = "";
    cantidadForm.value = "";
    msjNombre.innerHTML = "";
    msjCorreo.innerHTML = "";
    seleccionar.value = "0";
    ticket.innerHTML = "";
}