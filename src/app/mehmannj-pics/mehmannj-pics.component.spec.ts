import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehmannjPicsComponent } from './mehmannj-pics.component';

describe('MehmannjPicsComponent', () => {
  let component: MehmannjPicsComponent;
  let fixture: ComponentFixture<MehmannjPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MehmannjPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MehmannjPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
