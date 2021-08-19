import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text) {
      alert('Please add a task');
      return;

      const newTask ={
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
    }
    // @todo - emit event
  
    //reset values
    this.text='';
    this.day='';
    this.reminder = false
  }


}
