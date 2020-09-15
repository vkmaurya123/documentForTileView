import { Component } from '@angular/core';
import { ApiUrls } from './apiUrl';
import { docTileViewAndDocListNavApis  } from './apiUrlsInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  public apiUrlForDocument : docTileViewAndDocListNavApis = {
    documentsForPage : ApiUrls.getDocumentsForPage
   }

   public viewType : string='1';
  public showTilesCount : number = 10 ;
  public routePath : string = '';

  public styleConfig = { }
}
