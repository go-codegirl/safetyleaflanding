import {Component} from '@angular/core';

declare var TxtType: any;

@Component({
    selector: 'default-app',
    templateUrl: 'app/indexDefault/indexDefaultComponent.html',
    styleUrls: ['app/css/indexPage.css']
})



export class IndexDefaultComponent {

    ngOnInit() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0e8b46}";
        document.body.appendChild(css);
    }

}
