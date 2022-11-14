//LEIDA DE BOTONES
window.addEventListener("load", inicio);

//REGISTRO
document.querySelector("#btnRegistro").addEventListener("click", registrarImportadores);
document.querySelector("#refLogearme").addEventListener("click", inicio);


//LOGIN
document.querySelector("#btnEntrar").addEventListener("click", entrarAlPrograma);
document.querySelector("#refRegistrate").addEventListener("click", mostrarRegistro);

//IMPORTADOR
//MENU IMPORTADOR
//Mostrar DIVS
document.querySelector("#ImportadorCrearSolicitud").addEventListener("click", mostrarCrearSolicitudCarga);
document.querySelector("#ImportadorConsultaSolicitudesPendientes").addEventListener("click", mostrarConsultaSolicitudesPendientes);
document.querySelector("#ImportadorInformacionEstadistica").addEventListener("click", mostrarEstadisticas);
document.querySelector("#ImportadorOpcionCerrarSesion").addEventListener("click", inicio);

//Volver al menu importador
document.querySelector("#CrearSolicitudImportadorOpcionVolverMenu").addEventListener("click", mostrarMenuImportador);
document.querySelector("#SolicitudesPendientesImportadorOpcionVolverMenu").addEventListener("click", mostrarMenuImportador);
document.querySelector("#EstadisticaOpcionVolverMenu").addEventListener("click", mostrarMenuImportador);


//Funcionalidades
//Crear nueva solicitud - importador
document.querySelector("#btnCrearSolicitud").addEventListener("click", crearNuevaSolicitud);
//Consulta y cancelacion solicitudes pendientes - importador
document.querySelector("#btnConsultarSolicitudPendiente").addEventListener("click", consultaSolicitudesPendientes);
//Estadistica - importador
document.querySelector("#btnPorcentajes").addEventListener("click", generarPorcentajesCancelados);
document.querySelector("#btnLineas").addEventListener("click", generarPorcentajeLineasDeCarga);
document.querySelector("#btnLlegadas").addEventListener("click", mostrarProximasLlegadas);
//Crear nuevo viaje - empresa
document.querySelector("#btnCrearViajeEmpresa").addEventListener("click", crearViajeEmpresa);
//ASignar solicitud de carga - empresa
document.querySelector("#btnAsignarCarga").addEventListener("click", asignarCargaPendiente);
//Rollover carga - empresa
document.querySelector("#btnMostrarCargaViajesRollOver").addEventListener("click", rolloverCarga)
// Listado total de carga - empresa
document.querySelector("#btnListadoTotal").addEventListener("click", generarListadoCargas);
//Listado cargas peligrosas - empresa
document.querySelector("#btnListadoCargasPeligrosas").addEventListener("click", generarListadoCargasPeligrosas);
//HABILITAR IMPORTADOR - empresa
document.querySelector("#btnHabilitarImportador").addEventListener("click", habilitarImportador);




//EMPRESA
//MENU EMPRESA
//Mostrar DIVS
document.querySelector("#EmpresaCrearNuevoViaje").addEventListener("click", mostrarCrearNuevoViaje);
document.querySelector("#EmpresaAsignarSolicitudPendiente").addEventListener("click", mostrarAsignarSolicitudPendiente);
document.querySelector("#EmpresaRollOverCarga").addEventListener("click", mostrarRolloverCarga);
document.querySelector("#EmpresaListadoDeCarga").addEventListener("click", mostrarListadoCargaTotal);
document.querySelector("#EmpresaHabilitarImportador").addEventListener("click", mostrarHabiliarImportador);
document.querySelector("#EmpresaOpcionCerrarSesion").addEventListener("click", inicio);

//Volver al menu Empresa
document.querySelector("#CrearNuevoViajeOpcionVolverMenu").addEventListener("click", mostrarMenuEmpresa);
document.querySelector("#RollOverOpcionVolverMenu").addEventListener("click", mostrarMenuEmpresa);
document.querySelector("#ListadoCargasTotalOpcionVolverMenu").addEventListener("click", mostrarMenuEmpresa);
document.querySelector("#HabilitarImportadorOpcionVolverMenu").addEventListener("click", mostrarMenuEmpresa);
document.querySelector("#AsignarSolicitudOpcionVolverMenu").addEventListener("click", mostrarMenuEmpresa);


//Cerrar sesion
document.querySelector("#CrearNuevoViajeOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#RollOverOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#ListadoCargasTotalOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#HabilitarImportadorOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#AsignarSolicitudOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#CrearSolicitudImportadorOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#SolicitudesPendientesImportadorOpcionCerarSesion").addEventListener("click", inicio);
document.querySelector("#EstadisticaCargaOpcionCerarSesion").addEventListener("click", inicio);

// ARRAYS
let listaEmpresas = new Array();
let listaImportadores = new Array();
let listaViajes = new Array();
let listaSolicitudes = new Array()

//VARIABLES CONTADORES
let cantidadEmpresas = 1;
let cantidadImportadores = 1;
let cantidadViajes = 1;
let contadorSolicitudes = 1;
let usuarioConectado = null;


//CLASES
class Empresa {
    constructor(unNombre, unUsuario, unaImagen, unaClave) {
        this.Identificador = cantidadEmpresas;
        this.Nombre = unNombre;
        this.Usuario = unUsuario;
        this.Imagen = unaImagen;
        this.Clave = unaClave;
        cantidadEmpresas++
    }
}
class Importador {
    constructor(unNombre, unUsuario, unaImagen, unaClave, unEstado) {
        this.Identificador = cantidadImportadores;
        this.Nombre = unNombre;
        this.Usuario = unUsuario;
        this.Imagen = unaImagen;
        this.Clave = unaClave;
        this.Estado = "habilitado";
        cantidadImportadores++
    }
}
class Viajes {
    constructor(unNombre, unaCantidadContenedores, unidEmpresa, unaFecha) {
        this.Identificador = cantidadViajes;
        this.Nombre = unNombre;
        this.cantidadContenedores = unaCantidadContenedores;
        this.iDEmpresa = unidEmpresa;
        this.Fecha = unaFecha;
        cantidadViajes++
    }
}
class Solicitudes {
    constructor(unIdImportador, unTipoMercaderia, unaDescripcion, unPuertoOrigen, unaCantidadContenedores, unEstado, unIdEmpresa, unIdViaje) {
        this.Identificador = contadorSolicitudes;
        this.IdImportador = unIdImportador;
        this.TipoMercaderia = unTipoMercaderia;
        this.Descripcion = unaDescripcion;
        this.PuertoOirgen = unPuertoOrigen;
        this.CantidadContenedores = unaCantidadContenedores;
        this.Estado = unEstado;
        this.IdEmpresa = unIdEmpresa;
        this.IdViaje = unIdViaje;
        contadorSolicitudes++
    }
}

