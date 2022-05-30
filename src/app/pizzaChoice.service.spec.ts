import { TestBed } from '@angular/core/testing';
import { PizzaChoiceService } from './pizzaChoice.service';



describe('PizzaChoiceService', () => {
  let service: PizzaChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
