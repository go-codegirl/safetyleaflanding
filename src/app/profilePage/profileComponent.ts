import {Component} from '@angular/core';
import {profileDataServices} from "../service/profileDataService";


@Component({
    selector: 'profile-app',
    templateUrl: 'app/profilePage/profileComponent.html',
    styleUrls: ['app/css/profilePage.css']
})


export class ProfileComponent {
    constructor(private profileDataService: profileDataServices) {
    }

    profileDataFromService = this.profileDataService.getData();

}
