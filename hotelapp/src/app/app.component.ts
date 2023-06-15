import { Component } from '@angular/core';
import { StylingService } from './Services/styling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelapp';
  isBlurred: boolean = false;
  constructor(private stylingService: StylingService) {
    stylingService.BlueSubject.subscribe(status => this.isBlurred = status);
  }

}
