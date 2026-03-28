import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Dating app';
  users: any;

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (res) => {
        this.users = res;
        console.log("Success");
      },
      error: (err) => console.log("Error: ", err),
      complete: () => console.log("Request completed")
    })
  }


}
