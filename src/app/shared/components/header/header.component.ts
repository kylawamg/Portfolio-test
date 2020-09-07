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

  constructor(private compTheme: AppComponent ) { }
  ngOnInit(): void {
  }

  public changeTheme(nameClass): void {
    this.checked = !this.checked;
    if (!this.checked){
      this.compTheme.onSetTheme(nameClass);
    } if (this.checked) {
      this.compTheme.onSetTheme('dark-theme');
    }
  }
}
