import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversiteComponent } from './adversite.component';

describe('AdversiteComponent', () => {
  let component: AdversiteComponent;
  let fixture: ComponentFixture<AdversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
