import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {  faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'owlearn';

  constructor(library: FaIconLibrary){
    library.addIcons(
      faLocationDot,
      faUser,
      faCircleArrowRight,
      faInstagram,
      faLinkedin,
      faTwitter,
      faYoutube
      )
  }
}
