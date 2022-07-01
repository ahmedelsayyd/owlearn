import { Pipe, PipeTransform } from '@angular/core';
import { Coureses } from '../enums/courses';
import { Course } from '../models/course.modal';
import { allCourses } from '../models/courses';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: Course[], filter: Coureses): any {

    if(!items.length)  return []
    if(!filter || filter === Coureses.all) return allCourses

    let filteredItem = items.filter(item => item.type === filter)

    return filteredItem;
  }

}
