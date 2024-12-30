import { Reactive, reactive } from "vue";
import { formValidationRules } from "../types/formValidationRules";

/**
 * @param validationRules should be an object of N number of functions
 */
export default function useFormValidation(
  formValidationRules: formValidationRules<any>,
): { validateField: Function; errors: Reactive<any> } {
  const fields = Object.keys(formValidationRules).map((item) => [item, null]);
  const errorsObject = Object.fromEntries(fields);
  const errors = reactive(errorsObject);
  function validateField(inputName: string, value: string | string[]) {
    const validationValue = formValidationRules[inputName](value);
    if (validationValue !== true) {
      errors[inputName] = validationValue;
    }
    if (validationValue === true) {
      errors[inputName] = null;
    }
  }
  return { validateField, errors };
}
