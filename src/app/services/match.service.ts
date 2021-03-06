import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { Match } from '../models/match';
import { MatchDay } from '../models/matchday';


@Injectable()
export class MatchService {
  private matchesUrl = 'api/matches';
  private matchDaysUrl = 'api/matchdays';

  constructor(private http: HttpClient) { }

  getMatchDays(): Observable<MatchDay[]> {
    return this.http.get<MatchDay[]>(this.matchDaysUrl).pipe(
      catchError(this.handleError('getMatchDays', []))
    );
  }

  getMatchesByMatchdayID(id: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}/?matchdayID=${id}`).pipe(
      tap(_ => console.log(`found matches for matchday with id "${id}"`)),
      catchError(this.handleError('getMatches', []))
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
