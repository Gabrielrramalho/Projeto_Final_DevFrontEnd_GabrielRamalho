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



    var nome = document.getElementById('nome').value;
    var sNome = document.getElementById('sNome').value;
    var data = document.getElementById('data').value;
    var hora = document.getElementById('email').value;
    var telefone = document.getElementById('fone').value
    var nPessoas = document.getElementById('nPessoas').value




});