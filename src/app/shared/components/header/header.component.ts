import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
import { OverlayContainer } from '@angular/cdk/overlay';

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

  @HostBinding('class') componentCssClass: any;

  constructor( public overlayContainer: OverlayContainer) { }
  ngOnInit(): void {
  }


  public onSetTheme(nameClass: string) {
    this.overlayContainer.getContainerElement().classList.add(nameClass);
    this.componentCssClass = nameClass;
  }

}
