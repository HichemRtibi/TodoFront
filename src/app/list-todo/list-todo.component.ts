import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos=[
   new Todo(1,'Learn Java',new Date(),false),
    new Todo(2,'Learn Angular',new Date(),false),
    new Todo(3,'Learn Hibernate',new Date(),false),
    new Todo(4,'Learn Spring Framework',new Date(),false),
    ]

  constructor() { }

  ngOnInit() {
  }

}

export class Todo{
  constructor(public id:number,
              public description :string,
              public targetDate:Date,
              public done:boolean){

  }
}
