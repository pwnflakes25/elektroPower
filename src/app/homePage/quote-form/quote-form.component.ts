import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
quoteForm: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.quoteForm = new FormGroup({
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  }

  onSubmit() {
    console.log(this.quoteForm.value);
  }

}
