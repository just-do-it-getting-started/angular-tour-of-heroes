///<reference path="app.component"/>
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HeroService} from './../service/hero.service';

bootstrap(AppComponent, [HeroService]);