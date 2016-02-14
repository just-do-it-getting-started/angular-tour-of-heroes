import {Injectable} from 'angular2/core';
import {HEROES} from './mock/mock-heroes';
import {Hero} from './../type/hero'

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}