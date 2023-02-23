import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  model = new Model();
  isDisplay = false;
  
  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item=> !item.action);
  }

  addItem(value:string){
    if (value!=""){
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
