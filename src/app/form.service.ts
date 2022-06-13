import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { ResponseStatuses } from './interfaces';

@Injectable()
export class FormService {
  constructor() {}

  public responseStatus: ResponseStatuses = ResponseStatuses.EMPTY;

  public isLoading = false;

  public form = new FormGroup({
    name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    phone: new FormControl(null, [
      Validators.required,
      Validators.max(8_999_999_9999),
      Validators.min(7_900_000_0000),
    ]),
  });

  public formError = false;

  onSubmit = () => {
    this.isLoading = true;

    of(this.form.valid)
      .pipe(
        delay(1000),
        finalize(() => {
          this.isLoading = false;
          setTimeout(() => {
            this.responseStatus = ResponseStatuses.EMPTY;
          }, 3000);
        })
      )
      .subscribe((isOk) => {
        if (isOk) {
          this.responseStatus = ResponseStatuses.TRUE;
          this.form.reset();
          this.formError = false;
        } else {
          this.responseStatus = ResponseStatuses.FALSE;
          this.formError = true;
        }
      });
  };
}
