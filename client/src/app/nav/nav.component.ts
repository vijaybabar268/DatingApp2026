import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log("Success");
        this.loggedIn = true;
      },
      error: (err) => console.log("Error: ", err),
      complete: () => {
        console.log("Request completed");
        this.model = {};
      }
    })
  }

  logout() {
    this.loggedIn = false;
  }

}
