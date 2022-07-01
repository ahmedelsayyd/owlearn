import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coureses } from 'src/app/enums/courses';
import { allCourses } from 'src/app/models/courses';
import { fadeInOut } from 'src/app/shared/animations/animation';

export interface Filter{
  name: string,
  type: Coureses,
  active:boolean
}


@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class CourcesComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<any>
  listCount:number =1

  allCourses = [...allCourses]

  filterations: Filter[] = [
    {
      name: 'All Program',
      type: Coureses.all,
      active:true,
    },
    {
      name: 'UI/UX Design',
      type: Coureses.uxD,
      active:false,
    },
    {
      name: 'Product Management',
      type: Coureses.productManagement,
      active:false,
    },
    {
      name: 'Branding Design',
      type: Coureses.uxD,
      active:false,
    },
    {
      name: 'Mobile Development',
      type: Coureses.mobile,
      active:false,
    },
    {
      name: 'Web Development',
      type: Coureses.web,
      active:false,
    },
  ]

  selectedFilter= Coureses.all

  constructor() { }

    ngOnInit(): void {
    }

    applyFilter(filter:Filter, i:number){
console.log(filter.type);

      this.selectedFilter = filter.type

    if(filter.active ==true) return;

    this.resetFilteration()
    this.filterations[i].active = true

    this.allCourses.some(el => el.type === filter.type) ? this.listCount= 1 : filter.type ===Coureses.all ? this.listCount =1 : this.listCount = 0;
  }

  resetFilteration(){
    this.filterations.forEach(el => el.active = false)
  }

}
