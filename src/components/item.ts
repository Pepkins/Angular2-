import {Component} from 'angular2/core';

@Component({
    selector: 'todo-item',
    inputs: ["todo"],
    template: `
        {{todo.title}}
        <strong>{{ todo.price}}$</strong>
		{{todo.tag}}
    `
})
export class ItemComponent {
	public todo;
}