//PRECARGA EMPRESAS
let empresa1 = new Empresa("TransatlanticoSur", "TransatlanticoSur1", "./IMG/6.jpg", "Ort2022");
let empresa2 = new Empresa("BeringTransportation", "BeringTransportation1", "./IMG/7.jpg", "Ort2022");
let empresa3 = new Empresa("MareTransporte", "MareTransporte1", "./IMG/8.jpg", "Ort2022");
let empresa4 = new Empresa("OceanTransporte", "OceanTransporte1", "./IMG/1.jpg", "Ort2022");
listaEmpresas.push(empresa1, empresa2, empresa3, empresa4)


//PRECARGA IMPORTADORES
let importador1 = new Importador("Pedro", "Pedro1", "./IMG/1.jpg", "Ort2022", "habilitado");
let importador2 = new Importador("Juan", "Juan1", "./IMG/2.jpg", "Ort2022", "habilitado");
let importador3 = new Importador("Sebastian", "Sebastian1", "./IMG/3.jpg", "Ort2022", "habilitado");
let importador4 = new Importador("Maria", "Maria1", "./IMG/4.jpg", "Ort2022", "habilitado");
let importador5 = new Importador("Marta", "Marta1", "./IMG/5.jpg", "Ort2022", "habilitado");
listaImportadores.push(importador1, importador2, importador3, importador4, importador5)

//PRECARGA VIAJES
let viaje1 = new Viajes("Buque1", 8, 1, "20221101")
let viaje2 = new Viajes("Buque2", 8, 2, "20221204")
let viaje3 = new Viajes("Buque3", 8, 3, "20230123")
let viaje4 = new Viajes("Buque4", 8, 4, "20230201")
listaViajes.push(viaje1, viaje2, viaje3, viaje4)

// PRECARGA SOLICITUDES
let solicitud1 = new Solicitudes(5, "Carga peligrosa", "Inflamables", "Montevideo", 1, "pendiente", 1, 1)
let solicitud2 = new Solicitudes(5, "Refrigerados", "Alimentos", "BsAs", 7, "pendiente", 1, 1)
let solicitud3 = new Solicitudes(1, "Carga general", "Indumentaria", "Brasilia", 4, "ignorado", 4, 3)
let solicitud4 = new Solicitudes(5, "Refrigerados", "Farmaceutica", "Lima", 1, "pendiente", 4, 2)
let solicitud5 = new Solicitudes(4, "Carga peligrosa", "Automoviles", "Bogota", 8, "confirmado", 3, 4)
listaSolicitudes.push(solicitud1, solicitud2, solicitud3, solicitud4, solicitud5)


//FUNCIONES
// Inicio web                                                            
function inicio() {
    ocultarTodo();
    limpiarDatos();
    document.querySelector("#LoginGeneral").style.display = "block";
}
//Ocultar todo
function ocultarTodo() {
    //Registro y login
    document.querySelector("#RegistroGeneral").style.display = "none";
    document.querySelector("#LoginGeneral").style.display = "none";
    document.querySelector("#mostrarUsuario").style.display = "none";

    // Menu de Importador
    document.querySelector("#MenuGeneralImportador").style.display = "none";

    //Pestañas menu importador
    document.querySelector("#crearSolicitudCargaImportador").style.display = "none";
    document.querySelector("#consultasSolicitudesPendientesImportador").style.display = "none";
    document.querySelector("#EstadisticaMenuImportador").style.display = "none";


    //  Menu de Empresa
    document.querySelector("#MenuGeneralEmpresa").style.display = "none";

    //Pestañas menu empresa
    document.querySelector("#crearNuevoViajeEmpresa").style.display = "none";
    document.querySelector("#AsignarSolicitudCargaPendienteEmpresa").style.display = "none";
    document.querySelector("#rolloverCargaEmprsa").style.display = "none";
    document.querySelector("#ListadoCargaViajeEmpresa").style.display = "none";
    document.querySelector("#habilitarImportadorEmpresa").style.display = "none";
}
//Mostrar registro
function mostrarRegistro() {
    limpiarDatos();
    ocultarTodo();
    document.querySelector("#RegistroGeneral").style.display = "block";
}
//Mostrar menu importador
function mostrarMenuImportador() {
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#MenuGeneralImportador").style.display = "block";
}

