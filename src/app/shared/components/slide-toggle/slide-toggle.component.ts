import { Component, OnInit, HostBinding } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  checked = true;


  constructor(private compTheme: AppComponent) { }

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
