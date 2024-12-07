import { Component, Input } from '@angular/core';
import { MehmannjPersonal } from '../classMehmannj';

@Component({
  selector: 'app-mehmannj-about',
  templateUrl: './mehmannj-about.component.html',
  styleUrl: './mehmannj-about.component.css'
})
export class MehmannjAboutComponent {
  @Input() mehmannjMe!: MehmannjPersonal;
}
