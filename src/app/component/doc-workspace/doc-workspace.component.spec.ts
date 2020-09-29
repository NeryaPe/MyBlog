import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocWorkspaceComponent } from './doc-workspace.component';

describe('DocWorkspaceComponent', () => {
  let component: DocWorkspaceComponent;
  let fixture: ComponentFixture<DocWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
