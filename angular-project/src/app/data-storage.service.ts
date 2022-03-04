import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private ht: HttpClient,private router:Router) { }

  // isLoggedIn=false;

  // login()
  // {
  //   this.isLoggedIn=true;
  //   return of(true).pipe(delay(1000));
  // }

  // logout(){
  //   this.isLoggedIn=false;
  //   this.router.navigate(['/','sign-in']);
  // }

  getDataProduct() { return this.ht.get("http://localhost:3000/product"); }
  postDataProduct(data: any) { return this.ht.post("http://localhost:3000/product", data); }
  putDataProduct(data: any, id: any) { return this.ht.put(`http://localhost:3000/product/${id}`, data); }
  deleteDataProduct(id: any) { return this.ht.delete(`http://localhost:3000/product/${id}`) }

  getDataBuyer() { return this.ht.get("http://localhost:3000/buyer"); }
  postDataBuyer(data: any) { return this.ht.post("http://localhost:3000/buyer", data); }
  putDataBuyer(data: any, id: any) { return this.ht.put(`http://localhost:3000/buyer/${id}`, data); }
  deleteDataBuyer(id: any) { return this.ht.delete(`http://localhost:3000/buyer/${id}`) }

  getDataSeller() { return this.ht.get("http://localhost:3000/sellers"); }
  postDataSeller(data: any) { return this.ht.post("http://localhost:3000/sellers", data); }
  putDataSeller(data: any, id: any) { return this.ht.put(`http://localhost:3000/sellers/${id}`, data); }
  deleteDataSeller(id: any) { return this.ht.delete(`http://localhost:3000/sellers/${id}`) }
  
  getDataCustomer() { return this.ht.get("http://localhost:3000/customer"); }
  postDataCustomer(data: any) { return this.ht.post("http://localhost:3000/customer", data); }
  putDataCustomer(data: any, id: any) { return this.ht.put(`http://localhost:3000/customer/${id}`, data); }
  deleteDataCustomer(id: any) { return this.ht.delete(`http://localhost:3000/customer/${id}`) }
}
