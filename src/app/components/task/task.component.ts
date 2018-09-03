import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task_interface'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  /**
   * The input parameter of a component.
   */
  @Input() task:Task
  /**
   * Output events from components, to contact with outer-world.
   */
  @Output() deleted = new EventEmitter<number>()
  /**
   * Notice, that constructor should be used to prepare component during construction time only.
   * It sould only be resoponsable for creating a component.
   * Set up of component shoud go to ngOnInit() inside of Angular lifecycle.
   */
  constructor() { }

  ngOnInit() {

  }

  /**
   * Method, that emitts 'deleted' event
   * @param id 
   */
  delete(id:number) {
    this.deleted.emit(id)
  }

}