import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerChatBoxComponent } from './messenger-chat-box.component';

export * from './messenger-chat-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessengerChatBoxComponent,
  ],
  exports: [
    MessengerChatBoxComponent
  ]
})
export class MessengerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessengerModule
    };
  }
}
