const moment = require('moment');

module.exports.templateTags = [{
    name: 'DateAdd',
    displayName: 'DateAdd',
    description: 'Provides a formatted date with addition.',
    args: [
        {
            displayName: 'Days to add',
            description: 'The days to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Months to add',
            description: 'The months to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Years to add',
            description: 'The years to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Format',
            description: 'The output format of the date.',
            type: 'string',
            defaultValue: "YYYY-MM-DDTHH:mm:ssZ"
        }
    ],
    async run (context, days, months, years, format) {
        let m = moment();
        m.add(days, 'days');
        m.add(months, 'months');
        m.add(years, 'years');
        return m.format(format);
    }
}];