import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../models/match';
import { Score } from '../../models/score';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: Match;

  bet: Score;
  result: Score;
  points: number;

  constructor() { }

  ngOnInit() {
    this.bet = this.match.bet === undefined ? { goalsHome: 0, goalsGuest: 0} : this.match.bet;
    this.result = this.match.result;
    this.calculatePoints();
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
}
