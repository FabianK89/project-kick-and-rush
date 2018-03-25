import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../models/match';
import { Score } from '../../models/score';
import { Team } from '../../models/team';
import { FormGroup, FormControl } from '@angular/forms';
import { BetService } from '../../services/bet.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: Match;

  betForm: FormGroup;
  homeTeam: Team;
  guestTeam: Team;
  bet: Score;
  result: Score;
  points: number;

  constructor(private betService: BetService) { }

  ngOnInit() {
    this.homeTeam = this.match.teamHome;
    this.guestTeam = this.match.teamGuest;
    this.result = this.match.result;

    this.getBet();

    this.betForm = new FormGroup({
      betGoalsHome: new FormControl(),
      betGoalsGuest: new FormControl()
    });

    this.onChanges();
  }

  calculatePoints(): void {
    if (!this.bet || !this.result) {
      this.points = 0;
      return;
    }

    const goalsHomeBet = this.bet.goalsHome;
    const goalsHomeResult = this.result.goalsHome;
    const goalsGuestBet = this.bet.goalsGuest;
    const goalsGuestResult = this.result.goalsGuest;

    if (goalsHomeResult === goalsHomeBet && goalsGuestResult === goalsGuestBet) {
      this.points = 3;
    } else if (goalsHomeResult - goalsGuestResult === goalsHomeBet - goalsGuestBet) {
      this.points = 2;
    } else if (goalsHomeResult > goalsGuestResult && goalsHomeBet > goalsGuestBet ||
               goalsHomeResult < goalsGuestResult && goalsHomeBet < goalsGuestBet) {
      this.points = 1;
    } else {
      this.points = 0;
    }
  }

  getBet(): void {
    this.betService.getBetForMatchID(this.match.id).subscribe(bet => {
      this.bet = bet[0];
      this.betForm.patchValue({
        betGoalsHome: this.bet.goalsHome,
        betGoalsGuest: this.bet.goalsGuest
      });

      this.calculatePoints();
    });
  }

  onChanges(): void {
    this.betForm.valueChanges.subscribe(val => this.onSubmit(this.betForm));
  }

  onSubmit(form: FormGroup): void {
    const goalsHome = form.value.betGoalsHome;
    const goalsGuest = form.value.betGoalsGuest;

    if (goalsHome > -1 && goalsGuest > -1) {
      this.bet.goalsHome = goalsHome;
      this.bet.goalsGuest = goalsGuest;

      this.betService.updateBet(this.bet).subscribe(() => console.log('updated'));
    }
  }
}
