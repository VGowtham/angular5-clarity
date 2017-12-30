/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from "clarity-angular";

import {AppComponent} from "./app.component";
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

const appRoutes = [
    { path : '' , redirectTo: 'users', pathMatch: 'full' },
    { path : 'users' , component : UsersComponent },
    { path : "todos/user/:userId/:userName" , component : TodosComponent}
  ]

@NgModule({
    declarations: [AppComponent, TodosComponent, UsersComponent],
    imports: [BrowserAnimationsModule, CommonModule, FormsModule, ClarityModule, HttpModule, RouterModule.forRoot(appRoutes,{useHash:true})],
    bootstrap: [AppComponent]
})
export class AppModule {}
