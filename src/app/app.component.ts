import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DownloadLibrariesService } from './services/downloadLibraries.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer,
              private loadScripts: DownloadLibrariesService)
  {
    loadScripts.loadScripts(["particles.min"]);
    loadScripts.loadScripts(["app"]);
  }

  ngOnInit(): void {

  }

  public onSetTheme(nameClass: string) {
    this.overlayContainer.getContainerElement().classList.add(nameClass);
    this.componentCssClass = nameClass;
  }


}
