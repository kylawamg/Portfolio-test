import { Component, OnInit} from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'ad_units'
    },
    {
      label: 'Experience',
      icon: 'work'
    },
    {
      label: 'Education',
      icon: 'school'
    },
    {
      label: 'Contact',
      icon: 'mail'
    },
  ];

  checked = true;

  constructor(private compTheme: AppComponent ) { }
  ngOnInit(): void {
  }

  public changeTheme(nameClass): void {
    !this.checked
    this.compTheme.onSetTheme(nameClass);


  }

}
