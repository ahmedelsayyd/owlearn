import { Coureses } from "../enums/courses";
import { Course } from "./course.modal";

export const allCourses : Course[]=[
  {
    name: 'Product Management Basic - course',
    date:'1 - 28 July  2022',
    description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
    type: Coureses.productManagement,
    price: '$ 380',
    src:'assets/images/courses/image1.png',
    priceAfterDiscound:'$ 500',
    registerd: 120
  },
  {
    name: 'Front End Developer - course',
    date:'1 - 28 July  2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    type: Coureses.web,
    price: '$ 380',
    priceAfterDiscound:'$ 500',
    src:'assets/images/courses/image2.png',
    registerd: 120
  },
  {
    name: 'Back End Developer Basic - course',
    date:'1 - 28 July  2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    type: Coureses.web,
    price: '$ 380',
    priceAfterDiscound:'$ 500',
    src:'assets/images/courses/image3.png',
    registerd: 120
  },
  {
    name: 'UX Design - Branstroming',
    date:'1 - 28 July  2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    type: Coureses.uxD,
    price: '$ 380',
    priceAfterDiscound:'$ 500',
    src:'assets/images/courses/image4.png',
    registerd: 120
  },
  {
    name: 'UI Design - Sketch',
    date:'1 - 28 July  2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    type: Coureses.uxD,
    price: '$ 380',
    priceAfterDiscound:'$ 500',
    src:'assets/images/courses/image5.png',
    registerd: 120
  },
  {
    name: 'Graphic Design - Fundamental Design',
    date:'1 - 28 July  2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    type: Coureses.uxD,
    price: '$ 380',
    priceAfterDiscound:'$ 500',
    src:'assets/images/courses/image6.png',

    registerd: 120
  },
]
