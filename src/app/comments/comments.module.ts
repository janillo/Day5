import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, CommentsRoutingModule, AppMaterialModule, SharedModule ],
	declarations: [ CommentComponent ],
	exports: [ CommentComponent ]
})
export class CommentsModule {}
