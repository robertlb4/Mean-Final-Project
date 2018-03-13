import { Injectable } from '@angular/core';
import { InputinfoService } from './inputinfo.service'

@Injectable()
export class CalculateService {

  constructor(private inputInfo: InputinfoService) { }
  
  calcBenefit(dob, ssi, gender) {
      let startAge = [62, 63, 64, 65, 66, 67, 68, 69, 70];
      let dobYear = Number(dob.substr(0, 4));
      let fra;
      
      
      if (dobYear <= 1937) {
            fra = 780;
        }
        else if (dobYear < 1943) {
            fra = 780 + ((dobYear - 1937) * 2);
        }
        else if (dobYear < 1955) {
            fra = 792;
        }
        else if (dobYear < 1960) {
            fra = 792 + ((dobYear-1954) * 2);
        }
        else {
            fra = 804;
        }
      
  }
  
  

}