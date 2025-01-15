/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PrimaryButton from "./PrimaryButton.vue";

describe("PrimaryButton component", () => {
  const clickFunctionSpy = vi.fn(() => 0);
  const parent = {
    template: `<PrimaryButton text='Test message' @click='clickFunctionSpy' />`,
    components: { PrimaryButton },
    methods: {
      clickFunctionSpy,
    },
  };
  const wrapper = mount(parent);
  const button = wrapper.find("button");

  it("Should trigger click event and receive a callback function from parent", async () => {
    await button.trigger("click");
    expect(clickFunctionSpy).toHaveBeenCalledOnce();
  });

  it("Should be able to receive a text props", () => {
    expect(wrapper.html()).toContain("Test message");
  });
});
