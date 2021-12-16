$(document).ready(function () {
    estadoInicial()
});

function registrar(){
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos={
        email : $("#useremail").val(),
        password : $("#password").val(),
        name : $("#username").val()
    }

    let datosPeticion = JSON.stringify(datos)

    $.ajax({
        url: "http://localhost:8080/api/user/new",
        data: datosPeticion,
        type: 'POST',
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta)	
        },
        error: function (xhr, status) {		
            console.log("Hay un error");	
        },
        complete: function (xhr, status) {
            console.log("registro exitoso"  + status);
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
    $("#username").focus()
}