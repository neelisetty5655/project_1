import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private getJson: DataStorageService, private fB: FormBuilder) { }
  myPutForm: any
  recData: any
  modalTitle: any
  modalId: any
  fields = [
    "Buyer Name",
    "Buyer Email",
    "Buyer Address",
    "Phone",
    "Website",
    "company",
    "Edit",
    "Remove"
  ]
  fieldsOrigin = [
    "buyer_name",
    "buyer_email",
    "buyer_address",
    "phone",
    "website",
    "company"
  ];
  fieldsOriginPost = [
    "buyer_name",
    "buyer_email",
    "buyer_address",
    "phone",
    "website",
    "company"
  ];
  formPutData: any = `{
    "buyer_name":"",
    "buyer_email":"",
    "buyer_address":"",
    "phone":"",
    "website":"",
    "company":""
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
    // console.log(item);
    this.modalTitle = item.buyer_name
    this.modalId = item.id
    // this.dataForModal = item;
    this.myPutForm.setValue({
      "buyer_name": item.buyer_name,
      "buyer_email": item.buyer_email,
      "buyer_address": item.buyer_address,
      "phone": item.phone,
      "website": item.website,
      "company": item.company
    })
  }

  onPost(recPostData: any) {
    let id = Math.floor(Math.random() * 1000000000)
    let data = recPostData.value
    data = { ...data, "id": id }
    // console.log(data);
    // console.log(data);
    this.getJson.postDataBuyer(data).subscribe((data) => {
      // console.log(data);
      window.location.reload()
    });

  }

  onPut(recDataPut: any) {
    let id = this.modalId
    let data = recDataPut.value
    data = { ...data, "id": this.modalId }
    this.getJson.putDataBuyer(data, id).subscribe((data) => {

      let dataTemp = data
      // console.log(this.recData[this.modalId])
      // console.log(dataTemp)
      // console.log(this.recData);
      window.location.reload()
    });
  }

  onDelete(id: any) {
    this.getJson.deleteDataBuyer(id).subscribe((data) => {
      // console.log(data)
      window.location.reload()
    });
  }

  ngOnInit(): void {

    this.getJson.getDataBuyer().subscribe((data) => {
      this.recData = data;
      // console.log(data);
    });

    this.myPutForm = this.fB.group({
      "buyer_name": ["", [Validators.required]],
      "buyer_email": ["", [Validators.required]],
      "buyer_address": [, [Validators.required]],
      "phone": ["", [Validators.required]],
      "website": ["", [Validators.required]],
      "company": ["", [Validators.required]]
    });
  }

}
