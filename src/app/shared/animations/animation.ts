import { trigger, transition, style, animate, keyframes } from "@angular/animations";

export const fadeInOut = trigger('fadeIn', [

  transition(':enter',[

    style({opacity: 0, transform: 'scale(0)'}),
    animate('1.5s 1s cubic-bezier(0.17, 0.89, 0.24, 1.11)',
    keyframes([
      style({opacity: 0, offset: 0}),
      style({opacity: .4,transform : 'scale(.7)', offset: .8}),
      style({opacity: 1,transform : 'scale(1)', offset: 1}),
    ])

    ),
  ]),

  transition(':leave',[
    animate('1.5s  cubic-bezier(0.17, 0.89, 0.24, 1.11)',
    keyframes([
      style({opacity: 1,transform : 'scale(1)', offset: 0}),
      style({opacity: .7,transform : 'scale(.3)', offset: .8}),
      style({opacity: 0,transform : 'scale(0)', offset: 1}),
    ]))

  ])

])
