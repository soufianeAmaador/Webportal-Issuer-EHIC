import {User} from "./User";


export class Temp {

  constructor() {
  }
  static getTempUser() {
    return {
      name: 'Soufiane',
      givenNames:'Amaador',
      dateOfBirth: new Date(1999,3,2),
      personalIdentificationNumber: '012345678',
      identificationOfTheInstitution: '3311 - Zilveren Kruis',
      identificationNumberOfTheCard: '01234567890123456789',
      insurer: {
        identificationNumber: '3311',
        organisationName: 'Zilveren Kruis',
        polisNumber: '01234567890123456789',
        insurance: {
          startDate: new Date(2022,0,1),
          endDate: new Date(2024,0,31),
          insuranceType: 'Basic'
        },
        address: {
          street:'Postbus',
          houseNumber: '34000',
          postcode: '7500 KC',
          residence: 'Enschede',
          country: 'Netherlands'
        },
        telephone: {
          phoneNumber: '+31505233333',
          numberType: 'Business',
        }
      },
      expiryDate: new Date(2024,11,31),
      bankDetails: {
        bankName: 'ING',
        bankCode: 'INGBNL2A',
        accountNumber: 'NL85INGB0001234567'
      },
      address: {
        street: '1e Jacob van Campenstr',
        houseNumber: '15',
        postcode: '1012 NX',
        residence: 'Hoogmade',
        country: 'Netherlands',
        municipality:'Kaag en Braassem',
        addressType: 'Residential/residence address'
      },
      telephone: {
        phoneNumber: '+311725233111',
        numberType: 'private'
      }
    }
  }



}
