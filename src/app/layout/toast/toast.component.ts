import { Component } from '@angular/core';
import { ToastService, ToastData } from '../../core/services/toast.service';

@Component({
  selector: 'sn-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
