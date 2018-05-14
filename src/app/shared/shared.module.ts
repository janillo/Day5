import { AppMaterialModule } from './app-material/app-material.module';
import { ResourceService } from './resource/resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, SharedRoutingModule, HttpClientModule, AppMaterialModule ],
	declarations: [ CardComponent ],
	providers: [ ResourceService ],
	exports: [ CardComponent ]
})
export class SharedModule {}
