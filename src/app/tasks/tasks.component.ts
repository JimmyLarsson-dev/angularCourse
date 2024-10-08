import { Component, Input, output, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component'

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, AddTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  taskCreatingInProgress = false;  
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string | undefined;
    

    tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'learn all the stuffz',
            dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ];

    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.userId)
    }

    onCompleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onClickedAddTask() {
      this.taskCreatingInProgress = true;
    }

    onCancelAddTask() {
      this.taskCreatingInProgress = false;
    }

}



