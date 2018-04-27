import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Phrase } from '../shared/phrase.model'
import { PHRASES } from './phrases-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public phrases: Phrase[] = PHRASES
  public instruction: string = "Traduza a frase:"
  public answer: string = ""

  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0

  public attempts: number = 3

  @Output() public finishGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updateRound()
  }



  ngOnInit() {
  }

  ngOnDestroy() {
    
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
    //console.log(this.answer)
  }

  public verifyAnswer(): void {

    if (this.roundPhrase.phrasePtBr == this.answer) {

      //trade round question
      this.round++

      this.progress = this.progress + (100 / this.phrases.length)

      if (this.round === 4) {
        this.finishGame.emit('Win')
      }

      this.updateRound()

    } else {
      this.attempts--

      if (this.attempts <= -1) {
        this.finishGame.emit('Lose')
      }
    }
  }

  public updateRound(): void {
    //defines the round phrase
    this.roundPhrase = this.phrases[this.round]

    //clean answer
    this.answer = ""
  }

}
