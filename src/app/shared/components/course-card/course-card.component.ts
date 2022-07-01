import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.modal';
import { fadeInOut } from '../../animations/animation';





@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  animations: [
    fadeInOut
  ]
})


export class CourseCardComponent implements OnInit {

  @Input('course') course!:Course
  constructor() { }

  ngOnInit(): void {
  }

}
