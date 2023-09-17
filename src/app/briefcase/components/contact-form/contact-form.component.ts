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
    this.darkModeService.darkModeIsSelect
    .subscribe((value) => {
      if(value.mode === 'dark'){
        this.isDarkModeSelect = true
      }else{
        this.isDarkModeSelect = false
      }

    });
  }

  public messageForm: FormGroup = this.formBuilder.group({
    nombreempresa: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  isInvalidControl(control: keyof MessageDto): boolean | null {
    return  this.messageForm.controls[control].errors &&    this.messageForm.controls[control].touched;
  }

  getControlError(control: keyof MessageDto): string | null {
    if (!this.messageForm.controls[control].errors) return null;

    else{
      const errors = this.messageForm.controls[control].errors || {};

      for (const key of Object.keys(errors)) {
        console.log(key)
        switch (key) {
          case 'required':
            return 'This field is required';

          case 'minlength':
            return  `Minimum ${errors['minlength'].requiredLength} characters`;
        }
      }
      return '';
    }
  }

  get currenMessage(): MessageDto {
    const message = this.messageForm.value as MessageDto;
    return message;
  }

  newMessage() {
    if (this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }
    this.onNewMessage.emit(this.currenMessage);
    this.messageForm.reset();
  }
}
