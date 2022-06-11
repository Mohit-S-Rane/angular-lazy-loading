import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
  login(isAdmin = false) {
    return new Observable(observer => {
      const data = {token: 'dasdsad', role: isAdmin ? 'admin' : 'user'};
      observer.next(data);
    });
  }
}
