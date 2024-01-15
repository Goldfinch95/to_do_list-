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

  newTask = '';

  tasks: { id: string; data: string }[] = [];

  addTask() {
    const tasks = {
      id: (this.tasks.length + 1).toString(),
      data: this.newTask,
    };

    if (this.newTask.length === 0) {
      this.count == this.tasks.length;
      this.push = true;
    } else {
      this.tasks.push(tasks);
      this.count++;
      this.push = true;
      
      if(this.tasks.length >= 1){
        this.newTask = '';
        this.push = false;
      }
    }
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
    this.count = this.tasks.length;
  }

}
