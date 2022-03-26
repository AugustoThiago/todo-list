import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'TODO List Angular';
  
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }

  saveOnLocalStorage() {
    const data = JSON.stringify(this.list);
    localStorage.setItem('todos', data);
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('todos');
    this.list = JSON.parse(data);
  }

}