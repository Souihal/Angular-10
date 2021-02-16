import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppareilService } from './service/appareil-service.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilComponent } from './appareil/appareil.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';

import { AuthGuard } from './service/auth-guard.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { ListUserComponent } from './list-user/list-user.component'
import { UserService } from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';


  const appRoutes : Routes =[
    {path : 'appareils',canActivate: [AuthGuard],component :AppareilComponent},
    {path : 'appareils/:id',canActivate: [AuthGuard],component :SingleAppareilComponent},
    {path : 'edit' , canActivate: [AuthGuard],component:EditAppareilComponent},
    {path: 'users', component: ListUserComponent },
    {path : 'new-user' , component :NewUserComponent},
    {path : 'auth',component :AuthComponent},
    {path : '' ,canActivate: [AuthGuard], component :AppareilComponent},
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppareilComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    AppareilViewComponent,
    EditAppareilComponent,
    ListUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppareilService,AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
