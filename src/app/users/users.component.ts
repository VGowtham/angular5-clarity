import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Route,Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';  


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  todos = [];
  showLoader : boolean = false;

  constructor(private http:Http,private router: Router) { } 
  ngOnInit() {
      this.showLoader = true;
      this.http.get('https://jsonplaceholder.typicode.com/users')
      // .subscribe(data => {
      //   // Read the result field from the JSON response.
      //   console.log("dataaa",JSON.parse(data['body']))
      //   this.users = data['results'];
      // });
      .map(res => res.json())
      .subscribe(users => { this.users = users;this.showLoader=false;console.log("users",users) } );
  }

  viewTodo(todo) {
      this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+todo.id)
         .map(res => res.json())
         .subscribe(todos => { this.todos = todos;console.log("todos",todos);} );
          this.router.navigate(['/todos/user', todo.id,todo.name]);
    }
}
