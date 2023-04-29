import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Temp } from '../model/Temp';
import { User } from '../model/User';
import { formatDate } from '@angular/common';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CredentialData } from '../model/CredentialData';
import { IssuerService } from '../services/issuer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editMode: boolean;
  userDataForm: FormGroup;
  user: User;
  vc: JSON;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private issuerService: IssuerService,
    private modalService: MdbModalService
  ) {
    this.issuerService.loadIssuerMetadata();

    this.editMode = false;

    this.user = Temp.getTempUser();

    this.vc = {} as JSON;

    this.userDataForm = this.fb.group({
      givenName: new FormControl(this.user.givenNames),
      name: new FormControl(this.user.name),
      dob: new FormControl(
        formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en')
      ),
      pin: new FormControl(this.user.personalIdentificationNumber),
      cin: new FormControl(this.user.identificationNumberOfTheCard),
      expiryDate: new FormControl(
        formatDate(this.user.expiryDate, 'yyyy-MM-dd', 'en')
      ),
      insuranceType: new FormControl(this.user.insurer.insurance.insuranceType),
      phoneNumber: new FormControl(this.user.telephone.phoneNumber),
      street: new FormControl(this.user.address.street),
      houseNumber: new FormControl(this.user.address.houseNumber),
      postcode: new FormControl(this.user.address.postcode),
      residence: new FormControl(this.user.address.residence),
      municipality: new FormControl(this.user.address.municipality),
      country: new FormControl(this.user.address.country),
      addressType: new FormControl(this.user.address.addressType),
    });
  }
  editForm() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {}

  constructUser() {
    this.user.givenNames = this.userDataForm.value['givenName'];
    this.user.name = this.userDataForm.value['name'];
    this.user.insurer.insurance.insuranceType =
      this.userDataForm.value['insuranceType'];
    this.user.telephone.phoneNumber = this.userDataForm.value['phoneNumber'];
    this.user.address.street = this.userDataForm.value['street'];
    this.user.address.houseNumber = this.userDataForm.value['houseNumber'];
    this.user.address.postcode = this.userDataForm.value['postcode'];
    this.user.address.residence = this.userDataForm.value['residence'];
    this.user.address.municipality = this.userDataForm.value['municipality'];
    this.user.address.country = this.userDataForm.value['country'];
    this.user.address.addressType = this.userDataForm.value['addressType'];
  }

  submitUserData() {
    this.constructUser();

    let credentialData: CredentialData = {
      credentialSubject: this.user,
    };

    this.issuerService.requestVcEHIC(credentialData);
  }
}
