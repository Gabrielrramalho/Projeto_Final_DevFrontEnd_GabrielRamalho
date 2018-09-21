$(function () {
    $.ajax({
        url: 'data/imagensV.json',
        success: function (u) {
            $.each(u, function (indice, obj) {
                $('#listCarnes ').append(`
                    <div  class="col-lg-4">
                        <img class="img-thumbnail2" src="${obj.img}  "alt="Generic placeholder image" width="300" height="300">
                        <h2 class="font-weight-bold">${obj.nome}</h2>
                        <p>${obj.descricao}<p>
                        
                    </div>
               `);
            });
            //console.log(r);
            //alert('encontrou');

        },
        error: function () {
            alert('Ocorreu um erro!!')
        }

    });
});