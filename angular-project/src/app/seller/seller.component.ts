import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private getJson: DataStorageService, private fB: FormBuilder) { }
  myPutForm: any
  recData: any
  modalTitle: any
  modalId: any
  fields = [
    "Seller Name",
    "Seller Email",
    "Seller Address",
    "Phone",
    "Website",
    "Edit",
    "Remove"
  ]
  fieldsOrigin = [
    "seller_name",
    "seller_email",
    "seller_address",
    "phone",
    "website"
  ];
  fieldsOriginPost = [
    "seller_name",
    "seller_email",
    "seller_address",
    "phone",
    "website"
  ];
  formPutData: any = `{
    "seller_name":"",
    "seller_email":"",
    "seller_address":"",
    "phone":"",
    "website":""
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
    this.modalTitle = item.seller_name
    this.modalId = item.id
    // this.dataForModal = item;
    this.myPutForm.setValue({
      "seller_name": item.seller_name,
      "seller_email": item.seller_email,
      "seller_address": item.seller_address,
      "phone": item.phone,
      "website": item.website
    })
  }

  onPost(recPostData: any) {
    let id = Math.floor(Math.random() * 1000000000)
    let data = recPostData.value
    data = { ...data, "id": id }
    // console.log(data);
    // console.log(data);
    this.getJson.postDataSeller(data).subscribe((data) => {
      // console.log(data);
      window.location.reload()
    });

  }

  onPut(recDataPut: any) {
    let id = this.modalId
    let data = recDataPut.value
    data = { ...data, "id": this.modalId }
    this.getJson.putDataSeller(data, id).subscribe((data) => {

      let dataTemp = data
      console.log(this.recData[this.modalId])
      console.log(dataTemp)
      // console.log(this.recData);
      window.location.reload()
    });
  }

  onDelete(id: any) {
    this.getJson.deleteDataSeller(id).subscribe((data) => {
      // console.log(data)
      window.location.reload()
    });
  }

  ngOnInit(): void {

    this.getJson.getDataSeller().subscribe((data) => {
      this.recData = data;
      // console.log(data);
    });

    this.myPutForm = this.fB.group({
      "seller_name": ["", [Validators.required]],
      "seller_email": ["", [Validators.required]],
      "seller_address": [, [Validators.required]],
      "phone": ["", [Validators.required]],
      "website": ["", [Validators.required]]
    });
  }

}

