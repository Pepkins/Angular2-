import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';


import {Todo} from './components/list';



@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: Todo }
])
export class App {}

