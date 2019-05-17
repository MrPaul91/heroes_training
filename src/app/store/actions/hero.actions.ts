import { Action } from '@ngrx/store';
import { Hero } from '../../model/hero.model';

//Three Actions. LOAD_HEROES, LOAD_HEROES_SUCCESS, LOAD_HEROES_FAIL
export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Success';
export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Fail';


export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {

  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public heroes: Hero[]) {  }

}

export class LoadHeroesFail implements Action {

  readonly type = LOAD_HEROES_FAIL;
  constructor(public payload: any ) {  }

}

export type heroActions = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;
