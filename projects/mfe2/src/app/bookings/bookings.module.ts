import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';
import { BOOKINGS_ROUTES } from './bookings.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookingsSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BOOKINGS_ROUTES)
  ]
})
export class BookingsModule { }
