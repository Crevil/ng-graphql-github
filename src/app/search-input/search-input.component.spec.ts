import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [SearchInputComponent],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value of input on changes', (done) => {
    component.query.subscribe((value: string) => {
      expect(value).toBe('test');
      done();
    });

    const target = { value: 'test' } as HTMLInputElement;
    const event = { target: target as any } as Event;
    component.inputChanged(event);
  });
});
