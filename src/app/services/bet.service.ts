import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { Score } from '../models/score';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BetService {
  private betsUrl = 'api/bets';

  constructor(private http: HttpClient) { }

  getBetForMatchID(matchID: number): Observable<Score> {
    return this.http.get<Score>(`${this.betsUrl}/?matchID=${matchID}`).pipe(
      tap(_ => console.log(`found bet for match with id "${matchID}"`)),
      catchError(this.handleError<any>('getBetForMatchID', []))
    );
  }

  updateBet(bet: Score): Observable<any> {
    console.log(bet);
    return this.http.put(this.betsUrl, bet, httpOptions).pipe(
      tap(_ => console.log(`updated bet id=${bet.id}`)),
      catchError(this.handleError<any>('updateBet'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to conole instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
