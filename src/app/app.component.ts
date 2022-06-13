import { Component } from '@angular/core';
import { FormService } from './form.service';
import { ResponseStatuses } from './interfaces';
import { PizzasService } from './pizzas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FormService],
})
export class AppComponent {
  constructor(
    private pizzasService: PizzasService,
    public formService: FormService
  ) {}

  public ResponseStatuses = ResponseStatuses;

  public pizzas$ = this.pizzasService.pizzas$;
}
