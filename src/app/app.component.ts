import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngOnChanges';
  data = 'Original Data';

  updateData():void {
    this.data= 'Updated Data';
  }
}

