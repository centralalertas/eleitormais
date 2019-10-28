import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

/**
 * Generated class for the RequiredIfDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[required-if]' // Attribute selector
})
export class RequiredIfDirective implements Validator {

  @Input("requiredIf")
  requiredIf: boolean;

  validate(c: AbstractControl) {

    let value = c.value;
    if ((value == null || value == undefined || value == "") && this.requiredIf) {
      return {
        requiredIf: { condition: this.requiredIf }
      };
    }
    return null;
  }

}
