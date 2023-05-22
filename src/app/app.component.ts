import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_app';

  captureData: any;

  onNavigate(receivedData: string) {
    this.captureData = receivedData;
  }
}
