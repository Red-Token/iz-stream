import pino, {type Logger, type Bindings} from 'pino';

interface AppLogger {
	debug(message: string, ...args: any[]): void;
	info(message: string, ...args: any[]): void;
	warn(message: string, ...args: any[]): void;
	error(message: string, ...args: any[]): void;
	child(bindings: Bindings): AppLogger;
}

class PinoLogger implements AppLogger {
	private readonly logger: Logger;

	constructor(level: pino.Level = 'info') {
		this.logger = pino({
			level,
			transport: {
				target: 'pino-pretty',
				options: {
					colorize: true
				}
			}
		});
	}
	debug(message: string, ...args: any[]): void {
		this.logger.debug(args, message);
	}
	info(message: string, ...args: any[]): void {
		this.logger.info(args, message);
	}
	warn(message: string, ...args: any[]): void {
		this.logger.warn(args, message);
	}
	error(message: string, ...args: any[]): void {
		this.logger.error(args, message);
	}

	child(bindings: Bindings): AppLogger {
		const childLogger = this.logger.child(bindings);
		return new PinoLoggerWrapper(childLogger);
	}
}
class PinoLoggerWrapper implements AppLogger {
	private readonly logger: Logger;
	constructor(logger: Logger) {
		this.logger = logger;
	}
	debug(message: string, ...args: any[]): void {
		this.logger.debug(args, message);
	}
	info(message: string, ...args: any[]): void {
		this.logger.info(args, message);
	}
	warn(message: string, ...args: any[]): void {
		this.logger.warn(args, message);
	}
	error(message: string, ...args: any[]): void {
		this.logger.error(args, message);
	}
	child(bindings: Bindings): AppLogger {
		const childLogger = this.logger.child(bindings);
		return new PinoLoggerWrapper(childLogger);
	}
}

export const Log = new PinoLogger('debug');
