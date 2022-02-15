import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelDerechaComponent } from './panel-derecha/panel-derecha.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    PanelDerechaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    PanelDerechaComponent,
    CardComponent
  ]

})
export class SharedModule { }
