// JavaScript source code

var dato;
var map;


$.ajax({
	url: 'http://localhost:8080/informacion/api/user/1',
	dataType: 'json',
	success: function (data) {
		
		dato = data;

		var base64rec= dato['foto'];
		
		
		var variablesrc = 'data:image/png;base64,' + base64rec;

		document.getElementById("fotoCv").setAttribute("SRC",variablesrc);

	}
});



