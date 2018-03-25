import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Match } from '../../models/match';
import { MatchService } from '../../services/match.service';
import { MatchDay } from '../../models/matchday';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matchdayForm: FormGroup;
  selectedMatchday: MatchDay;

  matches: Match[] = [];
  matchdays: MatchDay[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchdayForm = new FormGroup({
      matchdaySelect: new FormControl()
    });
    this.onChanges();

    this.getMatchDays();
  }

  getMatchDays(): void {
    this.matchService.getMatchDays().subscribe(matchdays => this.matchdays = matchdays);
  }

  getMatches(matchdayID: number): void {
    this.matchService.getMatchesByMatchdayID(matchdayID).subscribe(matches => this.matches = matches);
  }

  onChanges(): void {
    this.matchdayForm.valueChanges.subscribe(val => this.onSubmit(this.matchdayForm));
  }

  onSubmit(form: FormGroup): void {
    if (this.selectedMatchday !== undefined) {
      console.log(this.selectedMatchday);
      this.getMatches(this.selectedMatchday.id);
    }
  }
}
