import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LinkComponent } from './link/link.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { BankComponent } from './bank/bank.component';
import { AdminComponent } from './admin/admin.component';
import { ApplyComponent } from './apply/apply.component';
import { EditComponent } from './edit/edit.component';
import { StatusComponent } from './status/status.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ChangestatusComponent } from './changestatus/changestatus.component';
import { AddbankComponent } from './addbank/addbank.component';
import { RemovebankComponent } from './removebank/removebank.component';
import { EditschemeComponent } from './editscheme/editscheme.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { BanklistComponent } from './banklist/banklist.component';
import { SignupComponent } from './signup/signup.component';
import { BankloginComponent } from './banklogin/banklogin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    AboutComponent,
    LinkComponent,
    ContactComponent,
    StudentComponent,
    BankComponent,
    AdminComponent,
    ApplyComponent,
    EditComponent,
    StatusComponent,
    ApplicationsComponent,
    ChangestatusComponent,
    AddbankComponent,
    RemovebankComponent,
    EditschemeComponent,
    InstructionsComponent,
    BanklistComponent,
    SignupComponent,
    BankloginComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component : HomeComponent},
      {path: "signin", component : SignInComponent},
    //   {path: "signin", component : SignInComponent,children:[{path: "banklogin", component :BankloginComponent},
    // ]},
    {path: "banklogin", component : BankloginComponent},

      {path: "signup", component : SignupComponent},
      {path: "about", component : AboutComponent},
      {path: "student", component : StudentComponent},
      {path: "student", component : StudentComponent,children:[{path: "apply", component :ApplyComponent}
    ]},
    {path: "student", component : StudentComponent,children:[{path: "edit", component :EditComponent}]},
    {path: "student", component : StudentComponent,children:[{path: "status", component :StatusComponent},
    ]},

      {path: "bank", component : BankComponent},
      {path: "bank", component : BankComponent,children:[{path: "applications", component :ApplicationsComponent}
    ]},
    
    {path: "bank", component : BankComponent,children:[{path: "changestatus", component :ChangestatusComponent}
    ]},

      {path: "admin", component : AdminComponent},
      {path: "admin", component : AdminComponent,children:[{path: "addbank", component :AddbankComponent}
    ]},
    {path: "admin", component : AdminComponent,children:[{path: "removebank", component :RemovebankComponent}
    ]},
    {path: "admin", component : AdminComponent,children:[{path: "banklist", component :BanklistComponent}
    ]},
    {path: "admin", component : AdminComponent,children:[{path: "editscheme", component :EditschemeComponent}
    ]},
      {path: "link", component : LinkComponent},
      {path: "home", component : HomeComponent},

      {path: "contact", component : ContactComponent},
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
