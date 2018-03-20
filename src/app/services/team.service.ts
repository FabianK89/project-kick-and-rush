import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Team } from '../models/team';

@Injectable()
export class TeamService {
  private teamUrl = 'api/team';

  constructor(private http: HttpClient) { }

  getTeamById(id: number): Observable<Team> {
    const url = `${this.teamUrl}/${id}`;

    return this.http.get<Team>(url).pipe(
      catchError(this.handleError('getTeam', undefined))
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
