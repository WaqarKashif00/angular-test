import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private dataSerice: DataService) {
    // Initialize the form with validators
    this.userForm = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(3)]],
    });
  }

  /**
   * Handles form submission
   */
  submitForm() {
    if (this.validateForm()) {
      // Process the form data
      this.dataSerice.setSharedData(this.userForm.value);
      this.userForm.reset();
    }
  }

  /**
   * Validates the user form
   * @returns true if the form is valid, false otherwise
   */
  private validateForm(): boolean {
    if (this.userForm.valid) {
      // Additional custom validation logic can be added here
      return true;
    } else {
      // Highlight form fields with errors
      this.markFormGroupTouched(this.userForm);
      return false;
    }
  }

  /**
   * Marks all form controls as touched
   * @param formGroup The form group to be marked as touched
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
