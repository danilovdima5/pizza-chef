import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pizza } from './interfaces';
import { PIZZAS } from './pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor() {}

  private _pizzas$ = new BehaviorSubject<Pizza[]>([]);

  get pizzas$(): Observable<Pizza[]> {
    if (!this._pizzas$.value.length) {
      return this.fetchPizzas$();
    }

    return this._pizzas$.asObservable();
  }

  private fetchPizzas$(): Observable<Pizza[]> {
    return of(PIZZAS).pipe(tap((response) => this._pizzas$.next(response)));
  }
}
