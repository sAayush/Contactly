import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../Services/contacts/contacts.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Contact } from '../../Models/Contact.model';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, AsyncPipe, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  
  constructor(private contactService: ContactsService) {}

  contactForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string | null>(null),
    phone: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false),
  });

  getContacts(): void {
    this.contactService.getContacts().subscribe({
      next: (data) => (this.contacts = data),
      error: (err) => console.error('Error fetching contacts', err),
    });
  }
  onSubmit(): void {
    const contact: Contact = {
      id: '',
      name: this.contactForm.value.name || '',
      email: this.contactForm.value.email || '',
      phone: this.contactForm.value.phone || '',
      favorite: this.contactForm.value.favorite || false,
    };
    this.contactService.addContact(contact).subscribe({
      next: (data) => {
        console.log('Contact added', data);
        this.getContacts();
        this.contactForm.reset();
      },
      error: (err) => console.error('Error adding contact', err),
    });
  }

  onDelete(id: string): void {
    this.contactService.deleteContact(id).subscribe({
      next: (data) => {
        console.log('Contact deleted', data);
        this.getContacts();
      },
      error: (err) => console.error('Error deleting contact', err),
    });
  }


  ngOnInit(): void {
    this.getContacts();
  }
}