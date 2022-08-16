import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHeaderComponent } from '../../components/reusable/user-header/user-header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserHeaderComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [UserHeaderComponent],
})
export class SharedModuleModule {}
