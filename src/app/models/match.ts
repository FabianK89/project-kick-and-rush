import { Team } from './team';
import { Score } from './score';


export class Match {
  id: number;
  matchdayID: number;
  teamHome: Team;
  teamGuest: Team;
  kickoff: string;
  result?: Score;
  bet: Score;
}
