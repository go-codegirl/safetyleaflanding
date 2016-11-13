import {Component} from '@angular/core';
import {LoginFormComponent} from './loginForm/loginFormComponent';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[LoginFormComponent],
    styleUrls: ['src/app/css/indexPage.css', 'src/app/css/bootstrap.min.css']
})

export class AppComponent {

}
