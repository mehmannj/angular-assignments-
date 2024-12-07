import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehmannjCountryComponent } from './mehmannj-country.component';

describe('MehmannjCountryComponent', () => {
  let component: MehmannjCountryComponent;
  let fixture: ComponentFixture<MehmannjCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MehmannjCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MehmannjCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
