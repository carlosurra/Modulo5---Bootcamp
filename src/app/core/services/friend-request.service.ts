import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FriendRequest } from '../core.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestsService {
  friendRequests: FriendRequest[] = [];

  constructor(private http: HttpClient) {}

  getFriendRequests() {
    return this.http.get(`${environment.apiBaseUrl}/user/friendrequests`).pipe(
      tap((friendsrequests: FriendRequest[]) => {
        this.friendRequests = friendsrequests.filter(
          friendRequest => !friendRequest.request.confirmed
        );
      })
    );
  }

  acceptFriendRequest(uuid: string) {
    return this.http
      .post(`${environment.apiBaseUrl}/user/friendrequests/accept`, {
        uuid
      })
      .pipe(
        tap(() => {
          this.friendRequests = this.friendRequests.filter(
            friendRequest => friendRequest.uuid !== uuid
          );
        })
      );
  }
}
