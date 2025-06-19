import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // @Output() contactEvent = new EventEmitter();
  // emitEvent() {
  //   return this.contactEvent.emit("Hi, I'm contact.");
  // }
  // data: string = '';
  // Func() {
  //   return alert(this.data);
  // }
}
