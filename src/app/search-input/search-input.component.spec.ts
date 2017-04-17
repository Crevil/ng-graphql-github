import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [SearchInputComponent],
        imports: [
          BrowserAnimationsModule,
          MdInputModule,
        ],
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

  it('should emit value of input on changes above debounce time', fakeAsync(() => {
    component.query.subscribe((value: string) => {
      expect(value).toBe('test');
    });

    const target = { value: 'test' } as HTMLInputElement;
    const event = { target: target as any } as Event;
    component.inputChanged(event);

    tick(300);
  }));

  it('should emit single value of input on multiple changes below debounce time', fakeAsync(() => {
    component.query.subscribe((value: string) => {
      expect(value).toBe('test2');
    });

    const target = { value: 'test' } as HTMLInputElement;
    const event = { target: target as any } as Event;
    component.inputChanged(event);
    tick(100);
    target.value = 'test2';
    component.inputChanged(event);
    tick(300);
  }));
});
