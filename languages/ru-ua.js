// numeral.js language configuration
// language : Russian for the Ukraine (ru-UA)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
        },
        currency: {
            symbol: '\u20B4'
        },
        suffixes: {
            B: 'Б',
            KB: 'кБ',
            MB: 'МБ',
            GB: 'ГБ',
            TB: 'ТБ',
            PB: 'ПБ',
            EB: 'ЭБ',
            ZB: 'ZБ',
            YB: 'YБ'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this && this.numeral && this.numeral.language) {
        this.numeral.language('ru-ua', language);
    }
}());
