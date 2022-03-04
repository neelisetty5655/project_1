import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private getJson: DataStorageService, private fB: FormBuilder) { }
  myPutForm: any
  recData: any
  modalTitle: any
  modalId: any
  fields = [
    "First Name",
    "Last Name",
    "DOB",
    "Current Address",
    "Permenant Address",
    "Email",
    "Phone",
    "Edit",
    "Remove"
  ]
  fieldsOrigin = [
    "first_name",
    "last_name",
    "date_of_birth",
    "current_address",
    "permenant_address",
    "email",
    "phone_number"
  ];
  fieldsOriginPost = [
    "first_name",
    "last_name",
    "date_of_birth",
    "current_address",
    "permenant_address",
    "email",
    "phone_number"
  ];
  formPutData: any = `{
    "first_name":"",
    "last_name":"",
    "date_of_birth":"",
    "current_address":"",
    "permenant_address":""
    "email":"",
    "phone_number":""
  }`

  // onSubmit() {
  //   this.getJson.getData().subscribe((data) => {
  //     this.recData = data;
  //     // console.log(data);
  //   });
  // }

  forModal(id: any, item: any) {
    // this.getJson.forModal(id).subscribe((data) => {
    // console.log(data);
    // });
    console.log(item);
    this.modalTitle = item.first_name
    this.modalId = item.id
    // this.dataForModal = item;
    this.myPutForm.setValue({
      "first_name": item.first_name,
      "last_name": item.last_name,
      "date_of_birth": item.date_of_birth,
      "current_address": item.current_address,
      "permenant_address": item.permenant_address,
      "email": item.email,
      "phone_number": item.phone_number
    })
  }

  onPost(recPostData: any) {
    let id = Math.floor(Math.random() * 1000000000)
    let data = recPostData.value
    // console.log(recPostData);
    data = { ...data, "id": id }
    console.log(data);
    this.getJson.postDataCustomer(data).subscribe((data) => {
      console.log(data);
      window.location.reload()
    });

  }

  onPut(recDataPut: any) {
    let id = this.modalId
    let data = recDataPut.value
    data = { ...data, "id": this.modalId }
    this.getJson.putDataCustomer(data, id).subscribe((data) => {

      let dataTemp = data
      console.log(this.recData[this.modalId])
      console.log(dataTemp)
      // console.log(this.recData);
      window.location.reload()
    });
  }

  onDelete(id: any) {
    this.getJson.deleteDataCustomer(id).subscribe((data) => {
      // console.log(data)
      window.location.reload()
    });
  }

  ngOnInit(): void {

    this.getJson.getDataCustomer().subscribe((data) => {
      this.recData = data;
      // console.log(data);
    });

    this.myPutForm = this.fB.group({
      "first_name": ["", [Validators.required]],
      "last_name": ["", [Validators.required]],
      "date_of_birth": [, [Validators.required]],
      "current_address": ["", [Validators.required]],
      "permenant_address": ["", [Validators.required]],
      "email": ["", [Validators.required]],
      "phone_number": ["", [Validators.required]]
    });
  }

}

