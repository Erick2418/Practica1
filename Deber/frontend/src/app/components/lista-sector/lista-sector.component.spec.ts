import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSectorComponent } from './lista-sector.component';

describe('ListaSectorComponent', () => {
  let component: ListaSectorComponent;
  let fixture: ComponentFixture<ListaSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
