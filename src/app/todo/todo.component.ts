import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  count = 0;

  push = false;

  editpush = false;


  newTask = '';

  tasks: any = [];

  taskID =  '';

  addTask() {
    const tasks = {
      id: (this.tasks.length + 1).toString(),
      data: this.newTask,
    };

    if(this.editpush && this.taskID !== ''){
      this.tasks[Number(this.taskID) - 1].data = this.newTask
      this.editpush = false;
      this.taskID = '';
      return
    }

    if (this.newTask.length === 0) {
      this.push = true;
    } else {
      this.tasks.push(tasks);
      this.count++;
      this.newTask = '';
      this.push = false;
    }
    
  }

  editTask(taskId: string){
    const i = Number(taskId)
    this.newTask = this.tasks[i - 1].data
    this.editpush = true;
    this.taskID = this.tasks[i - 1].id
    console.log(this.tasks)
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task: { id: string; }) => task.id != taskId);
    this.count = this.tasks.length;
  }

}
