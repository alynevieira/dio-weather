import { createAction, props } from "@ngrx/store";

export const deleteBookmark = createAction(
  '[Bookmark] Delete Bookmark',
  props<{ id: number }>()
);