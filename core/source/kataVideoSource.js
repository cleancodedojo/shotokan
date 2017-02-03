class KataVideoSource {
    constructor() {
        this.source = [
            "JKA Katas from YouTube"
        ];

        this.videoList = {
            "JKA Katas from YouTube": this.getJKAKatasFromYouTubeVideoList()
        };
    }

    getJKAKatasFromYouTubeVideoList() {
        return [
            {
                kataName: "heian shodan",
                kataVideoName: "jka-kata-01-heian-shodan-aragaki-misako.mp4"
            }, 
            {
                kataName: "heian nidan",
                kataVideoName: "jka-kata-02-heian-nidan-aragaki-misako.mp4"
            }, 
            {
                kataName: "heian sandan",
                kataVideoName: "jka-kata-03-heian-sandan-aragaki-misako.mp4"
            }, 
            {
                kataName: "heian yondan",
                kataVideoName: "jka-kata-04-heian-yondan-kurihara-kazuaki.mp4"
            }, 
            {
                kataName: "heian godan",
                kataVideoName: "jka-kata-05-heian-godan-kurihara-kazuaki.mp4"
            }, 
            {
                kataName: "tekki shodan",
                kataVideoName: "jka-kata-06-tekki-shodan-kurihara-kazuaki.mp4"
            }, 
            {
                kataName: "bassai dai",
                kataVideoName: "jka-kata-07-bassai-dai-kurihara-kazuaki.mp4"
            }, 
            {
                kataName: "empi",
                kataVideoName: "jka-kata-08-empi-aragaki-misako.mp4"
            }, 
            {
                kataName: "jion",
                kataVideoName: "jka-kata-09-jion-aragaki-misako.mp4"
            }, 
            {
                kataName: "kanku dai",
                kataVideoName: "jka-kata-10-kanku-dai-kurihara-kazuaki.mp4"
            }
        ];
    }

    getVideoList(source) { 
        return this.videoList[source];
    }
}

export default KataVideoSource;





			
		
		
