import { describe, expect, it } from "vitest";
import useFormValidation from "./useFormValidation";

describe("Live form validation composable", () => {
    it("should expose a validation function to check inputs", () => {
        const { validateField } = useFormValidation({
            text: () => true,
        })
        expect(validateField).toBeInstanceOf(Function)
    })
    it("should return no errors when inputs are valid", () => {
        const { validateField, errors } = useFormValidation({
            text: (value: string) => value ? true : "Campo obrigatório"
        })

        validateField("text", "Some text")
        
        expect(errors).toStrictEqual({ text: null })
    })
    it("should return a reactive with error messages when inputs are invalid", () => {
        const { validateField, errors } = useFormValidation({
            text: (value: string) => value ? true : "Campo obrigatório"
        })

        validateField("text", "")

        expect(errors).toStrictEqual({ text: "Campo obrigatório" })
    })
})