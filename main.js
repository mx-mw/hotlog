const RESET = '\u001b[0m'

module.exports.get_logger = (l) => {
	return (strings, ...values) => {
		let str = `${Date.now().toLocaleString()} ${l.colour}[${l.level}]${RESET}: `;
		strings.forEach((string, i) => {
			str += string + values[i];
		});
		str = str.replace(/undefined/, "");
		(l.function || console.error)(str)
		return str;
	}
}

let loggers = [
	{
		"level": "INFO",
		"colour": "\u001b[34;1m",
		"function": console.info,
	},
	{
		"level": "WARN",
		"colour": "\u001b[33m",
	},
	{
		"level": "ERROR",
		"colour": "\u001b[34m",
	},
	{
		"level": "FATAL",
		"colour": "\u001b[34;1m",
	},
]

for(let l of loggers) {
	module.exports[l.level.toLowerCase()] = get_logger(l)
}