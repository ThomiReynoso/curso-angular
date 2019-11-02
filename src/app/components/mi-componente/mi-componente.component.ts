import  { Component } from '@angular/core'; //importo el comp ppal

@Component({ //OBLIGATORIAMENTE lleva prop selector y template
	selector: 'mi-componente', //es la etiqueta de la vista
	templateUrl: './mi-componente.component.html'

	 //entre estas comillas puedo poner el codigo html que quiera

	}) //es un JSON y es imp NO cerrarlo con ;

export class MiComponente{

	public titulo: string;
	public comentario: string;
	public year: number;
	//Array<any> arrays de tipo any

	constructor(){
		this.titulo = "Hola Mundo, soy MI COMPONENTE";
		this.comentario = " Este es el primer componente creado";
		this.year = 2019;
		
		console.log("Componente mi-componente cargado!!");
		console.log(this.titulo, this.comentario, this.year);
	}
}