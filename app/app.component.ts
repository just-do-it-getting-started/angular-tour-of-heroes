import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-hero-list></my-hero-list>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
    directives: [HeroListComponent, HeroDetailComponent]
})

export class AppComponent {
    public title = 'Tour of Heroes';
}