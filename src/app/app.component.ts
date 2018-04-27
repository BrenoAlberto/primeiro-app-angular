import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onGoingGame: boolean = true
  public finishType: string

  public finishGame(type: string):void {
    this.onGoingGame = false
    this.finishType = type
  }

  public restartGame(): void {
    this.onGoingGame = true
    this.finishType = undefined
  }
}
