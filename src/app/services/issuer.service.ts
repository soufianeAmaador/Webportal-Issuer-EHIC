import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VcEHICService } from './vcEHIC.service';
import { Router } from '@angular/router';
import { CredentialData } from '../model/CredentialData';

@Injectable({
  providedIn: 'root',
})
export class IssuerService {
  private static readonly TYPE: string = 'EuropeanHealthInsuranceCard';
  constructor(
    private _httpClient: HttpClient,
    private service: VcEHICService,
    private router: Router
  ) {}

  requestVcEHIC(credentialData: CredentialData) {
    this.service.startIssuance(credentialData, IssuerService.TYPE).subscribe({
      next: (data) => {
        console.log(data);
        window.location.href = data;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {},
    });
  }

  loadIssuerMetadata() {
    this.service.loadIssuerMetadata().subscribe({
      next: (data) => {
        console.log(`issuerMetadata: ${data}`);
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {},
    });
  }
}
