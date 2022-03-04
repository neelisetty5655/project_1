import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private getJson: DataStorageService, private fB: FormBuilder) { }

  myPutForm: any
  recData: any
  modalTitle: any
  modalId: any
  fields = [
    "Product Name",
    "Product Category",
    "Description",
    "Units Available",
    "Height",
    "Width",
    "Price",
    "Rating",
    "Edit",
    "Remove"
  ]
  fieldsOrigin = [
    "product_name",
    "product_category",
    "product_description",
    "units_available",
    "height",
    "width",
    "price",
    "rating"
  ];
  fieldsOriginPost = [
    "product_name",
    "product_category",
    "product_description",
    "units_available",
    "height",
    "width",
    "price",
    "rating"
  ];
  formPutData: any = `{
    "product_name":"",
    "product_category":"",
    "product_description":"",
    "units_available":"",
    "height":"",
    "width":"",
    "price":"",
    "rating":""
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
    this.modalTitle = item.product_name
    this.modalId = item.id
    // this.dataForModal = item;
    this.myPutForm.setValue({
      "product_name": item.product_name,
      "product_category": item.product_category,
      "product_description": item.product_description,
      "units_available": item.units_available,
      "height": item.height,
      "width": item.width,
      "price": item.price,
      "rating": item.rating
    })
  }

  onPost(recPostData: any) {
    let id = Math.floor(Math.random() * 1000000000)
    let data = recPostData.value
    // console.log(recPostData);
    data = { ...data, "id": id }
    console.log(data);
    this.getJson.postDataProduct(data).subscribe((data) => {
      console.log(data);
      window.location.reload()
    });

  }

  onPut(recDataPut: any) {
    let id = this.modalId
    let data = recDataPut.value
    data = { ...data, "id": this.modalId }
    this.getJson.putDataProduct(data, id).subscribe((data) => {

      let dataTemp = data
      console.log(this.recData[this.modalId])
      console.log(dataTemp)
      // console.log(this.recData);
      window.location.reload()
    });
  }

  onDelete(id: any) {
    this.getJson.deleteDataProduct(id).subscribe((data) => {
      // console.log(data)
      window.location.reload()
    });
  }

  ngOnInit(): void {
    this.getJson.getDataProduct().subscribe((data) => {
      this.recData = data;
      console.log(data);
    });
    this.myPutForm = this.fB.group({
      "product_name": ["", [Validators.required]],
      "product_category": ["", [Validators.required]],
      "product_description": [, [Validators.required]],
      "units_available": ["", [Validators.required]],
      "height": ["", [Validators.required]],
      "width": ["", [Validators.required]],
      "price": ["", [Validators.required]],
      "rating": ["", [Validators.required]]
    });
  }

}
