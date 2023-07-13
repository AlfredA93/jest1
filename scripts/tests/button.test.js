/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(()=> {
    // Opens up the whole index.html page as a mock to test the whole page
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1); //Stores elements in an array - so as there is only
                                                                    // 1 x h1 tag, then the toBe should be 1.
    })
});