import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookmarkPage } from './search-bookmark.page';

describe('SearchBookmarkPage', () => {
  let component: SearchBookmarkPage;
  let fixture: ComponentFixture<SearchBookmarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBookmarkPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookmarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});