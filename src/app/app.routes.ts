import { Routes } from '@angular/router';
import { HeaderComponent } from '../Component/header/header.component';
import { MainComponent } from '../Pages/main/main.component';
import { ContactusComponent } from '../Pages/contactus/contactus.component';
import { SlotbookingComponent } from '../Pages/slotbooking/slotbooking.component';
import { StationsComponent } from '../Pages/stations/stations.component';
import { BlogsComponent } from '../Pages/blogs/blogs.component';
import { LoginComponent } from '../Pages/login/login.component';
import { SignupComponent } from '../Pages/signup/signup.component';

export const routes: Routes = [
    {path:"",component:MainComponent},
    {
        path:"contactus",component:ContactusComponent
    },
    {
        path:"slot",component:SlotbookingComponent
    },
    {
        path:"station",component:StationsComponent
    },
    {
        path:"blog",component:BlogsComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"signup",component:SignupComponent
    }

];
