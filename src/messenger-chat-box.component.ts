import {
    Component,
    Input,
    OnInit,
    EventEmitter,
    ViewChild,
    Output,
    ElementRef } from '@angular/core';
import { MessageChat } from './message-chat.interface';


@Component({
  selector: 'msg-chat-box',
  styleUrls: [`messenger-chat-box.component.css`],
  template: `
  <div class="card">
  <div class="card-heading" id="accordion">
      <span class="fa fa-commenting-o"></span> Chat
  </div>

  <div class="card-body" #scrollMe [scrollTop]="scrollHeight" contentResize>
      <ul class="chat" *ngFor="let message of conversation">
         <msg-message
         [position]="currentUserId !== message?.user?.id ? 'left' : 'right'"
         [message]="message"
         ></msg-message>
      </ul>

  </div>
  <div class="card-footer">
      <div class="input-group">
          <input #messageInput id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here..." />
          <span class="input-group-btn">
              <button (click)="emitMessage(messageInput.value)" class="btn btn-sm" id="btn-chat">
                  Send</button>
          </span>
      </div>
  </div>
  `
})
export class MessengerChatBoxComponent implements OnInit {
  @ViewChild('scrollMe') container: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;

  @Input() currentUserId = 1;
  @Input() conversation: MessageChat[];

  @Output() onSend = new EventEmitter();

  scrollHeight;

  constructor() {
  }

  emitMessage(text) {
    this.onSend.next(text);
    this.messageInput.nativeElement.value = '';
    this.scrollHeight = this.container.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.scrollHeight = this.container.nativeElement.scrollHeight;
  }

}
