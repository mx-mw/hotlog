declare type LoggerOpts = {
	level: string,
	colour: string,
	function?: (...data: any[]) => void,
}

declare type LoggerFn = (strings: TemplateStringsArray, ...values: string[]) => string;
export function get_logger(l: LoggerOpts): LoggerFn;
export const info: LoggerFn;
export const warn: LoggerFn;
export const error: LoggerFn;
export const fatal: LoggerFn;