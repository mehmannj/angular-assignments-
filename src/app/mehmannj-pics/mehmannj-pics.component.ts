import { Component, Input } from '@angular/core';
import { MehmannjPersonal, MehmannjCountry } from '../classMehmannj';

@Component({
  selector: 'app-mehmannj-pics',
  templateUrl: './mehmannj-pics.component.html',
  styleUrl: './mehmannj-pics.component.css'
})
export class MehmannjPicsComponent {
  @Input() mehmannjMe!: MehmannjPersonal;
  @Input() mehmannjData!: MehmannjCountry;
}
