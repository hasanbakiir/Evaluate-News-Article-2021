// Import the js file to test with Jest the submitHandler function
import { submitHandler } from "../client/js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the submitHandler() function", async () => {
        expect(submitHandler).toBeDefined();
    })
    test("Testing the submitHandler() function", async () => {
        expect(submitHandler).toBeTruthy();
    })
});
