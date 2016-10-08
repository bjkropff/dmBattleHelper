import {Component} from 'angular2/core';

interface Hero {
  init: number;
  name: string;
  hp: number;
  ac: number;
}
@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>Initative Tracker</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes "
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.init}}</span> <b>{{hero.name}}</b> HP: {{hero.hp}} AC: {{hero.ac}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div>
        <label>Init: </label>
        <input [(ngModel)]="selectedHero.init" placeholder="init"/>
      </div>
      <div>
        <label>HP: </label>
        <input [(ngModel)]="selectedHero.hp" placeholder="hitpoints"/>
      </div>
      <div><label>AC: </label>{{selectedHero.ac}}</div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Friends and Foes ';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
var HEROES: Hero[] = [
  { "init": 11, "name": "Tonka", "hp": "5", "ac": "12" },
  { "init": 12, "name": "Billy", "hp": "5", "ac": "2" },
  { "init": 31, "name": "Jordan", "hp": "34", "ac": "1" },
  { "init": 19, "name": "Will", "hp": "12", "ac": "15" },
  { "init": 15, "name": "Sildar", "hp": "50", "ac": "22" },
  { "init": 18, "name": "Karrik", "hp": "25", "ac": "12" },
  { "init": 11, "name": "LL", "hp": "15", "ac": "12" },

];
