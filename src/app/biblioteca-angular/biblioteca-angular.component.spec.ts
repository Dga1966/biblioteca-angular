import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaAngularComponent } from './biblioteca-angular.component';

describe('BibliotecaAngularComponent', () => {
  let component: BibliotecaAngularComponent;
  let fixture: ComponentFixture<BibliotecaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