//Mostrar menu empresa
function mostrarMenuEmpresa() {
    generarComboDinamicoViajesListado();
    generarComboDinamicoViajes();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#MenuGeneralEmpresa").style.display = "block";
}
//Mostrar crear solicitud carga
function mostrarCrearSolicitudCarga() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#crearSolicitudCargaImportador").style.display = "block";
}
//Mostrar consulta solicitudes pendientes
function mostrarConsultaSolicitudesPendientes() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#consultasSolicitudesPendientesImportador").style.display = "block";
}
//Mostrar estadisticas
function mostrarEstadisticas() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#EstadisticaMenuImportador").style.display = "block";
}
//Mostrar crear nuevo viaje
function mostrarCrearNuevoViaje() {
    combodinamicoIDEmpresa();
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#crearNuevoViajeEmpresa").style.display = "block";
}
//Mostrar asignar solicitud pendiente
function mostrarAsignarSolicitudPendiente() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#AsignarSolicitudCargaPendienteEmpresa").style.display = "block";
}
//Mostrar Rollover carga
function mostrarRolloverCarga() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#rolloverCargaEmprsa").style.display = "block";
}
//Mostrar Listado carga viajes
function mostrarListadoCargaTotal() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#ListadoCargaViajeEmpresa").style.display = "block";
}
//Mostrar habilitar importador
function mostrarHabiliarImportador() {
    limpiarDatos();
    ocultarTodo();
    mostrarUsuarioRegistrado();
    document.querySelector("#habilitarImportadorEmpresa").style.display = "block";
}
//MOSTRAR USUARIO REGISTRADO
function mostrarUsuarioRegistrado() {
    ocultarTodo();
    document.querySelector("#mostrarUsuario").style.display = "block";
    document.querySelector("#msgUsuarioRegistrado").innerHTML = `Bienvenido/a ${usuarioConectado.Nombre}<img class="ImagenUsuario" src="${usuarioConectado.Imagen}" width="100px">`
}
//limpiar pantallas cuando se toca menu principal
function limpiarDatos() {
    document.querySelector("#txtNombreRegistro").value = "";
    document.querySelector("#txtNombreUsuarioRegistro").value = "";
    document.querySelector("#txtFotoRegistro").value = "";
    document.querySelector("#txtPassRegistro").value = "";
    document.querySelector("#msgAlertaRegistro").innerHTML = "";
    document.querySelector("#slcUsuario").value = "Vacio";
    document.querySelector("#txtUsuarioLogin").value = "";
    document.querySelector("#txtPassLogin").value = "";
    document.querySelector("#msgAlertaInicioSesion").innerHTML = "";
    document.querySelector("#slcMercaderia").value = "EligeMercaderia";
    document.querySelector("#txtDescripcionCrear").value = "";
    document.querySelector("#txtpuertoOrigen").value = "";
    document.querySelector("#txtContenedores").value = "";
    document.querySelector("#slcIDEmpresaCrear").value = "Selec";
    document.querySelector("#msgCrearNuevaSolicitud").innerHTML = "";
    document.querySelector("#txtNumeroSolicitud").value = "";
    document.querySelector("#txtDescripcionMercaderiaConsultaPendiente").value = "";
    document.querySelector("#msgMostrarListaSolicitudes").innerHTML = "";
    document.querySelector("#msgProximasLlegadasBuqes").innerHTML = "";
    document.querySelector("#msgPorcentajeLineasCarga").innerHTML = "";
    document.querySelector("#msgPorcentajeCancelaciones").innerHTML = "";
    document.querySelector("#txtNombreBuqueEmpresa").value = "";
    document.querySelector("#txtCantidadContenedoresEmpresa").value = "";
    document.querySelector("#slcIdEmpresaViajeNuevo").value = "Vacio"
    document.querySelector("#msgCrearViajeEmpresa").innerHTML = ""
    document.querySelector("#msgAsignarCarga").innerHTML = ""
    document.querySelector("#msgMostrarListaRollOver").innerHTML = ""
    document.querySelector("#msgTablas").innerHTML = ""
    document.querySelector("#msgImportadorHabilitado").innerHTML = ""
}
// Inicio de Sesión
function entrarAlPrograma() {
    //verifico que no haya campos vacíos
    if (document.querySelector("#txtUsuarioLogin").value == "" || document.querySelector("#txtPassLogin").value == "" || document.querySelector("#slcUsuario").value == "Vacio") {
        document.querySelector("#msgAlertaInicioSesion").innerHTML = "Ingreso fallido. <br> Todos los campos deben ser completados"
    } else {
        //defino variables ingresadas
        let tipoUsuario = document.querySelector("#slcUsuario").value;
        let usuarioIngresado = document.querySelector("#txtUsuarioLogin").value.toLowerCase();
        let passIngresada = document.querySelector("#txtPassLogin").value;
        //defino variables para coincidencia de datos
        let coincideImportador = false;
        let coincideEmpresa = false;
        //recorro y valido al usuario Empresa
        for (let i = 0; i < listaEmpresas.length; i++) {
            if (tipoUsuario == "Emp" && listaEmpresas[i].Usuario.toLowerCase() == usuarioIngresado && listaEmpresas[i].Clave == passIngresada) {
                coincideEmpresa = true;
                usuarioConectado = listaEmpresas[i]
            }
        }
        //recorro y valido al usuario Importador
        for (let j = 0; j < listaImportadores.length; j++) {
            if (tipoUsuario == "Imp" && listaImportadores[j].Usuario.toLowerCase() == usuarioIngresado && listaImportadores[j].Clave == passIngresada) {
                coincideImportador = true;
                usuarioConectado = listaImportadores[j]
            }
        }
        //si los datos ingresados son correctos, le permito ingresar al menu correspondiente
        /*let encontreEmp = false
        let encontreImp = false*/
        if (coincideEmpresa == true) {
            mostrarMenuEmpresa();

        } else if (coincideImportador == true) {
            mostrarMenuImportador()

        } else {
            document.querySelector("#msgAlertaInicioSesion").innerHTML = "El nombre de usuario y/o contraseña son incorrectos";
        }
    }
}
//REGISTRO IMPORTADORES 
//Tiene problemas para leer la imagen
function registrarImportadores() {

    //genero variables de datos ingresados por usuario
    let nombreImportador = document.querySelector("#txtNombreRegistro").value;
    let usuarioImportador = document.querySelector("#txtNombreUsuarioRegistro").value;
    //guardo ruta de foto
    let chequeoFotoImportador = document.querySelector("#txtFotoRegistro").files.length




    let passImportador = document.querySelector("#txtPassRegistro").value;
    //le pongo la contraseña ingresada como valor a la funcion validarClave para verificar que cumpla con las condiciones
    resultado = validarClave(passImportador)
    //verifico que todos los campos esten completos
    let camposCompletos = true;
    if (usuarioImportador == "" || nombreImportador == "" || chequeoFotoImportador == 0 || passImportador == "") {
        camposCompletos = false;
    }
    //verifico que el nombre de usuario no se repita
    let usuarioExistente = false;
    for (let i = 0; i < listaImportadores.length; i++) {
        if (listaImportadores[i].Usuario == usuarioImportador) {
            usuarioExistente = true;
        }
    }
    //Controlo errores y si todo esta ok, agrego a la lista de Importadores al nuevo Importador
    if (camposCompletos == false) {
        document.querySelector("#msgAlertaRegistro").innerHTML = "Faltan campos por ingresar"
    } else if (usuarioExistente == true) {
        document.querySelector("#msgAlertaRegistro").innerHTML = "El nombre de usuario ingresado ya existe. Ingrese uno diferente"
        document.querySelector("#txtNombreUsuarioRegistro").value = ""
        document.querySelector("#txtPassRegistro").value = ""
    } else if (resultado == false) {
        document.querySelector("#msgAlertaRegistro").innerHTML = "La contraseña no cumple con las condiciones indicadas"
        document.querySelector("#txtNombreUsuarioRegistro").value = ""
        document.querySelector("#txtPassRegistro").value = ""
    } else {
        let fotoImportador = "../IMG/" + document.querySelector("#txtFotoRegistro").files[0].name;
        let unImportador = new Importador(nombreImportador, usuarioImportador, fotoImportador, passImportador);
        listaImportadores.push(unImportador);
        document.querySelector("#msgAlertaRegistro").innerHTML = "Usuario creado con éxito"
        document.querySelector("#txtNombreUsuarioRegistro").value = ""
        document.querySelector("#txtPassRegistro").value = ""
        document.querySelector("#txtNombreRegistro").value = ""
        document.querySelector("#txtFotoRegistro").value = ""
    }
}
//Funcion que valida clave segun condiciones (5 caracteres, al menos 1 mayuscula, 1 minuscula y 1 numero)
function validarClave(unaClave) {
    let claveValida = true;
    //controlo cantidad de caracteres 
    if (unaClave.length < 5) {
        claveValida = false
    }
    //controlo que haya al menos una mayusc
    if (contarMayusculas(unaClave) < 1) {
        claveValida = false
    }
    //controlo que haya al menos una minuscuña
    if (contarMinusculas(unaClave) < 1) {
        claveValida = false
    }
    //controlo que haya al menos un numero
    if (contarNumeros(unaClave) < 1) {
        claveValida = false
    }
    return claveValida
}
//funcion que cuenta las mayusculas
function contarMayusculas(texto) {
    //elimino espacios en blanco
    texto = texto.replaceAll(" ", "");
    //creo variable para contar cantidad de mayusculas
    let cantidadMayusculas = 0
    //recorro el texto
    for (let i = 0; i < texto.length; i++) {
        //sumo 1 cada vez que encuentro una may
        if ((texto.charAt(i) == texto.charAt(i).toUpperCase())
            && (isNaN(texto.charAt(i)))) {
            cantidadMayusculas++
        }
    }
    return cantidadMayusculas
}
//funcion que cuenta las minusculas
function contarMinusculas(texto) {
    texto = texto.replaceAll(" ", "");
    let cantidadMinusculas = 0
    for (let i = 0; i < texto.length; i++) {
        if ((texto.charAt(i) == texto.charAt(i).toLowerCase())
            && (isNaN(texto.charAt(i)))) {
            cantidadMinusculas++
        }
    }
    return cantidadMinusculas
}
//funcion que cuenta los numeros
function contarNumeros(texto) {
    texto = texto.replaceAll(" ", "");
    let cantidadNumeros = 0
    // !isNaN  es evaluar SI es número
    for (let i = 0; i < texto.length; i++) {
        if (!isNaN(texto.charAt(i))) {
            cantidadNumeros++
        }
    }
    return cantidadNumeros

}
//PESTAÑAS MENU IMPORTADOR
//comboIDempresa
generarComboIdEmpresa()
function generarComboIdEmpresa(){
    let comboid = document.querySelector("#slcIDEmpresaCrear");
    comboid.innerHTML = "";

    for (let empresa of listaEmpresas){
        comboid.innerHTML += `<option value=${empresa.Identificador}>${empresa.Identificador}</option>`
    }
}

