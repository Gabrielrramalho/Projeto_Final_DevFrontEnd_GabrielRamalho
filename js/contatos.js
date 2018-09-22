var tbContatos = [];
$(function () {
    function cadastrarR() {

        var cadastro = {
            nome: document.getElementById('nomeC').value,
            snome: document.getElementById('sNomeC').value,
            email: document.getElementById('emailC').value,
            fone: document.getElementById('foneC').value,
            email: document.getElementById('email').value,
            assuntos: document.getElementById('assuntoC').value,
            mensagen: document.getElementById('mensagemC').value

        };
        tbContatos.push(cadastro)
        localStorage.setItem('tbContatos', JSON.stringify(tbContatos))




    };

    $('#formContato').submit(function(){
    event.preventDefault()

    cadastrarR();


    });



   


});
