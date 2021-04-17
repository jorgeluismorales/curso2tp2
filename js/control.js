const verify = () => {
    if (document.getElementById('nombre').value == '' || (document.getElementById('email').value == '') || (document.getElementById('mensaje').value == '')) {
        window.alert('Todos los campos son obligatorios')
    }else{
        document.forms['enviarMensaje'].submit();
    } 
}

const handleSubmit = () =>{
    document.getElementById("enviarMensaje").reset();
}