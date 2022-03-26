import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'TODO List Angular';
  
  list:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length, name:item})
    // console.warn(this.list);
  }
  removeTask(id:number)
  {
    // console.warn(id)
    this.list = this.list.filter(item=>item.id!==id);
  }
}