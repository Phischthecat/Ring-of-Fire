import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  animation = false;

  constructor(private router: Router){}

  ngOnInit():void {
    this.startAnimation();
  }

  startAnimation() {
    setTimeout(() => {      
      this.animation = true;
    },3000);
  }

  newGame() {
    //start game
    this.router.navigateByUrl('/game');
  }
}
