import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit
} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { WallService } from 'src/app/core/services/wall.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PublisherComponent } from '../publisher/publisher.component';
import marked from 'marked';

@Component({
  selector: 'sn-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit, AfterViewInit {
  convertToHtml: () => {};

  @ViewChildren(PublisherComponent) publisherComponents;

  constructor(
    public userService: UserService,
    public wallService: WallService
  ) {
    this.convertToHtml = marked;
  }

  ngOnInit() {
    this.wallService.getWall().subscribe();
  }

  ngAfterViewInit() {
    console.log(this.publisherComponents);
  }

  addPost(content) {
    this.wallService.publish(content).subscribe();
  }

  addComment(postId, message) {
    this.wallService
      .addComment(postId, message, this.userService.currentUser)
      .subscribe();
  }
}
