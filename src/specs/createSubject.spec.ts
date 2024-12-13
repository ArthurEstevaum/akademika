/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import CreateSubject from "../CreateSubject.vue";

describe("Creating a subject", () => {
  it.todo("Should render subject creation form");
  it.todo("Should render success message and reset fields on success");
  it.todo("Should render error message when leaving required fields empty");
});