// Crear nueva solicitud
function crearNuevaSolicitud() {

    let idImportador = usuarioConectado.Identificador
    let tipoMercaderia = document.querySelector("#slcMercaderia").value;
    let descripcionMercaderia = document.querySelector("#txtDescripcionCrear").value;
    let puertoOrigen = document.querySelector("#txtpuertoOrigen").value;
    let cantidadContenedores = parseInt(document.querySelector("#txtContenedores").value);
    let idEmpresa = document.querySelector("#slcIDEmpresaCrear").value;
    let estadoSolicitud = "pendiente"
    //verificar que todos los campos esten completos
    let camposCompletos = true;
    if (tipoMercaderia == "" || descripcionMercaderia == "" || puertoOrigen == "" || cantidadContenedores == "" || idEmpresa == "") {
        camposCompletos = false;
        document.querySelector("#msgCrearNuevaSolicitud").innerHTML = "Faltan campos por completar"
    }
    //si todo correcto, sumo al contador y agrego 
    if (camposCompletos == true && usuarioConectado.Estado == "habilitado") {
        let unaSolicitud = new Solicitudes(idImportador, tipoMercaderia, descripcionMercaderia, puertoOrigen, cantidadContenedores, estadoSolicitud, idEmpresa)
        listaSolicitudes.push(unaSolicitud)
        document.querySelector("#msgCrearNuevaSolicitud").innerHTML = `Solicitud número ${unaSolicitud.Identificador}. <br> Pendiente de confirmación `
    } else if (usuarioConectado.Estado == "deshabilitado") {
        document.querySelector("#msgCrearNuevaSolicitud").innerHTML = "No podrá crear nuevas solicitudes hasta que una empresa lo vuelva a habilitar"
    }
    document.querySelector("#slcMercaderia").value = ""
    document.querySelector("#txtDescripcionCrear").value = ""
    document.querySelector("#txtpuertoOrigen").value = ""
    document.querySelector("#txtContenedores").value = ""
    document.querySelector("#slcIDEmpresaCrear").value = ""
    cargarComboCargasPendientes()


}
//Consulta solicitudes pendientes

