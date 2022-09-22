import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeleteComponent } from './detail-delete.component';

describe('DetailDeleteComponent', () => {
  let component: DetailDeleteComponent;
  let fixture: ComponentFixture<DetailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
