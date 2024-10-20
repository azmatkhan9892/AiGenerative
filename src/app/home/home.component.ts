import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {  
  ngOnInit() {
    
  }

  cards = [
    {
      image: '../../../public/slider/SS/Bardeen.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Chibi.png',
      title: 'PICTORY',
      description: 'InVideo simplifies video creation with ready-made templates that you c',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Gocharlie.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Julius.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Momentum.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Nekton.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Platoria.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/tubebuddy.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Vocal.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },
    {
      image: '../../../public/slider/SS/Zupyak.png',
      title: 'PICTORY',
      description: 'Our online photo editor offers everything you need to enhance and edit',
      type: 'FREEMIUM PAID',
      stars: [true, true, true, true, false]
    },

  ];

  
}