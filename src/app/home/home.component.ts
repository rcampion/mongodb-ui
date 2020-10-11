import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(
		private router: Router

	) { }

	isAuthenticated: boolean;

	ngOnInit() {
		/*
				if (this.userService.isUserAuthenticated()) {
		
					this.isAuthenticated = true;
		
				}
				else {
		
					this.isAuthenticated = false;
		
				}
		*/
	}

}
