import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const authToken = window.localStorage.getItem('auth_token')
        const authReq = req.clone({
            headers: req.headers.set('X-Access-Token', authToken)
          });
      
          // send cloned request with header to the next handler.
          return next.handle(authReq);
  }
}