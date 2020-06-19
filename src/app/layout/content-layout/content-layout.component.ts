import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  navigation = [
    {link: '/home', title: 'Home'},
    {link: '/foods', title: 'Meals'},
    {link: '/drinks', title: 'Drinks'},
    {link: '/contact', title: 'Contact'}
  ];
  logo = ('../../assets/logo.png');
  theme = 'default-theme';


  constructor() {

  }

  ngOnInit(): void {
    document.body.classList.add(this.theme, 'mat-app-background');
  }

}
