import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/models/game';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard = '';
  game: Game;

constructor(public dialog: MatDialog) {}

  ngOnInit() {
this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    
  }

  takeCard() {
    if(!this.pickCardAnimation && this.game.players.length >= 2) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.game?.playedCards.push(this.currentCard);
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        
        this.pickCardAnimation = false;
      }, 1500);
    } else {
      this.openDialog();
    }
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogAddPlayerComponent);
  
      dialogRef.afterClosed().subscribe((name: string) => {
        if(name) {
          this.game.players.push(name);
        }

      });
    }
}
