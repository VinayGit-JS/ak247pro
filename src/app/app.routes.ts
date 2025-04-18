import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WingoComponent } from './pages/wingo/wingo.component';
import { WingoSmallComponent } from './components/wingo-small/wingo-small.component';
import { WingoBigComponent } from './components/wingo-big/wingo-big.component';

// Define the application routes
export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect to home page by default
    { path: '', component: HomeComponent },  // Home page route
    { path: 'home', component: HomeComponent },  // Home page route
    { path: 'login', component: LoginComponent },  // Home page route
    { path: 'signup', component: SignupComponent },  // Home page route    
    { path: 'dashboard', component: DashboardComponent },  // Home page route    
    { path: 'report', component: ReportsComponent },  // Home page route  \  
    { path: 'profile', component: ProfileComponent },  // Home page route  \  
    { path: 'wingo', component: WingoComponent },  // Home page route  \  
    { path: 'wingo-big', component: WingoBigComponent },  // Home page route  \  
    { path: 'wingo-small', component: WingoSmallComponent },  // Home page route  \  


];
