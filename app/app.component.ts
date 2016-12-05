import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'my-app',
  template: `{{ title }} <h1>Hello {{name}}</h1>`
})
export class AppComponent  { 
	name = 'Angular'; 

	title: string;

	constructor( private _exampleService: ExampleService ) {
		this.title = _exampleService.someMethod();
	}
}
