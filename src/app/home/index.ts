import {Component} from "@angular/core"
import {AppBar} from './app-bar'

@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [AppBar]
})

export class Home {}