import { Component, OnInit } from '@angular/core';
import { toggolecontactUsCardtrigger } from 'src/app/shared/animations/animation';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],


})
export class CtaComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  openModel(){
    this.uiService.openModel.next(true)
  }

}
