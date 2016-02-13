import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-hero-list [heroes]="heroes" (clickHero)="onClickHero($event)"></my-hero-list>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
    directives: [HeroListComponent, HeroDetailComponent]
})

export class AppComponent implements OnInit  {
    selectedHero:Hero;
    public title = 'Tour of Heroes';
    heroes:Hero;

    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroService:HeroService) {}

    public getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onClickHero(hero) {
        this.selectedHero = hero;
    }
}