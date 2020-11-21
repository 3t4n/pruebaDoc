import { Component } from '@angular/core';
import { DocumentScanner,DocumentScannerOptions  } from '@ionic-native/document-scanner/ngx/';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private documentScanner: DocumentScanner) {}
  test(){
    let opts: DocumentScannerOptions = {};
this.documentScanner.scanDoc(opts)
  .then((res: string) => console.log(res))
  .catch((error: any) => console.error(error));
  }
}
