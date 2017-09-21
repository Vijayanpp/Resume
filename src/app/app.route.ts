import { Routes, RouterModule } from '@angular/router';
import { AllresumesComponent } from './components/allresumes/allresumes.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: AllresumesComponent },
    // { path: 'portfolio', component: PortfolioComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);

