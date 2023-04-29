import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './errorHandler.service';
import { catchError } from 'rxjs/operators';
import { LoginResponse } from '../model/LoginResponse';
import { CredentialData } from '../model/CredentialData';

@Injectable({
  providedIn: 'root',
})
export class VcEHICService {
  private static readonly LOCALHOST: string = 'http://localhost:8080';
  private static readonly ISSUERID: string = 'waltid';
  private static readonly ISSUER = 'default';

  private errorHandlerService: ErrorHandlerService = new ErrorHandlerService();
  private _auth_token: string = '';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  constructor(private _httpClient: HttpClient) {}

  set auth_token(value: string) {
    this._auth_token = value;
  }

  logIn(username: string, password: string): Observable<LoginResponse> {
    return this._httpClient
      .post<LoginResponse>(
        VcEHICService.LOCALHOST.concat('/api/auth/login'),
        { id: username, password: password },
        { observe: 'body' }
      )
      .pipe(catchError(this.errorHandlerService.handleError));
  }

  //starts the sequence of credential request

  startIssuance(credentialData: CredentialData, type: string): Observable<any> {
    return this._httpClient
      .post<any>(
        VcEHICService.LOCALHOST.concat(
          `/issuer-api/${VcEHICService.ISSUER}/credentials/issuance/request`
        ),
        { credentials: [{ credentialData: credentialData, type: type }] },
        {
          params: { walletId: 'waltid', isPreAuthorized: true },
          responseType: 'text' as 'json',
          observe: 'body',
        }
      )
      .pipe(catchError(this.errorHandlerService.handleError));
  }

  //Gets all the metadata from the current issuer
  loadIssuerMetadata(): Observable<any> {
    return this._httpClient
      .get<any>(
        VcEHICService.LOCALHOST.concat(
          `/api/wallet/issuer/metadata?issuerId=${VcEHICService.ISSUERID}`
        )
      )
      .pipe(catchError(this.errorHandlerService.handleError));
  }

  // TODO: For expanding website's functionality
  getVerifiableCredential(user: User): Observable<JSON> {
    return this._httpClient
      .post<JSON>(
        VcEHICService.LOCALHOST.concat('/requests/verifiablecredential'),
        { user: user, did: null },
        { headers: this.headers, responseType: 'json' }
      )
      .pipe(catchError(this.errorHandlerService.handleError));
  }

  // TODO: For expanding website's functionality
  getIssuer(): Observable<JSON> {
    return this._httpClient
      .get<JSON>(
        VcEHICService.LOCALHOST.concat('/api/wallet/issuer/metadata'),
        {
          params: { issuer: 'waltId' },
          headers: this.headers,
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
