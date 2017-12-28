import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {

	orderForm: FormGroup;

	constructor(private _formBuilder: FormBuilder) { 
		this.buildForm();
	}

	ngOnInit() {
	}

	buildForm() {
		this.orderForm = this._formBuilder.group({
			customerName: this._formBuilder.control(null),
			breadSize: this._formBuilder.control(null),
			cheese: this._formBuilder.group({
				cheeseProvo: this._formBuilder.control(null),
				cheeseChedder: this._formBuilder.control(null),
				cheeseSwiss: this._formBuilder.control(null)
			}),
			veggi: this._formBuilder.group({
				veggiLettuce: this._formBuilder.control(null),
				veggiTomato: this._formBuilder.control(null),
				veggiMusturd: this._formBuilder.control(null)
			}),
			others: this._formBuilder.group({
				washedRind: this._formBuilder.control(null),
				brushedRind: this._formBuilder.control(null),
				bloomyRind: this._formBuilder.control(null)
			})
		});

		this.orderForm.get('breadSize').valueChanges.subscribe( value => {
			if(value !== 'small') {			
				this.orderForm.get('others').reset();				
			}
			// console.log(this.orderForm.get('others'));
		})
	}

	onFormSubmit() {
		console.log(this.orderForm.value);
	}
	onReset() {
		this.orderForm.reset();
	}
}
