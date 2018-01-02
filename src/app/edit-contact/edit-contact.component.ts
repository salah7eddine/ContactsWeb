import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact=new Contact();
  idContact:number;

  constructor(public activatedRoute:ActivatedRoute, public contactsService:ContactsService,public router:Router) {
    this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactsService.getContact(this.idContact).subscribe(data=>{
      this.contact=data;
    },err=>{
      console.log(err);
    })
  }

  updateContact(){
    this.contactsService.updateContact(this.contact)
      .subscribe(data=>{
        console.log(data);
        alert("Mise à jour effectuée");
        this.router.navigate(['contacts']);
      },err=>{
        console.log(err);
        alert("Problème   ");
      })
  }

}
