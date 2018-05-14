import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsModule } from './comments/comments.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PostsModule,
		CommentsModule,
		SharedModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
