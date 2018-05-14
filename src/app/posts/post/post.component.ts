import { ResourceService } from './../../shared/resource/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {
	URL = 'https://jsonplaceholder.typicode.com/posts';

	posts$;

	constructor(private resourceService: ResourceService) {
		this.posts$ = this.resourceService.getResource<Post[]>(this.URL, 'title');
	}

	ngOnInit() {}
}
