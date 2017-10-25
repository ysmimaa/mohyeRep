import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  contacts: Contact[];
  constructor(private http: Http) {
     }

  ngOnInit() {
    this.http.get("localhost:8080/chercherContacts")
      .map((resp) => resp.json())
      .subscribe(data => {
        // this.data.push({"id":2,"nom":"mohyeddyn","prenom":"eljaidi","email":"eljaidimohyeddyn@gmail.com"});
        console.log("oki");
      }, err => {
        console.log(err);

      });

    //this.elements=new Array();
    // this.elements.push({id:2,nom:"mohyeddyn",prenom:"eljaidi",email:"eljaidimohyeddyn@gmail.com"});
  }

}
