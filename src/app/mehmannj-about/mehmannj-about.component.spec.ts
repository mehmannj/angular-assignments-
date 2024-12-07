import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehmannjAboutComponent } from './mehmannj-about.component';

describe('MehmannjAboutComponent', () => {
  let component: MehmannjAboutComponent;
  let fixture: ComponentFixture<MehmannjAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MehmannjAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MehmannjAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
