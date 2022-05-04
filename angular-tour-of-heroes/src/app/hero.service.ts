import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero';
import { HEROES } from './models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
