
import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
  
  export class TitleValidator {

    static createValidator(_moviesService: MoviesService) {
      return (control: AbstractControl<string>): Observable<ValidationErrors | null> => {
        return _moviesService
          .checkTitleExists(control.value)
          .pipe(
            map((result: boolean) =>
              !result ? { titleAlreadyExists: true } : null
            )
          );
      };
    }
  }