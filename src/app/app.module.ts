import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'environments/environment';

import { Routing } from './app.route';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllresumesComponent } from './components/allresumes/allresumes.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { appServices } from './app.include';
import { SocialmedialoginComponent } from './components/socialmedialogin/socialmedialogin.component';
import { CandidatedashboardComponent } from './components/candidatedashboard/candidatedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    AllresumesComponent,
    PortfolioComponent,
    SocialmedialoginComponent,
    CandidatedashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'resume-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Routing
  ],
  providers: [...appServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
