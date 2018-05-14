import { ResourceService } from './../../shared/resource/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.scss' ]
})
export class CommentComponent implements OnInit {
	URL = 'https://jsonplaceholder.typicode.com/comments';

	comments$;

	constructor(private resourceService: ResourceService) {
		this.comments$ = this.resourceService.getResource<Comment[]>(this.URL, 'body');
	}

	ngOnInit() {}
}
