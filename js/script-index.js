$(document).ready(function (){

	console.log('hola');

	//Esconder icono flecha Actividad 1
	$('.js-back').hide();

	//Llamando funcion Actividad 2
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

/*
* Imprimiendo Titulo Nuevas Recetas Actividad 2
*/
function printNews(){
  $('.callout-news').append('NUEVAS RECETAS')
};


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for(i=0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$('.title-message').append(
		'<a class="item-recipe" href="#">' +
		  '<span class="attribution">' +
		    '<span class="title-recipe">' +' TITULO DE LA RECETA (ATRIBUTO "title" )' +'</span>' + '<span class="metadata-recipe">' + '<span class="author-recipe">' +'NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name")' +'</span>
		      <span class="bookmarks-recipe">' + '
		        <span class="icon-bookmark"></span>'+ '</span>' + '</span>' + '</span>' + ''<img src="URL DE LA IMAGEN" />' + ''</a>'

	)
}





/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
