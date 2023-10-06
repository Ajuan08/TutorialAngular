import { Component } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Joke[];
    constructor() {
    this.jokes = [
          new Joke("¿Cuál es el último animal que subió al arca de Noé?", "El del-fin"),
          new Joke("¿Cómo se dice pañuelo en japonés?","Saka-moko"),
          new Joke("¿Cómo se dice pelo sucio en chino?", "Chin cham pu"),
    ];
  }

addJoke(joke : any) 
  {
  this.jokes.unshift(joke);
  }

}
