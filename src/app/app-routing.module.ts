import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatorComponent } from './creator/creator.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { ProcessComponent } from './process/process.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StartComponent } from './start/start.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'main', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'list', component: ListComponent },
  { path: 'creator', component: CreatorComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'purchase/:id', component: PurchaseComponent },
  { path: 'order', component: OrderComponent },
  { path: 'process', component: ProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
