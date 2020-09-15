import { Component, OnInit} from '@angular/core';
import { MenuItem } from '../../../models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'About',
      icon: 'assignment_ind',
      route: 'about'
    },
    {
      label: 'Works',
      icon: 'ad_units',
      route: 'projects'
    },
    {
      label: 'Blog',
      icon: 'article',
      route: 'blog'
    },
  ];

  checked = true;

  constructor( ) { }

  ngOnInit(): void {

  }
}
