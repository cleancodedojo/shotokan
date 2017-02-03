import { expect } from "chai";
import Kata from "../source/kata";

describe("Kata", () => {
    it("shall be defined", () => {
        let kata = new Kata();
        expect(kata).to.be.defined;
    });
});
