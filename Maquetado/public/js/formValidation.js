// window.addEventListener('load', function() {

    function validarExt()
    {
        const archivoInput = document.getElementById('imagenPerfil');
        const archivoRuta = archivoInput.value;
        const extPermitidas =  /(.jpg|.jpeg|.png|.gif)$/i;
        if(!extPermitidas.exec(archivoRuta)){
            alert('Asegurese de haber seleccionado un formato válido');
            archivoInput.value = '';
            return false;
        }
    
        else
        {
            // mostrar la vista previa
            if (archivoInput.files && archivoInput.files[0]) 
            {
                const visor = new FileReader();
                visor.onload = function(e) 
                {
                    document.getElementById('visorArchivo').innerHTML = 
                    '<embed src="'+e.target.result+'" width="500" height="375" />';
                };
                visor.readAsDataURL(archivoInput.files[0]);
            }
        }}
        // (?=.*[!#$%&? "]) 
        // window.addEventListener("load", function(){
        //     let formulario = document.querySelector("form.page-forms");
        //     formulario.addEventListener("submit", function(e){
        //         e.preventDefault();
             
           
        function validatePassword() {
            validacion = document.getElementById('claveRegistro').value 
            errors = [];
            if (validacion.length < 8) {
                errors.push("La contraseña debe tener al menos 8 caracteres"); 
            }
            if (validacion.search(/[a-z]/i) < 0) {
                errors.push("La contraseña debe tener al menos una letra");
            }
            if (validacion.search(/[!.;#$%&? "]/i) < 0) {
                errors.push("La contraseña debe tener al menos un caracter especial -> !.;#$%&? ");
            }
            if (validacion.search(/[0-9]/) < 0) {
                errors.push("La contraseña debe tener al menos un número"); 
            }
            if (errors.length > 0) {
                alert(errors.join("\n"));
                return false;
            }
            return false;
        } 

        function ordernar
        const mysql =require("mysql");
        const { connect } = require("../../app");
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "martech_db2",
            port: "3000"
        
        })
        
        connection.connect((err) =>{
            if (err) throw err
            console.log("la conexión funciona")
        })
        
        connection.query('SELECT * FROM products', (err,rows)=>{
            if (err) throw err
            console.log("los datos son"+rows)
        })
        
        connection.end()