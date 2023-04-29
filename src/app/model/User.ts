export interface User {
  name: string,
  givenNames: String,
  dateOfBirth: Date,
  personalIdentificationNumber: String,
  identificationOfTheInstitution: String,
  identificationNumberOfTheCard: String,
  insurer: Insurer,
  expiryDate: Date,
  bankDetails: BankDetails,
  address: Address,
  telephone: Telephone
}

export interface Insurer {
  identificationNumber: String,
  organisationName: String,
  polisNumber: String,
  insurance: Insurance,
  address: Address,
  telephone: Telephone
}

export interface Insurance {
  startDate: Date,
  endDate: Date,
  insuranceType: String

}

export interface Telephone {
  phoneNumber: String,
  numberType: String

}

export interface Address {
  street: String,
  houseNumber: String,
  postcode: String,
  residence: String,
  municipality?: String,
  country: String,
  addressType?: String

}

export interface BankDetails {
  bankName: String,
  bankCode: String,
  accountNumber:String
}
