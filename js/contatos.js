var tbContatos = [];
$(function () {


    function salvarContato() {
        var contato = {
            nome: document.getElementById('nomeC').value,
            nomeS: document.getElementById('sNomec').value,
            email: document.getElementById('emailC').value,
            telC: document.getElementById('foneC').value,
            assunto: document.getElementById('assuntoC').value,
            mensagem: document.getElementById('mensagemC').value
        };
        tbContatos.push(contato);
        localStorage.setItem("tbContato", JSON.stringify(tbContatos));

    };
    
    $('#forContato').submit(function(){
        event.preventDefault();

        salvarContato();
    });


});