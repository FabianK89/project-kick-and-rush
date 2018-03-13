import { Component, OnInit } from '@angular/core';

import { Match } from '../../models/match';
import { MatchService } from '../../services/match.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches().subscribe(matches => this.matches = matches);
  }
}
