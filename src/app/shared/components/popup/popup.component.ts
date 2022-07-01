import { Component, OnInit } from '@angular/core';
import { toggolecontactUsCardtrigger } from '../../animations/animation';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [

    //annimations trigger
    toggolecontactUsCardtrigger,
  ]
})
export class PopupComponent implements OnInit {
  openModel$ = this.uiService.openModel

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.uiService.openModel.next(false)
  }

}
