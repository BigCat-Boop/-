import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  public contacts: any = []
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  this.getContact();

  }
  
  getContact() {
    this.http.get('http://localhost:3000/contacts')
    .toPromise()
    .then((data: any) => {
      this.contacts = data
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteContact(id, e) {
    e.preventDefault();
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then((data: any) => {
      this.getContact();
    })
    .catch(err => {
      console.log(err)
    }) 
  }

}
