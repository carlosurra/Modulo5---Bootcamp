import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from './core/services/modal.service';
import { NotificationService } from './core/services/notification.service';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social';

  constructor(public loaderService: LoaderService) {}
}
