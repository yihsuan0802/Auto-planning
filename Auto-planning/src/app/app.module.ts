import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RequirementComponent } from './requirement/requirement.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent } ,
  { path: 'requirement', component: RequirementComponent}
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
    FooterComponent,
    RequirementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartModule,
    GanttModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AlertModule.forRoot(),
    NgbModule,
    DataTablesModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
