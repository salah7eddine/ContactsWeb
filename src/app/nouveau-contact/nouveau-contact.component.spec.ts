import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauContactComponent } from './nouveau-contact.component';

describe('NouveauContactComponent', () => {
  let component: NouveauContactComponent;
  let fixture: ComponentFixture<NouveauContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
