var tbReservas = [];
$(function () {
    function cadastrarR() {

        var cadastro = {
            nome: document.getElementById('nome').value,
            data: document.getElementById('assunto').value,
            hora: document.getElementById('hora').value,
            email: document.getElementById('email').value,
            numerop: document.getElementById('nPessoas').value

        };
        tbReservas.push(cadastro);
        localStorage.setItem('tbReservas', JSON.stringify(tbReservas))




    };

    $('#reservas').submit(function () {
        event.preventDefault()

        cadastrarR();


    });





});