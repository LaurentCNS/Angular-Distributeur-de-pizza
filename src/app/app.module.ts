import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { StartComponent } from './start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsComponent } from './details/details.component';
import { CreatorComponent } from './creator/creator.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { OrderComponent } from './order/order.component';
import { ProcessComponent } from './process/process.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    AdminComponent,
    StartComponent,
    DetailsComponent,
    CreatorComponent,
    ListComponent,
    EditComponent,
    ViewComponent,
    PurchaseComponent,
    OrderComponent,
    ProcessComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({timeOut: 5000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressAnimation: 'increasing',         
    }),
    FontAwesomeModule,
    NgbProgressbarModule,
    MatProgressBarModule,
    
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
