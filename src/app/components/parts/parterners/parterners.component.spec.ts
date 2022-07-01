import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParternersComponent } from './parterners.component';

describe('ParternersComponent', () => {
  let component: ParternersComponent;
  let fixture: ComponentFixture<ParternersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParternersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParternersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
