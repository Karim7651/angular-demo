import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReactive } from './contact-reactive';

describe('ContactReactive', () => {
  let component: ContactReactive;
  let fixture: ComponentFixture<ContactReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
