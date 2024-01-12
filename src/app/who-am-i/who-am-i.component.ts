import { ParseTreeResult } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent {
  @Input() id: number = 0
  @Input() firstName: String = 'Thomas'
  @Input() lastname: String = 'Chevalier'


 
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>()

  isDisabled: Boolean = true

  constructor () {
    setTimeout (()  => {
      this.isDisabled = false
    }, 3000)
  }

  onClickDeleteUser () {
    this.deleteUser.emit(this.id)
  }
}
