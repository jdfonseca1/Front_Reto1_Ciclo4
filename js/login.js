/**
 * Cargar la libreria de Jquery y ubicar el cursor en el campo de login
 */
 
 $(document).ready(function () {
    estadoInicial()
});

/**
 * autenticar al usuario en la aplicaciòn
 */
 
 function login(){ 
	 //capturar los datos 
	 let email = $("#useremail").val()
	 let password = $("#password").val()

	 $.ajax({
        //url del servicio
        url: "http://localhost:8080/api/user/"+ email + "/" + password,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta)	
        },
        error: function (xhr, status) {	
            console.log("algo fallo");	
        },
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
        }
    });
 }

 function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)
}

function estadoInicial(){
    $("#useremail").focus()
}
 
 