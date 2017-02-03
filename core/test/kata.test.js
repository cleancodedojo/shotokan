import { expect } from "chai";
import Kata from "../source/kata";

describe("Kata", () => {
    it("shall be defined", () => {
        let kata = new Kata();
        expect(kata).to.be.defined;
    });

    it("shall have an english name", () => {
        let kata = new Kata();
        let expectedName = "taikyoku shodan"
        kata.englishName = expectedName;

        expect(kata.englishName).to.equal(expectedName);
    });
});
