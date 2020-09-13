import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadLibrariesService {

  constructor() { }

  loadScripts(files: string[]) {
    for (let file of files) {
      let script = document.createElement('script');
      script.src = `./../assets/lib/${file}.js`;
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
      console.log(script);
    }
  }
}
