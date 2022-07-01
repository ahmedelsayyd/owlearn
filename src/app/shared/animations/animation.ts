import { trigger, transition, style, animate, keyframes, state } from "@angular/animations";

export const fadeInOut = trigger('fadeIn', [
  state('*', style({transform: 'scale(1)', opacity: 1})),
  transition(':enter', [style({transform: 'scale(0)', opacity: .5}), animate('1.5s .5s cubic-bezier(0.17, 0.89, 0.24, 1.11)')]),
  transition(':leave', [animate('.5s cubic-bezier(0.17, 0.89, 0.24, 1.11)', style({transform: 'scale(.7)', opacity: 0}))])

  // transition(':enter',[
  //   style({opacity: 0, transform: 'scale(0)'}),
  //   animate('1.5s cubic-bezier(0.17, 0.89, 0.24, 1.11)',
  //   keyframes([
  //     style({opacity: 0, offset: 0}),
  //     style({opacity: .4,transform : 'scale(.7)', offset: .8}),
  //     style({opacity: 1,transform : 'scale(1)', offset: 1}),
  //   ])

  //   ),
  // ]),

  // transition(':leave',[
  //   animate('1.5s  cubic-bezier(0.17, 0.89, 0.24, 1.11)',
  //   // style({opacity: .5, transform: 'scale(0)'}),
  //   keyframes([
  //     style({opacity: 1,transform : 'scale(1)', offset: 0}),
  //     style({opacity: .4,transform : 'scale(.3)', offset: .8}),
  //     style({opacity: 0,transform : 'scale(0)', offset: 1}),
  //   ])
  //   )

  // ])

]);


export const toggolecontactUsCardtrigger = trigger('toggolecontactUsCard', [
  state('hide', style({
      visibility: 'hidden',
      opacity: 0,
      top: '-10%'
  })),
  state('show', style({
      visibility: 'visible',
      opacity: 1,
      top: '50%'
  })),

  transition('hide<=>show', [
      animate('.4s')
  ])
])
