import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
 	templateUrl: './app.component.html',
 	styleUrls: ['app.component.css']
})

export class AppComponent  { 
	name = 'Angular'; 
	demo: string;

	title: string;
	linkURL: string = 'https://angular.io/resources/images/logos/standard/shield-large.png';
	constructor( private _exampleService: ExampleService ) {
		this.title = _exampleService.someMethod();
	}

	modelChanged() {
		console.log('algo cambio');
	}

	mouseOuted() {
		console.log('mouse outed')
	}

	userKeyUp(event: any){
		console.log(event)
	}

	evaluation = true; 
	anotherEvaluation = true;

	setClasses() {
		let classes = {
			extraclass: this.evaluation,
			anotherclass: this.anotherEvaluation
		}
		return classes;
	}

	setStyles() {
		let styles = {
			'display': this.evaluation ? 'inline' : 'none',
			'color': this.anotherEvaluation ? 'red' : 'blue'
		}
		return styles;
	}
}
