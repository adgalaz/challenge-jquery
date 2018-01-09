$(document).ready(function () {
  /*
  * Etapa 1
  * Llamando funcion removeBack() (Eliminando icono menu)
  */
  removeBack();

  /*
  * Etapa 7
  * Imprimiendo mensaje en la consola cuando documento esta listo
  */
  console.log('Hello!! I am ready!!')


  /*
  * Etapa 8 - Etapa 9
  * Agregando y quitando clase make
  * Agregando y quitando clase active
  */
  $('.js-show-recipe').click(function(){
    console.log("btn recipe");
        $('.page').removeClass('make');
        $(this).addClass('active');
        $('.js-show-make').removeClass('active');
    });

  $('.js-show-make').click(function(){
      console.log("btn make it");
        $('.page').addClass('make');
        $(this).addClass('active');
        $('.js-show-recipe').removeClass('active');
    });

    /*
    * Etapa 10
    * Agregando href a botón back
    */

    $('.js-back').click(function(){
      console.log("btn back");
        $('.js-back').attr("href", "index.html");
    });

});

/*
* Etapa 1
* Funcion que elimina icono menu
*/
function removeBack(){
	$('.js-menu').remove();
};
