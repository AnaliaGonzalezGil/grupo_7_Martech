window.addEventListener("load", function(){
    let formulario = document.querySelector("form.page-forms");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let imagenDelPerfil = document.querySelector("input.imagenPerfil");

        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        
        if(!allowedExtensions.exec(filePath)){
            alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
            // fileInput == "";
            }})})