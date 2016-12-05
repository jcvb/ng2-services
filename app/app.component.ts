import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{ title }} Hello {{name}}</h1>
  	
  	<h3>3 Formas de cargar imagenes</h3>
  	<img [src]="linkURL">
  	<img src="{{linkURL}}">
  	<img bind-src="linkURL">

  	<p>Con value: <input [value]="linkURL" size="100" on-mouseout="mouseOuted()" (keyup)="userKeyUp($event)"></p>
	<p>Con ngModel: <input [(ngModel)]="linkURL" size="100" (ngModelChange)="modelChanged()"></p>
  	
  `
})
export class AppComponent  { 
	name = 'Angular'; 
	demo: string;

	title: string;
	linkURL: string = 'https://angular.io/resources/images/logos/standard/shield-large.png';
	constructor( private _exampleService: ExampleService ) {
		this.title = _exampleService.someMethod();
	}

	modelChanged(){
		console.log('algo cambio');
	}

	mouseOuted(){
		console.log('mouse outed')
	}

	userKeyUp(event: any){
		console.log(event)
	}
}
