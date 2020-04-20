import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router' // For page link
import { WebComponent } from './web/web.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartModule } from 'angular-highcharts';
import { FooterComponent } from './footer/footer.component';

const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WebComponent,
    AdminComponent,
    ScheduleComponent,
    HomeComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartModule,
    GanttModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
