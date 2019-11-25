import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from 'angular-formio';
import { RatingWrapperComponent } from './rating-wrapper.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'myrating', // custom type. Formio will identify the field with this type.
  selector: 'my-rating', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Rating', // Title of the component
  group: 'data', // Build Group
  icon: 'star', // Icon
//  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  editForm: Components.components.textfield.editForm, // Optional: define the editForm of the field. Default: the editForm of a textfield
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: null, // Optional: the emptyValue of the field
};

export function registerRatingComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
}
