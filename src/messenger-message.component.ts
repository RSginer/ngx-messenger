import { Component, OnInit, Input } from '@angular/core';
import { MessageChat } from './message-chat.interface';

@Component({
    selector: 'msg-message',
    styleUrls: ['messenger-message.component.css'],
    template: `
    <li [class.left]="position === 'left'" [class.right]="position === 'right'" class="clearfix">
        <span
        [class.float-left]="position === 'left'"
        [class.float-right]="position === 'right'"
        class="chat-img">
            <img [src]="message?.user?.imageUrl" alt="User Avatar" class="img-circle" />
        </span>
        <div class="chat-body clearfix">
            <div class="header">
                <strong
                class="primary-font">{{message?.user?.name}}</strong>
                <small
                [class.float-left]="position === 'right'"
                [class.float-right]="position === 'left'"
                class="text-muted">
                    <span class="fa fa-clock-o"></span>12 mins ago</small>
            </div>
            <p [class.right]="position === 'right'">
            {{message?.text}}
            </p>
        </div>
    </li>`
})
export class MessengerMessageComponent implements OnInit {

    @Input() message: MessageChat;
    @Input() position: 'left' | 'right' = 'right';

    constructor() { }

    ngOnInit() { }
}
