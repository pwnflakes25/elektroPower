import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {MailerService} from '../../packages/mailer.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
quoteForm: FormGroup;


  constructor(private mailerService: MailerService) { }

  ngOnInit(): void {

    this.quoteForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  }

  onSubmit() {
    this.mailerService.sendMail(this.quoteForm.value);
  }

}
