import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBookmarkPage } from './pages/search-bookmark/container/search-bookmark/search-bookmark.page';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks/bookmarks.page';
import { HomePage } from './pages/home/container/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'bookmarks', component: BookmarksPage },
  { path: 'search-bookmark', component: SearchBookmarkPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
