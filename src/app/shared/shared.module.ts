import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterByPipe } from '../pipes/filterBy.pipe';
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CourseCardComponent,
    FilterByPipe,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
 ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CourseCardComponent,
    FontAwesomeModule,
    FilterByPipe,
    PopupComponent
  ]
})
export class SharedModule { }
