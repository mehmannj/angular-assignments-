import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMehmannjComponent } from './header-mehmannj.component';

describe('HeaderMehmannjComponent', () => {
  let component: HeaderMehmannjComponent;
  let fixture: ComponentFixture<HeaderMehmannjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMehmannjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMehmannjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
