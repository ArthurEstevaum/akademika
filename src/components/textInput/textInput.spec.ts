/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import TextInput from "./TextInput.vue";

describe("text input component", () => {
  it("Should be able to work properly with v-model on parent", async () => {
    const parent = {
      template:
        `<TextInput v-model="inputValue" labelText="Testing model" inputId="TestInput"  />`,
      components: { TextInput },
      data() {
        return { inputValue: "" };
      },
    };
    const wrapper = mount(parent);
    const textInput = wrapper.find("input");

    await textInput.setValue("Testing input");

    expect(wrapper.vm.inputValue).toStrictEqual("Testing input");
  });
  it("Should be able to receive label and placeholder props", () => {
    const parent = {
      template:
        `<TextInput v-model="inputValue" labelText="Testing model" inputId="TestInput" placeholder="Test placeholder" />`,
      components: { TextInput },
      data() {
        return { inputValue: "" };
      },
    };
    const wrapper = mount(parent);
    const label = wrapper.find("label");
    const input = wrapper.find("input");

    expect(label.text()).toStrictEqual("Testing model");
    expect(input.attributes("placeholder")).toStrictEqual("Test placeholder");
    expect(input.attributes("id")).toStrictEqual("TestInput");
  });
});
