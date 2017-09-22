import { Routes, RouterModule } from '@angular/router';
import { AllresumesComponent } from './components/allresumes/allresumes.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SocialmedialoginComponent } from './components/socialmedialogin/socialmedialogin.component';
export const routes: Routes = [
    { path: '', component: AllresumesComponent },
    { path: 'login', component: SocialmedialoginComponent },
    // { path: 'portfolio', component: PortfolioComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