function consultaSolicitudesPendientes() {
    //defino variables ingresadas
    let numeroSolicitud = document.querySelector("#txtNumeroSolicitud").value;
    let descripcionMercaderia = document.querySelector("#txtDescripcionMercaderiaConsultaPendiente").value.toLowerCase();
    if (usuarioConectado.Estado == "habilitado") {
        // Si los campos estan vacios imprimo la lista completa
        if (numeroSolicitud == "" && descripcionMercaderia == "") {
            //imprimo la funcion que me tira la table
            document.querySelector("#msgMostrarListaSolicitudes").innerHTML = tablaSolicitudesPendientes(listaSolicitudes)

        } else {
            let coincideSolicitud = false
            for (let j = 0; j < listaSolicitudes.length; j++) {
                if (listaSolicitudes[j].Identificador == numeroSolicitud && listaSolicitudes[j].Estado == "pendiente" || listaSolicitudes[j].Descripcion.toLowerCase() == descripcionMercaderia && listaSolicitudes[j].Estado == "pendiente") {
                    coincideSolicitud = true
                    let solicitudEncontrada = listaSolicitudes[j]
                    document.querySelector("#msgMostrarListaSolicitudes").innerHTML = `Tipo de mercadería: ${solicitudEncontrada.TipoMercaderia}<br> Descripción de mercadería: ${solicitudEncontrada.Descripcion}<br> Puerto de origen: ${solicitudEncontrada.PuertoOirgen}<br> Cantidad contenedores: ${solicitudEncontrada.CantidadContenedores} <br>`
                }
            }
            if (coincideSolicitud == false) {
                document.querySelector("#msgMostrarListaSolicitudes").innerHTML = "No se encontró solicitud pendiente"
            }
        }

    } else {
        document.querySelector("#msgMostrarListaSolicitudes").innerHTML = "USUARIO DESHABILITADO <br> No podrá consultar ni cancelar solicitudes hasta que una empresa lo vuelva a habilitar"
    }
}
//Tabla solicitudes pendientes
function tablaSolicitudesPendientes(unArray) {
    let tablaSolicitudesPendientes = `<table border=1>
    <th>Id Solicitud</th>
    <th>Tipo de mercadería</th>
    <th>Descripción</th>
    <th>Puerto de Origen</th>
    <th>Cantidad contenedores</th>
    <th>Estado</th>
    <th>Cambiar estado</th>`
    for (let i = 0; i < unArray.length; i++) {
        if (unArray[i].Estado == "pendiente" && unArray[i].IdImportador == usuarioConectado.Identificador) {
            tablaSolicitudesPendientes += `
            <tr>
                <td>${unArray[i].Identificador}</td>
                <td>${unArray[i].TipoMercaderia}</td>
                <td>${unArray[i].Descripcion}</td>
                <td>${unArray[i].PuertoOirgen}</td>
                <td>${unArray[i].CantidadContenedores}</td>
                <td>${unArray[i].Estado}</td>
                <td><input type="button" value ="Cancelar Solicitud" id="btnCancelarSolicitud" onClick=cambiarEstado(${unArray[i].Identificador})></td>
            </tr>
            `
        }
    }
    tablaSolicitudesPendientes += `</table>`
    return tablaSolicitudesPendientes
}
//CANCELAR UNA SOLICITUD PENDIENTE
function cambiarEstado(unId) {
    if (usuarioConectado.Estado == "habilitado") {
        for (let i = 0; i < listaSolicitudes.length; i++) {
            if (listaSolicitudes[i].Identificador == unId) {
                if (listaSolicitudes[i].Estado == "pendiente") {
                    listaSolicitudes[i].Estado = "cancelado"
                    cargarComboCargasPendientes()
                }
            }
        }
    }
    deshabilitarImportador()
    if (usuarioConectado.Estado == "deshabilitado") {
        document.querySelector("#msgMostrarListaSolicitudes").innerHTML = "USUARIO DESHABILITADO <br> No podrá consultar ni cancelar solicitudes hasta que una empresa lo vuelva a habilitar"
    } else {
        document.querySelector("#msgMostrarListaSolicitudes").innerHTML = tablaSolicitudesPendientes(listaSolicitudes)
    }
}
//DESHABILITAR SI EL IMPORTADOR TIENE MÁS DE 3 CANCELACIONES
function deshabilitarImportador() {
    // creo variables para contar las solicitudes canceladas y otra que determine el estado del usuario
    let usuarioDeshabilitado = false
    let cantidadSolicitudesCanceladas = 0
    //recorro el array de las solicitudes
    for (let solicitud of listaSolicitudes) {

        //defino que si el estado de la solicitud es cancelado y el identificador de empresa de la solicitud es el mismo que el del usuario conectado entocnes sume 1 por vez a la cantidad de solicitudes canceladas
        if (solicitud.Estado == "cancelado" && solicitud.IdImportador == usuarioConectado.Identificador) {
            cantidadSolicitudesCanceladas++

        }
        //si la cantidad es mayor o igual a tres cambio a verdadero la variable de usuario deshabilitado
        if (cantidadSolicitudesCanceladas >= 3) {
            usuarioDeshabilitado = true
        } else {
            usuarioDeshabilitado = false
        }
        //si el usuario esta deshabilitado entonces muestra mensaje en pantalla y bloquea algunas funcionalidades (crear nueva solicitud,)
        if (usuarioDeshabilitado == true) {
            if (usuarioConectado.Estado = "habilitado") {
                usuarioConectado.Estado = "deshabilitado"
                document.querySelector("#msgUsuarioRegistrado").innerHTML = `Usuario deshabilitado`
                comboImportadorDeshabilitado()
            }
        } else if (usuarioDeshabilitado == false) {
            usuarioConectado.Estado = "habilitado"
        }
    }
}
// ESTADISTICAS 

//Porcentajes cancelados
function generarPorcentajesCancelados() {
    //defino variables para conteo
    let cantidadTotalSolicitudes = 0
    let cantidadSolicitudesCanceladas = 0
    //recorro array solicitudes y sumo totales y canceladas
    for (let solicitud of listaSolicitudes) {
        if (solicitud.IdImportador == usuarioConectado.Identificador) {
            cantidadTotalSolicitudes++
        }
        if (solicitud.Estado == "cancelado") {
            cantidadSolicitudesCanceladas++
        }
    }
    //defino porcentaje
    if (cantidadTotalSolicitudes != 0) {
        let porcentaje = (100 * cantidadSolicitudesCanceladas) / cantidadTotalSolicitudes
        document.querySelector("#msgPorcentajeCancelaciones").innerHTML = `El porcentaje de cancelaciones realizadas es de ${porcentaje} %`
    } else {
        document.querySelector("#msgPorcentajeCancelaciones").innerHTML = `No existen solicitudes de carga`
    }
}

