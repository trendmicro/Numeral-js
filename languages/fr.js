/*!
 * numeral.js language configuration
 * language : french (fr)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            symbol: '€'
        },
        suffixes: {
            B: 'o',
            KB: 'Ko',
            MB: 'Mo',
            GB: 'Go',
            TB: 'To',
            PB: 'Po',
            EB: 'Eo',
            ZB: 'Zo',
            YB: 'Yo'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this && this.numeral && this.numeral.language) {
        this.numeral.language('fr', language);
    }
}());