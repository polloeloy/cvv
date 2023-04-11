// JavaScript source code
var base64String = "";
function Uploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];
	var reader = new FileReader();git
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
		imageBase64Stringsep = base64String;
	}
	reader.readAsDataURL(file);
}


function guardar() {
    var data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        foto: base64String
    };
    fetch("http://localhost:8080/informacion", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json; charset=UTF-8" }
    });
}



