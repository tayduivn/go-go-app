import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TimelinePage} from './timeline';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
  ],
  exports: [
    TimelinePage
  ]
})
export class TimelinePageModule {}
