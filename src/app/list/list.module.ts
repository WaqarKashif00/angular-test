import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HomeModule } from '../home/home.module';


/**
 * List module for managing user lists.
 */
@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, HomeModule],
  exports: [UsersComponent], // Exporting UsersComponent for reuse
})
export class ListModule {}
