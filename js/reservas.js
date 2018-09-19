var tbReservas = [];
$(function () {
    function cadastrarR() {

        var cadastro = {
            nome: document.getElementById('nome').value,
            snome: document.getElementById('sNome').value,
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('fone').value,
            numerop: document.getElementById('nPessoas').value

        };
        tbReservas.push(cadastro);
        localStorage.setItem('tbReservas', JSON.stringify(tbReservas))




    };

    $('#formReservas').submit(function(){
    event.preventDefault()

    cadastrarR();


    });



   


});

