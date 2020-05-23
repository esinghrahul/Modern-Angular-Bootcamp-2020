import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const modifiedRequest = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedRequest)
        // .pipe(
        //     tap((value) => {
        //         if(value.type === HttpEventType.Sent){
        //             console.log('Request was sent to the server.')
        //         }if(value.type === HttpEventType.Response){
        //             console.log('Got a response from the API', value);
        //         }
        //     })
        // );
    }
}
