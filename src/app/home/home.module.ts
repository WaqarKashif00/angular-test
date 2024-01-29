// home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Home module for managing user-related components.
 */
@NgModule({
    declarations: [
        HomeContainerComponent,
        AddUserComponent,
        ListUserComponent,
    ],
    imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule],
    exports: [HomeContainerComponent,ListUserComponent], // Exporting ListUserComponent for reuse and HomeContainerComponent to make parent
})
export class HomeModule { }
