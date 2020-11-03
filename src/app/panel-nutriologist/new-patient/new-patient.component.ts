import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  constructor(private patientService : PatientService) { }
  newPatient = new FormGroup({
    address: new FormControl('', Validators.required),
    name: new FormControl("", Validators.required),
    birthday: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    clinicName: new FormControl('', Validators.required),
    addressClinic: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    identificationCard: new FormControl('', Validators.required),
    roleId: new FormControl('1', Validators.required),
  })

  savedPatient() {
    alert("Registro realizado...");
    console.log(this.newPatient.value);
    this.patientService.savedPatient(this.newPatient.value).subscribe(res =>
      console.log(res))
  }

  ngOnInit(): void {
  }

}
