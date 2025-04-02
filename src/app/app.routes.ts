import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

// Define the application routes
export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to home page by default
    { path: '', component: HomeComponent },  // Home page route
    { path: 'home', component: HomeComponent },  // Home page route
    { path: 'login', component: LoginComponent },  // Home page route
    { path: 'signup', component: SignupComponent },  // Home page route    
    

];
