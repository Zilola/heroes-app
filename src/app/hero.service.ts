import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeader} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[]{
   // return HEROES;
   //}
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.htpp.get<Hero[]>(this.heroesUrl);
  }
  
  getHero(id:number): Observable <Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero =>hero.id === id));
  }
  

  constructor(private messageService: MessageService, private htpp: HttpClient) { }
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }
  private heroesUrl = 'api/heroes'; // Url to the web api
}

