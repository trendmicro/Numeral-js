var numeral = require('../../numeral'),
    language = require('../../languages/id');

numeral.language('id', language);

exports['language:it'] = {
    setUp: function (callback) {
        numeral.language('id');
        callback();
    },

    tearDown: function (callback) {
        numeral.language('en');
        callback();
    },

    format: function (test) {
        test.expect(16);

        var tests = [
            [10000,'0,0.0000','10.000,0000'],
            [10000.23,'0,0','10.000'],
            [-10000,'0,0.0','-10.000,0'],
            [10000.1234,'0.000','10000,123'],
            [-10000,'(0,0.0000)','(10.000,0000)'],
            [-0.23,'.00','-,23'],
            [-0.23,'(.00)','(,23)'],
            [0.23,'0.00000','0,23000'],
            [1230974,'0.0a','1,2jt'],
            [1460,'0a','1rb'],
            [-104000,'0a','-104rb'],
            [1,'0o','1ke'],
            [52,'0o','52ke'],
            [23,'0o','23ke'],
            [100,'0o','100ke'],
            [1,'0[.]0','1']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    currency: function (test) {
        test.expect(4);

        var tests = [
            [1000.234,'$0,0.00','Rp1.000,23'],
            [-1000.234,'($0,0)','(Rp1.000)'],
            [-1000.234,'$0.00','-Rp1000,23'],
            [1230974,'($0.00a)','Rp1,23jt']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    percentages: function (test) {
        test.expect(4);

        var tests = [
            [1,'0%','100%'],
            [0.974878234,'0.000%','97,488%'],
            [-0.43,'0%','-43%'],
            [0.43,'(0.000%)','43,000%']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    unformat: function (test) {
        test.expect(9);

        var tests = [
            ['10.000,123',10000.123],
            ['(0,12345)',-0.12345],
            ['(Rp1,23jt)',-1230000],
            ['10rb',10000],
            ['-10rb',-10000],
            ['23ke',23],
            ['Rp10.000,00',10000],
            ['-76%',-0.76],
            ['2:23:57',8637]
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral().unformat(tests[i][0]), tests[i][1], tests[i][0]);
        }

        test.done();
    }
};
