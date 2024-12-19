/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HoraryInput from "./HoraryInput.vue";

describe("Horary input component", () => {
    it("Should pick the day by clicking on its respective box", async() => {
        const wrapper = mount(HoraryInput)
        const monday = wrapper.get("#segunda-feira")
        
        await monday.trigger("click")
        const eventEmited = wrapper.emitted()

        expect(eventEmited).toHaveProperty("updatedDaysPicked")
        expect(eventEmited["updatedDaysPicked"][0]).toEqual([["Segunda-feira"]])
    })
    it("Should remove the day from the list by clicking if it has already been picked", async() => {
        const wrapper = mount(HoraryInput)
        const monday = wrapper.get("#segunda-feira")
        
        await monday.trigger("click")
        await monday.trigger("click")
        const eventEmited = wrapper.emitted()

        expect(eventEmited).toHaveProperty("updatedDaysPicked")
        expect(eventEmited["updatedDaysPicked"][0]).toEqual([["Segunda-feira"]])
        expect(eventEmited["updatedDaysPicked"][1]).toEqual([[]])
    })
    it.each([
        ["Segunda-feira", "Terca-feira", ["Segunda-feira", "Terca-feira"]],
        ["Quarta-feira", "Quinta-feira", ["Quarta-feira", "Quinta-feira"]],
        ["Sexta-feira", "Sabado", ["Sexta-feira", "Sábado"]],
    ])("Should pick %s and %s by clicking on them", async(dayOne, dayTwo, expected) => {
        const wrapper = mount(HoraryInput)
        const first = wrapper.get(`#${dayOne.toLowerCase()}`)
        const second = wrapper.get(`#${dayTwo.toLowerCase()}`)

        await first.trigger("click")
        await second.trigger("click")
        const eventEmited = wrapper.emitted()

        expect(eventEmited).toHaveProperty("updatedDaysPicked")
        expect(eventEmited["updatedDaysPicked"][0]).toEqual([expected])
    })
})