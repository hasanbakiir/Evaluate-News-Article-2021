



// Import the js file to test
import { checkForUrl } from "../client/js/urlChecker" 

describe("Testing the url validity functionality", () => {
    test("Testing the url validation function declaration", async () => {
        expect(checkForUrl).toBeDefined();
    })
    test("Testing the submitHandler() function", async () => {
        expect(typeof checkForUrl).toBe("function");
    })
    test('check valid url should return true', async () => {
        expect(checkForUrl('http://example.com')).toBeTruthy()
    })

    test('check invalid url should return false', async () => {
        expect(checkForUrl('invalid url')).toBeFalsy()
    })
});

// Import the url to test with nodemocks
var httpMocks = require('node-mocks-http');
describe('Test, the function "checkForUrl()" throw error if user inputs is incorrect' , () => {
    test('checkForUrl should throw error if incorrect user inputs', () => {
        const next = jest.fn();
        const req = httpMocks.createRequest({
            body: {
            url: "https://www.datasciencecentra.com/profiles/blogs/11-great-articles-about-natural-language-processing-nlp"
            }
        })
    })
})


