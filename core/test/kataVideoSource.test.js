import { expect } from "chai";
import KataVideoSource from "../source/kataVideoSource";

describe("KataVideoSource", () => {
    it("shall have a list of sources", () => {
        let kataVideos = new KataVideoSource();
        let expectedSources = [
            "JKA Katas from YouTube", 
            "JKA Katas from DVDs (private)"
        ];

        kataVideos.source = expectedSources;

        expect(kataVideos.source).to.deep.equal(expectedSources);
    });

    it("shall have a list of videos based on source key", () => {
        let kataVideos = new KataVideoSource();
        let source = "JKA Katas from YouTube"; 
        
        expect(kataVideos.getVideoList(source).length).to.be.greaterThan(0);
    });
});