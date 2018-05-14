import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, PostsRoutingModule, SharedModule, AppMaterialModule ],
	declarations: [ PostComponent ],
	exports: [ PostComponent ]
})
export class PostsModule {}
