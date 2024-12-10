import { describe, it } from "vitest"
import { mount } from "@vue/test-utils";
import createSubject from "../CreateSubject.vue"

describe("Creating a subject", () => {
    it("renders subject creation form", () => {
        const wrapper = mount(createSubject);
        const endpoint = "http://localhost:3000/subjects"

        
    })
})

