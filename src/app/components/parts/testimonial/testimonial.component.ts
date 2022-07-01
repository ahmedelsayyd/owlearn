import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  images =[
    'assets/images/graduates/Clicup.png',
    'assets/images/graduates/dropbox.png',
    'assets/images/graduates/Elastic.png',
    'assets/images/graduates/FreshBooks.png',
    'assets/images/graduates/GitHub.png',
    'assets/images/graduates/Google Workspace.png',
    'assets/images/graduates/helpscout.png',
    'assets/images/graduates/HubSpot.png',
    'assets/images/graduates/intuit.png',
    'assets/images/graduates/Paychex.png',
    'assets/images/graduates/Salesforce.png',
    'assets/images/graduates/SAP.png',
    'assets/images/graduates/Segment.png',
    'assets/images/graduates/ServiceNow.png',
    'assets/images/graduates/shopify.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
