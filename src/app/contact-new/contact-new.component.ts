import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.less']
})
export class ContactNewComponent implements OnInit {
  public contact = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addContact() {
    this.http.post('http://localhost:3000/contacts', this.contact)
    .toPromise()
    .then((data: any) => {
      this.router.navigate(['/contact'])
    })
    .catch(err => {
      console.log(err)
    })
  }

}
