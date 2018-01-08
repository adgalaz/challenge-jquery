$(document).ready(function() {
  /*
   * Etapa 1
   * Llamando funcion removeBack(); (Eliminando icono flecha)
   */
  removeBack();

  /*
   * Etapa 2
   * Llamando funcion printNews();
   */
  printNews();

  /*
   * Etapa 3
   * Llamando funcion renderHighlightedRecipes(recipesArray);
   *La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
   */
  renderHighlightedRecipes(recipesArray);

  /*
   * Etapa 5
   * Llamando funcion printNews();
   */
  renderActivities(activities);

	/*
   * Etapa 6
   * Llamando funcion printNews();
   */
	renderActivity(activities);

});

/*
 *CREANDO FUNCIONES
 */

/*
 * Etapa 1
 * Funcion que elimina icono flecha
 */
function removeBack() {
  $('.js-back').remove();
};

/*
 * Etapa 2
 * Funcion que imprime parrafo 'Nuevas Recetas'
 */
function printNews() {
  $('.callout-news').append('NUEVAS RECETAS')
};

/*
 *Etapa 3
 * Función que se encarga de pintar TODAS las recetas que tengan
 * marcado el atributo "highlighted" como TRUE
 */
function renderHighlightedRecipes(recipesArray) {
  console.log('Recipes: ', recipesArray);
  for (i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].highlighted == true) {
      renderRecipe(recipesArray[i]);
    }
  }
};

/*
 * Etapa 4
 * Función que se encarga de pintar UNA recetas que tenga
 * marcado el atributo "highlighted" como TRUE
 * Aqui se tiene que crear el HTML que esta en el
 * archivo "templates/templates-recipe.html"
 */
function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
  var name = recipesArray[i].name;
  var title = recipesArray[i].title;
  var source = recipesArray[i].source.name;
  $('.list-recipes').append(
    '<a class="item-recipe" href="#">' +
    '<span class="attribution">' +
    '<span class="title-recipe">' +
    title +
    '</span>' + '<span class="metadata-recipe">' +
    '<span class="author-recipe">' +
    source +
    '</span>' +
    '<span class="bookmarks-recipe">' +
    '<span class="icon-bookmark"></span>' +
    '</span>' + '</span>' + '</span>' +
    '<img src="img/recipes/320x350/' + name + '.jpg" />' +
    '</a>'
  )
};

/*
 * Etapa 5
 * Función que se encarga de pintar todas las actividades
 */
function renderActivities(activities) {
  console.log('Activities: ', activities);
  for (i = 0; i < activities.length; i++) {
    renderActivity(activities[i]);
    if (activities.length > 0) {
      $('.wrapper-message').remove();
    }
  }
};


/*
 * Etapa 6
 * Función que se encarga de pintar una actividad
 * Aqui se tiene que crear el HTML que esta en el
 * archivo "templates/templates-activity.html"
 */
function renderActivity(recipe) {
  var userAvatar = activities[i].userAvatar;
  var userName = activities[i].userName;
  var recipeName = activities[i].recipeName;
  var text = activities[i].text;
  var place = activities[i].place;
  var image = activities[i].image;

  $('.list-activities').append(
    '<a href="#" class="item-activity">' +
    '<span class="attribution">' +
    '<span class="avatar">' +
    '<img src="' + userAvatar + '" class="image-avatar">' +
    '</span>' +
    '<span class="meta">' +
    '<span class="author">' + userName + '</span> made ' +
    '<span class="recipe">' + recipeName + '</span>: ' + text +
    '<span class="location"> &mdash; ' + place +
    '</span>' +
    '</span>' +
    '</span>' +
    '<div class="bg-image" style="background-image: url(' + image +');"></div>'+
    '</a>'
  )
}
