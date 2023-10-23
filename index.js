const moment = require("moment");

function getDate(y, M, d, h, m, s, ms, format) {
  let now = moment();

  if (y >= 0) now.add(y, "y");
  else now.subtract(-y, "y");

  if (M >= 0) now.add(M, "M");
  else now.subtract(-M, "M");

  if (d >= 0) now.add(d, "d");
  else now.subtract(-d, "d");

  if (h >= 0) now.add(h, "h");
  else now.subtract(-h, "h");

  if (m >= 0) now.add(m, "m");
  else now.subtract(-m, "m");

  if (s >= 0) now.add(s, "s");
  else now.subtract(-s, "s");

  if (ms >= 0) now.add(ms, "ms");
  else now.subtract(-ms, "ms");

  return now.format(format);
}

const templateTags = [
  {
    name: "CustomTimestamp",
    displayName: "Custom Timestamp 2",
    description:
      "Provides a formatted date with addition (use negative values for subtraction)",
    args: [
      {
        displayName: "Custom Format",
        description: "The output format of the date (default ISO8601)",
        type: "string",
        defaultValue: "YYYY-MM-DDTHH:mm:ssZ", // default ISO8601
      },
      {
        displayName: "Milliseconds to add",
        description: "Milliseconds to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Seconds to add",
        description: "The seconds to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Minutes to add",
        description: "The minutes to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Hours to add",
        description: "The hours to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Days to add",
        description: "The days to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Months to add",
        description: "The months to add to the date.",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "Years to add",
        description: "The years to add to the date.",
        type: "number",
        defaultValue: 0,
      },
    ].reverse(),
    async run(context, ...values) {
      return getDate(...values);
    },
    liveDisplayName(context) {
      let values = context.map((c) => c.value);
      return "CustomTimestamp (" + getDate(...values) + ")";
    },
  },
];

module.exports = {
  templateTags,
};
