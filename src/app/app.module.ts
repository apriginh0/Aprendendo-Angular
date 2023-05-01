import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button/button.component';
import { Counter } from './components/Counter/counter.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MenuComponent,
    Button,
    Counter,
    EntryDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
