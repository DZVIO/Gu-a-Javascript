window.onload = function(){
    var form = document.getElementById("form");
    form.onsubmit = function(event){
        event.preventDefault();

        //validar nombre
        var nameinput = document.getElementById("name");
        if (nameinput.value.trim() === "") {
            alert("Digite su nombre");
            return false;
        }

        //validar telefono
        var telinput = document.getElementById("tel");
        if (telinput.value.trim() === "") {
            alert("Digite su telefono");
            return false;
        }

        //validar correo
        var mailinput = document.getElementById("mail");
        if (mailinput.value.trim() === "") {
            alert("Digite su mail");
            return false;
        }

        //validar placa
        var placainput = document.getElementById("placa");
        if (placainput.value.trim() === "") {
            alert("Digite la placa del auto");
            return false;
        }

        //validar modelo
        var modinput = document.getElementById("mod");
        if (modinput.value.trim() === "") {
            alert("Digite el modelo del auto");
            return false;
        }

        //validar kilometro
        var kilinput = document.getElementById("kil");
        if (kilinput.value.trim() === "") {
            alert("Digite el kilometraje del auto");
            return false;
        }

        alert("Tu auto fue registrado correctamente")
        document.getElementById("form").reset();
        return true;
    }
}