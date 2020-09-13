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
      label: 'Projects',
      icon: 'ad_units',
      route: 'projects'
    },
    {
      label: 'Experience',
      icon: 'work',
      route: 'experience'
    },
    {
      label: 'Education',
      icon: 'school',
      route: 'education'
    },
    {
      label: 'About',
      icon: 'mail',
      route: 'about'
    },
  ];

  checked = true;

  constructor( ) { }

  ngOnInit(): void {

  }
}