//Proximas llegadas
//defino fecha del dia de hoy 
function mostrarFechaHoy() {
    let fecha = new Date()
    let anio = fecha.getFullYear()
    let mes = fecha.getMonth() + 1
    if (mes < 10) mes = `0${mes}`
    let dia = fecha.getDate()
    let mifecha = `${anio}${mes}${dia}`
    return mifecha
}
//muestro proximasllegadas    
function mostrarProximasLlegadas() {
    f1 = mostrarFechaHoy()
    let tablaProximasLlegadas = `<table border=1>
    <th>Nombre buque</th>
    <th>Fecha de llegada</th>
    `
    for (let viajes of listaViajes) {
        f2 = viajes.Fecha
        //si la fecha de los viajes es despues del dia de hoy entonces lleno la tabla
        if (f2 > f1) {
            tablaProximasLlegadas += ` 
                <tr>
                    <td>${viajes.Nombre}</td>
                    <td>${viajes.Fecha}</td>
                </tr>
            `
        }
    }
    tablaProximasLlegadas += `</table>`
    document.querySelector("#msgProximasLlegadasBuqes").innerHTML = tablaProximasLlegadas
}


//Porcentaje lineas de carga 
function generarPorcentajeLineasDeCarga() {
    // quiero mostrar porcentaje de solicitudes confirmadas que representa la cantidad de solicitudes en cada linea
    //creo variables para conteo
    let cantidadTotalSolicitudesConfirmadas = 0
    let cantidadSolicitudesConfirmadasEmp1 = 0
    let cantidadSolicitudesConfirmadasEmp2 = 0
    let cantidadSolicitudesConfirmadasEmp3 = 0
    let cantidadSolicitudesConfirmadasEmp4 = 0
    for (let i of listaSolicitudes) {
        if (i.IdImportador == usuarioConectado.Identificador) {
            if (i.Estado == "confirmado") {
                cantidadTotalSolicitudesConfirmadas++
                if (i.IdEmpresa == 1) {
                    cantidadSolicitudesConfirmadasEmp1++
                } else if (i.IdEmpresa == 2) {
                    cantidadSolicitudesConfirmadasEmp2++
                } else if (i.IdEmpresa == 3) {
                    cantidadSolicitudesConfirmadasEmp3++
                } else if (i.IdEmpresa == 4) {
                    cantidadSolicitudesConfirmadasEmp4++
                }
            }
        }
    }
    //calculo porcentajes
    resultado1 = (cantidadSolicitudesConfirmadasEmp1 * 100) / cantidadTotalSolicitudesConfirmadas
    resultado2 = (cantidadSolicitudesConfirmadasEmp2 * 100) / cantidadTotalSolicitudesConfirmadas
    resultado3 = (cantidadSolicitudesConfirmadasEmp3 * 100) / cantidadTotalSolicitudesConfirmadas
    resultado4 = (cantidadSolicitudesConfirmadasEmp4 * 100) / cantidadTotalSolicitudesConfirmadas
    //muestro resultados
    document.querySelector("#msgPorcentajeLineasCarga").innerHTML = ""
    //si no hay solicitudes confirmadas informo para que no de error de resultado
    if (cantidadTotalSolicitudesConfirmadas == 0) {
        document.querySelector("#msgPorcentajeLineasCarga").innerHTML = `No hay solicitudes confirmadas`
    } else {
        if (resultado1 != 0) {
            document.querySelector("#msgPorcentajeLineasCarga").innerHTML += `Porcentaje de cargas en línea 1: ${resultado1} %<br>`
        }
        if (resultado2 != 0) {
            document.querySelector("#msgPorcentajeLineasCarga").innerHTML += `Porcentaje de cargas en línea 2: ${resultado2}<br> %`
        }
        if (resultado3 != 0) {
            document.querySelector("#msgPorcentajeLineasCarga").innerHTML += `Porcentaje de cargas en línea 3: ${resultado3}<br> %`
        }
        if (resultado4 != 0) {
            document.querySelector("#msgPorcentajeLineasCarga").innerHTML += `Porcentaje de cargas en línea 4: ${resultado4} %`
        }

    }
}
//PESTAÑAS MENU EMPRESA

function combodinamicoIDEmpresa() {
    let comboIDEmpresa = document.querySelector("#slcIdEmpresaViajeNuevo");
    comboIDEmpresa.innerHTML = ""
    for (let unaEmpresa of listaEmpresas) {
        if (unaEmpresa.Identificador == usuarioConectado.Identificador) {
            comboIDEmpresa.innerHTML += `<option value=${unaEmpresa.Identificador}>${unaEmpresa.Identificador}</option>`
        }
    }
}
//Crear nuevo viaje
function crearViajeEmpresa() {
    let nameBuque = document.querySelector("#txtNombreBuqueEmpresa").value;
    let cantContenedores = parseInt(document.querySelector("#txtCantidadContenedoresEmpresa").value);
    let iDEmpresa = document.querySelector("#slcIdEmpresaViajeNuevo").value;
    let fechaLlegada = document.querySelector("#dateFechaLlegada").value;
    fechaLlegada = fechaLlegada.replaceAll("-", "")

    //verifico que todos los datos esten ingresados
    let camposCompletos = true
    if (nameBuque == "" || cantContenedores == "" || iDEmpresa == "" || fechaLlegada == "") {
        camposCompletos = false
        document.querySelector("#msgCrearViajeEmpresa").innerHTML = "Faltan campos por completar"

    }
    //si campos completos entonces agrego objeto al array
    if (camposCompletos == true) {
        let unViaje = new Viajes(nameBuque, cantContenedores, iDEmpresa, fechaLlegada)
        listaViajes.push(unViaje)
        document.querySelector("#msgCrearViajeEmpresa").innerHTML = `El número de viaje es : ${unViaje.Identificador}.`
        generarComboDinamicoViajesListado()
        generarComboDinamicoViajes()
    }
    document.querySelector("#txtNombreBuqueEmpresa").value = ""
    document.querySelector("#txtCantidadContenedoresEmpresa").value = ""
    document.querySelector("#slcIdEmpresaViajeNuevo").value = "Vacio"
    document.querySelector("#dateFechaLlegada").value = ""
}
//Asignar solicitud de carga pendiente
//cargo el slc con las solicitudes de cargas pendientes
cargarComboCargasPendientes()
function cargarComboCargasPendientes() {
    let comboCargasPendientes = document.querySelector("#slcCargasPendientes");
    comboCargasPendientes.innerHTML = ""
    for (let i = 0; i < listaSolicitudes.length; i++) {
        if (listaSolicitudes[i].Estado == "pendiente") {
            comboCargasPendientes.innerHTML += `<option value=${listaSolicitudes[i].Identificador}>Descripcion: ${listaSolicitudes[i].Descripcion} | Cantidad contenedores: ${listaSolicitudes[i].CantidadContenedores}</option>`
        }
    }
}

