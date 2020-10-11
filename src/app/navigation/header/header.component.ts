import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../core/models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() public sidenavToggle = new EventEmitter();
    currentUser: User;
    constructor(){}


    ngOnInit() {

    }

    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

    login() {
        // this.userService.purgeAuth();
        //this.appService.login();

    }

    logout(): void {
        //this.appService.logout();
        //this.userService.logout();
    }
}
