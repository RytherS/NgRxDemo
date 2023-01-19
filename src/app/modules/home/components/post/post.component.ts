import { Component, Input } from '@angular/core';
import { DataModel } from 'src/app/core/models';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() public post?: DataModel;
}
