import { Component, Input } from '@angular/core';
import { MehmannjCountry } from '../classMehmannj';

@Component({
  selector: 'app-mehmannj-country',
  templateUrl: './mehmannj-country.component.html',
  styleUrl: './mehmannj-country.component.css'
})
export class MehmannjCountryComponent {
  @Input() mehmannjData!: MehmannjCountry;
}
