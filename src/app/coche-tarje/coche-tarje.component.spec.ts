import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheTarjeComponent } from './coche-tarje.component';

describe('CocheTarjeComponent', () => {
  let component: CocheTarjeComponent;
  let fixture: ComponentFixture<CocheTarjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheTarjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheTarjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
