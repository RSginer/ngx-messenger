import { Component, Input } from '@angular/core';
import { MessageChat } from './message-chat.interface';

@Component({
  selector: 'msg-chat-box',
  styles: [".chat { list-style: none; margin: 0; padding: 0; } .chat li { margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px dotted #B3A9A9; } .chat li.left .chat-body { margin-left: 60px; } .chat li.right .chat-body { margin-right: 60px; } .chat li .chat-body p { margin: 0; color: #777777; } .card .slidedown .glyphicon, .chat .glyphicon { margin-right: 5px; } .card-body { overflow-y: scroll; height: 250px; } .card-heading { padding: 25px; background: #f7f7f7; border-bottom: 1px solid #dfdfdf; text-align: center; } ::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); background-color: #F5F5F5; } ::-webkit-scrollbar { width: 12px; background-color: #F5F5F5; } ::-webkit-scrollbar-thumb { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color: #555; }"],
  template: `
  <div class="card">
  <div class="card-heading" id="accordion">
      <span class="fa fa-commenting-o"></span> Chat
  </div>

  <div class="card-body" contentResize>
      <ul class="chat" *ngFor="let message of conversation">
         <msg-message
         [position]="currentUserId !== message?.user?.id ? 'left' : 'right'"
         [message]="message"
         ></msg-message>
      </ul>

  </div>
  <div class="card-footer">
      <div class="input-group">
          <input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here..." />
          <span class="input-group-btn">
              <button class="btn btn-sm" id="btn-chat">
                  Send</button>
          </span>
      </div>
  </div>
  `
})
export class MessengerChatBoxComponent {
  @Input() currentUserId = 1;

  @Input() conversation: MessageChat[];

  constructor() {
  }

}
