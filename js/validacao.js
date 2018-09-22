//Função anonima
$(function () {
    var nome = $('#nome').val();

    $('#errorN').html('');
    var erro = 0;

    if(nome.value === ''){
        document.getElementById('errorN').innerHTML += "Digite um nome!!!<br>";
        erro++;
    }else if(nome.value.length <= 7){
        document.getElementById('errorN').innerHTML += "Digite um nome com mais de 7 caracteres<br>";
        erro++;
        //Verifica nome e sobrenome
    }


    if(erro === 0){
        document.getElementById('usuario').innerHTML = `
       
        <h2>Nome: ${nome.value}</h2>
       `;
       }


});
