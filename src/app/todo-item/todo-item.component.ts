import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: string; // Using non-null assertion operator
  @Output() deleteTodo = new EventEmitter<void>();

  onDelete() {
    this.deleteTodo.emit();
  }
}
