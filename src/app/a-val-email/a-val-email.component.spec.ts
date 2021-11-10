import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AValEmailComponent } from './a-val-email.component';

describe('AValEmailComponent', () => {
  let component: AValEmailComponent;
  let fixture: ComponentFixture<AValEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AValEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AValEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
