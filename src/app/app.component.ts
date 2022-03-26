import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'TODO List Angular';
  
  list:any[]=[];
  saveStorage() {
    const data = JSON.stringify(this.list);
    localStorage.setItem('todos', data);
    console.warn(data);
  }
  
  loadStorage() {
    const data = localStorage.getItem('todos');
    this.list = JSON.parse(data);
  }
  
  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
    this.saveStorage();
  }

  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
    this.saveStorage();
  }

}