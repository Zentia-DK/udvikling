// Import the component to be tested
import TheWelcome from "../TheWelcome.vue";

// Import the mount function from Vue Test Utils, which will be used to mount the component
import { mount } from "@vue/test-utils";

// Import the necessary functions from Vitest for testing
import { describe, it, expect } from "vitest";

// Define a test suite for TheWelcome component
describe("TheWelcome", () => {
    // Define a test case within the test suite
    it("renders properly", () => {
        // Mount the component with propsData and assign it to the wrapper
        const wrapper = mount(TheWelcome);

        // Expect that the text of the mounted component includes "Hello Vitest"
        expect(wrapper.html()).toContain("Documentation");
    });
});