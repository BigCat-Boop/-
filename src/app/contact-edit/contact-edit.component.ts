import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {
  public contact = {
    name: '',
    email: '',
    phone: '',
    id: ''
  }

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const activeId = this.activateRoute.snapshot.params.id;
    this.getContactById(activeId)
  }
  getContactById(id) {
    this.http.get(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then((data: any) => {
      this.contact = data
    })
    .catch(err => {
      console.log(err)
    })
  }

  editContact() {
    const id = this.contact.id;
    this.http.patch(`http://localhost:3000/contacts/${id}`, this.contact)
    .toPromise()
    .then((data: any) => {
      this.router.navigate(['/contact'])
    })
    .catch(err => {
      console.log(err)
    })
  }

}
