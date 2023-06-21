import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { MessageDto } from '../../interfaces/message.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  isDarkModeSelect: boolean = false;

  constructor(
    private darkModeService: DarkModeService,
    private formBuilder: FormBuilder
  ) {}

  @Output() onNewMessage: EventEmitter<MessageDto> =  new EventEmitter<MessageDto>();

  ngOnInit(): void {
    this.darkModeService.darkModeIsSelect.subscribe(
      (value) => (this.isDarkModeSelect = value)
    );
  }

  public messageForm: FormGroup = this.formBuilder.group({
    nombreempresa: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isInvalidControl(control: keyof MessageDto): boolean | null {
    return (
      this.messageForm.controls[control].errors &&
      this.messageForm.controls[control].touched
    );
  }

  getControlError(control: keyof MessageDto): string | null {
    if (!this.messageForm.controls[control].errors) return null;

    const errors = this.messageForm.controls[control].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';

        case 'minLength':
          return  `Minimo ${errors['minlength'].requiredLength} caracteres`;

        case 'email':
          return 'Invalid email format';
      }
    }
    return '';
  }

  get currenMessage(): MessageDto {
    const message = this.messageForm.value as MessageDto;
    return message;
  }

  newMessage() {
    if (this.messageForm.invalid) return;
    this.onNewMessage.emit(this.currenMessage);
    this.messageForm.reset();
  }
}
