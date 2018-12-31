import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loggingService:LoggingService){}
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Intercepted',req);
        // const copiedReq = req.clone({headers:req.headers.set('','')});
    //const headers = new HttpHeaders({'Authorization' : 'Bearer 3YpI5X7gd5EiGlsk-DhB55lfBz7ZrVhqWSf_dlT11303BmrlFs70QijSi4I-szq3aghIBTBcGgv2alxLIx3Wi06Fzie6dHYaeMBXhJyKZ_GIEVnJco4JI3BCClQR5-TtFa2jWZikvhHICn8uaJ20pJzTq-oW2FLPrjQrCtHyT8mNgs0fDL6g1RgsKHd_wsObdiuhca_tYD67kuAkXICmKNrgYMxfmEsxrPgsj5isBSqeh3-6EqTL8e-tbMK7g23BNBv5EUbNGGjjoQxJEiwe6PpcbWYbNP1zgt6Hogxp0jjcwYz6ufb3M1xCh6V9FkwMzt9zvjDqdubnzEjFlCIsNNOrGwAt2DAZcxUBHr5AdQXu1PUZ1Nx-9bG1O2NfzjVZ_yKDGkXTnK1Exx-0pKhFlxUREVe99ZjQC786Ax7zr9ymgp2VbAUeWEsaziKSgQ2EHSO9Oiyddcjih82Ln87n8RG6S3ilEBULXuag6xxKR5PnLSS2clHnvvteC5ER9WjaveOzOHtbF69cp1NEHaXQyDbXhDwM8ss8lX7rpyorfNlRiF4eTccKW3WxwDx4Dl5zrn32bsIojHi9FBcVTBRExrotypga8fwQrVM_CwP76Jx5dCYiFNuaJRAylVuRi8YbTuYI1hKMxiy77Chg2uaw6u5wzwH6qefDXLBZ--5jC5LWxK96QBIjfzdHIaDrqn_G4TObbCu9XtkjViCd8R9MeMWck1eOy7mQS0yYz3tWnDroGm5oKu_QFKXs5wuza4UyeWtLxVn4JNJpgCc7zjjocq3qp3akY1g-iZ11VsDrAL563KdsZXRT7vwl0etMH-qatOngver9cVPKu-k4rOJADjUZFwThbyB-a43ihBxorJjKAOhUgkre2I_QiATs5jxJlFXFx0i0pN6MoKoaiBKF1g'})
    const copiedReq = req.clone({headers:req.headers.set('Authorization',`Bearer ${this.loggingService.token}`)});
        return next.handle(copiedReq);
    }
}