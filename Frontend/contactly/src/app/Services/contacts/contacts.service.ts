import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../Models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{ 
    return this.http.get<Contact[]>('https://localhost:7097/api/Contacts');
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('https://localhost:7097/api/Contacts', contact);
  }

  deleteContact(id: string): Observable<Contact> {
    return this.http.delete<Contact>(`https://localhost:7097/api/Contacts/${id}`);
  }
}
