/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Navbar from "./Navbar.vue";

describe("Navbar component", () => {
  it("Renders the logo and nav links", () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: {
          RouterLink: {
            template: `<p>Navlink stub</p>`,
          },
        },
      },
    });
    const logo = wrapper.find("img");

    expect(wrapper.find("header").exists()).toBeTruthy();
    expect(wrapper.find("nav").exists()).toBeTruthy();
    expect(logo.attributes("alt")).toStrictEqual("Akademika logo");
  });
});
