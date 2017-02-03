class Kata {
    constructor() {
        this._englishName = "";
    }

    set englishName(name) {
        this._englishName = name;
    }

    get englishName() {
        return this._englishName;
    }
}

export default Kata;