function conocerSolicitud(unId) {
    let encontrada = null
    for (let unaSol of listaSolicitudes) {
        if (unaSol.Identificador == unId) encontrada = unaSol
    }
    return encontrada
}
//asigno la solcitud pendiente a un viaje
function asignarCargaPendiente() {
    let cargaPendiente = document.querySelector("#slcCargasPendientes").value;
    //si no hay nada en el combo muestro mensaje 
    if (cargaPendiente == "") {
        document.querySelector("#msgAsignarCarga").innerHTML = "No hay solicitudes pendientes de confirmación"
    } else {
        //muestro la tabla generada en la funcion
        dibujarTablaViajes(cargaPendiente)
    }
}



//FALTA TIRAR MENSAJE DE QUE NO HAY SOLICITUDES PENDIENTES 
function dibujarTablaViajes(cargaPendiente) {

    let tablaViajes = `<table border =1>
    <th>Id Viaje</th>
    <th>Nombre buque</th>
    <th>Cantidad contenedores</th>
    <th>Id Empresa</th>
    <th>Fecha</th>
    <th>Asignar carga</th>
    `
    i = conocerSolicitud(cargaPendiente)
    let cargaDisponible = false
    if (i != null) {
        for (let j of listaViajes) {
            if (j.cantidadContenedores >= i.CantidadContenedores) {
                cargaDisponible = true
                //le agrego viajes a la tabla
                tablaViajes += `
                    <tr>
                    <td>${j.Identificador}</td>
                    <td>${j.Nombre}</td>
                    <td>${j.cantidadContenedores}</td>
                    <td>${j.iDEmpresa}</td>
                    <td>${j.Fecha}</td>
                    <td><input type="button" value="Asignar viaje" onClick=asignarViaje(${j.Identificador})></td>
                    </tr>`
            }
        }
        if (cargaDisponible == false) {
            tablaViajes = ""
            document.querySelector("#msgAsignarCarga").innerHTML = "La cantidad de contenedores excede el espacio disponible en los viajes"
        } else {
            tablaViajes += `</table>`
            //muestro tabla
            document.querySelector("#msgAsignarCarga").innerHTML = tablaViajes
        }

    } else {
        tablaViajes = ""
        document.querySelector("#msgAsignarCarga").innerHTML = tablaViajes + "Carga asignada con éxito"
    }
}
//asigno viaje en la tabla
function asignarViaje(unId) {
    let cargaPendiente = document.querySelector("#slcCargasPendientes").value
    j = conocerSolicitud(cargaPendiente)
    if (j != null) {
        for (let i of listaViajes) {
            if (i.Identificador == unId) {
                if (i.cantidadContenedores >= j.CantidadContenedores) {
                    if (j.Estado == "pendiente") {
                        j.Estado = "confirmado"
                        i.cantidadContenedores = i.cantidadContenedores - j.CantidadContenedores
                        j.IdViaje = i.Identificador;
                        i.iDEmpresa = usuarioConectado.Identificador; 
                        j.IdEmpresa = usuarioConectado.Identificador;
                       
                        cargarComboCargasPendientes()
                    }
                }
            }
        }
        dibujarTablaViajes(j)
    }
}
//Combo dinamico viajes

function generarComboDinamicoViajes() {
    let comboDinamicoViajes = document.querySelector("#slcViajesParaRollover");
    comboDinamicoViajes.innerHTML = ""

    for (let viaje of listaViajes) {
        if (viaje.iDEmpresa == usuarioConectado.Identificador) {

            comboDinamicoViajes.innerHTML += `<option value=${viaje.Identificador}>${viaje.Nombre}</option>`
        }
    }
}




//ROLLOVER CARGA
function rolloverCarga() {
    //creo variable del viaje elegido en el combo de viajes 
    let viajeElegido = document.querySelector("#slcViajesParaRollover").value;



    //creo encabezado de la tabla
    let tablaSolicitudes = `<table border=1>
    <th>Id Solicitud</th>
    <th>Tipo mercadería</th>
    <th>Descripción</th>
    <th>Puerto de Origen</th>
    <th>Cantidad de contenedores</th>
    <th>Id Empresa</th>
    <th>        </th>
    `
    //recorro array de solicitudes y si el estado es confirmado para ese viaje imprimo tabla
    for (let carga of listaSolicitudes) {
        if (carga.IdViaje == viajeElegido) {
            if (carga.Estado == "confirmado") {

                tablaSolicitudes += `
            <tr>
            <td>${carga.Identificador}</td>
            <td>${carga.TipoMercaderia}</td>
            <td>${carga.Descripcion}</td>
            <td>${carga.PuertoOirgen}</td>
            <td>${carga.CantidadContenedores}</td>
            <td>${carga.IdEmpresa}</td>
            <td><input type="button" value="Cambiar de viaje" onClick=cambiarDeViaje(${carga.Identificador})></td>
            </tr>
            `
            }

        }
    }
    tablaSolicitudes += `</table>`
    document.querySelector("#msgMostrarListaRollOver").innerHTML = tablaSolicitudes
}




