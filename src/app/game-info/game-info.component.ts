import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges{
  cardAction = [
    { title: 'Waterfall', description: 'Whoever draws the ace starts the waterfall. They start drinking, then the next person in the circle starts drinking, and so on. You can only stop drinking when the person before you stops. So once the card drawer stops, the next person can stop, and so on.' },
    { title: 'You', description: 'Choose who you want to take a drink' },
    { title: 'Me', description: 'You yourself take a drink' },
    { title: 'Floor', description: 'Last person to touch the floor drinks' },
    { title: 'Guys', description: 'All men drink' },
    { title: 'Chicks', description: 'All women drink.' },
    { title: 'Heaven', description: 'Last one to put their hands in the air drinks' },
    { title: 'Mate', description: 'Choose a mate. Whenever you drink, they drink, and vice versa. If your mate already has a mate, you are now one long mate chain.' },
    { title: 'Rhyme', description: 'The card drawer says a word, and you go around the circle coming up with words that rhyme with that word. If someone gets stuck, they drink, and the turn is over. ' },
    { title: 'Categories', description: 'The card drawer comes up with a category, and you go around the circle coming up with items in that category. (For example, if category is types of dog, people might say “poodle” or “rottweiler.”) If someone gets stuck, they drink, and the turn is over. ' },
    { title: 'Never have i ever', description: 'The card drawer starts a game of never have I ever. Start with 3 or 5 fingers up depending on if you have a smaller or larger group. The turn ends when someone has to put their last finger down, and that person drinks.' },
    { title: 'Question Master', description: 'If you draw a queen, you are the question master. The question master can ask a question at any point, and everyone has to avoid answering it. If someone forgets the rule and answers the question, they have to drink. The question master can use this on people as many times as they want. Typically, to avoid losing, people will respond to the question master’s question with another question, Jeopardy style. (“Hey, what are you drinking?” “Hmm is it a holiday Shiner?”) Once someone draws the next queen, they take over as question master.' },
    { title: 'Rule Maker', description: 'Whoever draws a king can make a rule that everyone has to follow. Examples include: not using anyone’s name, not saying sentences longer than 5 words, speaking in a weird accent, etc. If someone forgets to follow the rule, they drink. You can either end the rule when someone draws the next king, or let them all compound. ' },
  ];

  title = '';
  description = '';
@Input() card: string;
  constructor() {}

  ngOnInit() {
  }
  
  ngOnChanges() {
    if(this.card) {
      setTimeout(() => {
        let cardNumber = +this.card.split('-')[1];
        this.title = this.cardAction[cardNumber - 1].title;
        this.description = this.cardAction[cardNumber - 1].description;
      }, 1000);

    }
  }

}
