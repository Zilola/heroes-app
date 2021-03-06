import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import {MessageService} from  '../message.service';
import { HEROES } from '../mock-heroes';
//import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 //heroes = HEROES;
 heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
    
  };
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
 
  ngOnInit() {
    this.getHeroes();
  }
onSelect(hero: Hero): void {
 this.selectedHero = hero;
this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
}


}