//cambio de viaje
function cambiarDeViaje(unID) {
    let viajeElegido = document.querySelector("#slcViajesParaRollover").value;
    v = conocerViaje(viajeElegido)
    //para cambiar de viaje cambio el estado de confrimado a pendiente y en la pestaña de asignar solicitudes pendientes se lo asigno a otro viaje
    for (let solicitud of listaSolicitudes) {
        let resultadoContenedores = v.cantidadContenedores
        if (solicitud.Identificador == unID) {
            if (solicitud.Estado == "confirmado") {
                solicitud.Estado = "pendiente"
                resultadoContenedores = resultadoContenedores + solicitud.CantidadContenedores
                v.cantidadContenedores = resultadoContenedores
                //cargo el combo de solicitudes pendientes para que se me agregue la que acabo de rollear
                cargarComboCargasPendientes()
            }
        }
    }
    rolloverCarga()
}

//HABILITAR IMPORTADOR
//armo el combo dinamico
comboImportadorDeshabilitado()
function comboImportadorDeshabilitado() {
    let ImportadorDeshabilitado = document.querySelector("#slcHabilitarImportador")
    ImportadorDeshabilitado.innerHTML = ""

    for (let importador of listaImportadores) {
        if (importador.Estado == "deshabilitado") {
            ImportadorDeshabilitado.innerHTML += `<option value=${importador.Identificador}>${importador.Nombre}</option>`
        }
    }
}
//funcion boton habilitar
function habilitarImportador() {
    let ImportadorDeshabilitado = document.querySelector("#slcHabilitarImportador").value;
    //recorro la lista de solicitudes, si es del importador y estan canceladas, pasan a estar ignoradas y automaticamente el importador pasara a estar habilitado
    for (let solicitud of listaSolicitudes) {
        if (solicitud.IdImportador == ImportadorDeshabilitado) {
            if (solicitud.Estado == "cancelado") {
                solicitud.Estado = "ignorado"
                for (let importador of listaImportadores) {
                    //habilito al importador cambiandole el estado y llamando a la funcion
                    if (importador.Estado == "deshabilitado") {
                        importador.Estado = "habilitado"
                        deshabilitarImportador()
                        comboImportadorDeshabilitado()
                    }
                }
            }
        }
    }
    document.querySelector("#msgImportadorHabilitado").innerHTML = "Se ignoraron todas las cargas canceladas del importador. <br> Importador habilitado"

}

//generar combo de viajes

function generarComboDinamicoViajesListado() {
    let comboDinamicoViajes = document.querySelector("#slcBuquesListado");
    comboDinamicoViajes.innerHTML = ""
    for (let viaje of listaViajes) {
        if (viaje.iDEmpresa == usuarioConectado.Identificador) {
            comboDinamicoViajes.innerHTML += `<option value=${viaje.Identificador}>${viaje.Nombre}</option>`
        }
    }
}

//Listado total de viajes
function conocerViaje(unId) {
    let encontrada = null
    for (let viaje of listaViajes) {
        if (viaje.Identificador == unId) encontrada = viaje
    }
    return encontrada
}

function generarListadoCargas() {
    let viaje = document.querySelector("#slcBuquesListado").value
    dibujarTablaCargasdeViaje(viaje)
}

function dibujarTablaCargasdeViaje(viaje) {
    let tablaSolicitudes = `<table border =1>
    <th>Id Solicitud</th>
    <th>Id importador</th>
    <th>Id Empresa</th>
    <th>Tipo de mercaderia</th>
    <th>Descripcion</th>
    <th>Cantidad de contenedores</th>
    `
    sol = conocerViaje(viaje)
    
    for (let solicitud of listaSolicitudes) {
        let viajeVacio = true
        if (solicitud.IdViaje == viaje && sol.Estado == "confirmado") {
            viajeVacio = false
            tablaSolicitudes += `
            <tr>
            <td>${solicitud.Identificador}</td>
            <td>${solicitud.IdImportador}</td>
            <td>${solicitud.IdEmpresa}</td>
            <td>${solicitud.TipoMercaderia}</td>
            <td>${solicitud.Descripcion}</td>
            <td>${solicitud.CantidadContenedores}</td>
           
            </tr>`
        }
    }
    if (viajeVacio = true ){
        document.querySelector("#msgTablas").innerHTML = "Viaje sin cargas"
    }else{

    tablaSolicitudes += `</table>`
    document.querySelector("#msgTablas").innerHTML = tablaSolicitudes

}
}
//Listado cargas peligrosas
function generarListadoCargasPeligrosas() {
    let viaje = document.querySelector("#slcBuquesListado").value

    dibujarTablaCargasPeligrosas(viaje)
}
function dibujarTablaCargasPeligrosas(viaje) {
    let tablaSolicitudesPeligrosas = `<table border =1>
    <th>Id Solicitud</th>
    <th>Id importador</th>
    <th>Id Empresa</th>
    <th>Tipo de mercaderia</th>
    <th>Descripcion</th>
    <th>Cantidad de contenedores</th>
    
    
    `
    sol = conocerViaje(viaje)
    let viajeVacio = true
    for (let solicitud of listaSolicitudes) {
        if (solicitud.IdViaje == viaje) {
            if (solicitud.TipoMercaderia == "Carga peligrosa" && sol.Estado == "confirmado") {
                viajeVacio = false
                tablaSolicitudesPeligrosas += `
            <tr>
            <td>${solicitud.Identificador}</td>
            <td>${solicitud.IdImportador}</td>
            <td>${solicitud.IdEmpresa}</td>
            <td>${solicitud.TipoMercaderia}</td>
            <td>${solicitud.Descripcion}</td>
            <td>${solicitud.CantidadContenedores}</td>
            
           
            </tr>`
            }
        }
    }
    if (viajeVacio == true){
        document.querySelector("#msgTablas").innerHTML = "Viaje sin cargas peligrosas"

    }else{
    tablaSolicitudesPeligrosas += `</table>`
    document.querySelector("#msgTablas").innerHTML = tablaSolicitudesPeligrosas

}
}
