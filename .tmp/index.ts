import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerChatBoxComponent } from './messenger-chat-box.component';
import { MessengerMessageComponent } from './messenger-message.component';
import { ContentResizeDirective } from './content-resize.directive';
export * from './messenger-chat-box.component';
export * from './messenger-message.component';
export * from './message-chat.interface';
export * from './content-resize.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessengerChatBoxComponent,
    MessengerMessageComponent,
    ContentResizeDirective
  ],
  exports: [
    MessengerChatBoxComponent,
    MessengerMessageComponent,
    ContentResizeDirective
  ]
})
export class MessengerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessengerModule
    };
  }
}
