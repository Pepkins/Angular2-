
import {Component} from 'angular2/core';
import {ItemComponent} from './item';

@Component({
    selector: 'productList',
    directives: [ItemComponent],
    styles: [require('./test.styl')]
    template: `
        <ul>
        	<li *ngFor="#todo of todos">
            	<todo-item [todo]="todo"></todo-item>
        	</li>
        </ul>

    `
})
export class Todo {
	public todos: Array<Object> = [
		{ title: 'first product', price: '10', tag:'new'},
		{ title: 'secound product', price: '55', tag:'old'},
		{ title: 'secound product', price: '55', }
	];
}