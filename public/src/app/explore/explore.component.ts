import { Component, HostBinding ,OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { HEROES } from './mock-heroes';
import { CONTINENT } from './mock-continent'
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.continent, .hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
  
})
export class ExploreComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  selectedValue: string;
  _heroes = [];
  _continents = [];
  _country_info: any = {}
  heroTotal = -1;
  continentTotal = -1;
  display = false


  get heroes() {
    return this._heroes;
  }

  get continents(){
    return this._continents;
  }

  constructor(private _httpService : HttpService ,private _http: HttpClient) { }

  ngOnInit() {
    this._heroes = HEROES;
    this._continents = CONTINENT;
  }
  // continentCriteria(criteria: string) {
  //   criteria = criteria ? criteria.trim() : '';
  //   console.log()
  //   this._continents = CONTINENT.filter(continent => continent.name.toLowerCase().includes(criteria.toLowerCase()));
  //   const newContinentTotal = this.continents.length;

  //   if (this.continentTotal !== newContinentTotal) {
  //     this.continentTotal = newContinentTotal;
  //   } else if (!criteria) {
  //     this.continentTotal = -1;
  //   }
  // }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroTotal !== newTotal) {
      this.heroTotal = newTotal;
    } else if (!criteria) {
      this.heroTotal = -1;
    }
  }
  
  searchCountry(country: string){
    this.display = true;
    const observable = this._httpService.getCountryData(country);
    observable.subscribe(countryData => {
      this._country_info = countryData[0];
      console.log('country info : ', this._country_info);
    })
  }
}
