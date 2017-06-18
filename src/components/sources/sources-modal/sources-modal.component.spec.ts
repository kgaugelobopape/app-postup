import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesModalComponent } from './sources-modal.component';

describe('SourcesModalComponent', () => {
  let component: SourcesModalComponent;
  let fixture: ComponentFixture<SourcesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
