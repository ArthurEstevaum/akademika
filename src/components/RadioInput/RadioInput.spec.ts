/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import RadioInput from "./RadioInput.vue";

describe("Radio input component", () => {
  it("Should be able to work properly with v-model on parent", async () => {
    const parent = {
      template:
        `<RadioInput v-model="picked" labelText="Testing model" radioId="TestInput"  />`,
      components: { RadioInput },
      data() {
        return { picked: "" };
      },
    };
    const wrapper = mount(parent);
    const textInput = wrapper.find("input");

    await textInput.setValue();

    expect(wrapper.vm.picked).toStrictEqual("TestInput");
  });

  it("Should be able to receive label and id props", () => {
    const parent = {
      template:
        `<RadioInput v-model="inputValue" labelText="Testing model" radioId="TestInput" />`,
      components: { RadioInput },
      data() {
        return { picked: "" };
      },
    };
    const wrapper = mount(parent);
    const label = wrapper.find("label");
    const input = wrapper.find("input");

    expect(label.text()).toStrictEqual("Testing model");
    expect(input.attributes("id")).toStrictEqual("TestInput");
    expect(input.attributes("value")).toStrictEqual("TestInput");
  });
});
