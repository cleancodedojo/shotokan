import { expect } from "chai";
import Shotokan from "../source/index";

describe("Shotokan", () => {
    it("shall have a kata video source", () => {
        let kataVideoSource = new Shotokan.KataVideoSource();

        expect(kataVideoSource).to.be.defined;
    });
});