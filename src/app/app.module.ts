import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryDataService } from './services/in-memory-data.service';
import { MatchService } from './services/match.service';
import { TeamService } from './services/team.service';

import { AppComponent } from './app.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [MatchService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
