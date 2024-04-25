import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchComponent } from './glitch.component';

describe('GlitchComponent', () => {
  let component: GlitchComponent;
  let fixture: ComponentFixture<GlitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
