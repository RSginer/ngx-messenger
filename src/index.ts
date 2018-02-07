import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerChatBoxComponent } from './messenger-chat-box.component';
import { MessengerMessageComponent } from './messenger-message.component';
import { DynamicHeightDirective } from './dynamic-height.directive';

export * from './messenger-chat-box.component';
export * from './messenger-message.component';
export * from './message-chat.interface';
export * from './dynamic-height.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessengerChatBoxComponent,
    MessengerMessageComponent,
    DynamicHeightDirective
  ],
  exports: [
    MessengerChatBoxComponent,
    MessengerMessageComponent,
    DynamicHeightDirective
  ]
})
export class MessengerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessengerModule
    };
  }
}
