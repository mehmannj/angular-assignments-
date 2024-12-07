import { Component } from '@angular/core';
import { MehmannjPersonal } from './classMehmannj';
import { MehmannjCountry } from './classMehmannj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1mehmannj';
  PERmehmannj = new MehmannjPersonal();
  CTRYmehmannj = new MehmannjCountry();
}
