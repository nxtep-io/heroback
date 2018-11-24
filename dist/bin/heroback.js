#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const Package = require("pjson");
const lib_1 = require("../lib");
class HerobackBin {
    static init() {
        // Prepare dump command
        this.program
            .command('dump <uri>')
            .option('-e, --exporter [exporter]', 'The exporter to be used, defaults to "file"')
            .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
            .action((uri, cmd) => __awaiter(this, void 0, void 0, function* () { return this.dump(uri, cmd); }));
        // Prepare restore command
        this.program
            .command('restore <file> <uri>')
            .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
            .action((file, uri, cmd) => __awaiter(this, void 0, void 0, function* () { return this.restore(file, uri, cmd); }));
        this.program.parse(process.argv);
    }
    static dump(uri, cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            // Prepare a heroback dump instance
            try {
                const dump = yield this.heroback.dump({
                    uri,
                    baseDir: cmd.path || process.cwd(),
                    exporter: cmd.exporter || 'file',
                });
                // Dump to local file
                yield dump.export();
                this.heroback.logger.info('Success!');
                process.exit(0);
            }
            catch (exception) {
                this.heroback.logger.error(exception.message);
                process.exit(exception.details.code);
            }
        });
    }
    static restore(file, uri, cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            // Prepare a heroback dump instance
            try {
                const restore = yield this.heroback.restore({
                    uri,
                    gzip: !cmd.gzip,
                    baseDir: cmd.path || process.cwd(),
                });
                // Restore from local dump
                const dump = yield lib_1.Stream.read({ fileName: file });
                yield restore.import(dump);
                this.heroback.logger.info('Success!');
                process.exit(0);
            }
            catch (exception) {
                this.heroback.logger.error(exception.message);
                process.exit(-1);
            }
        });
    }
}
HerobackBin.heroback = new lib_1.default();
HerobackBin.program = program.version(Package.version);
exports.default = HerobackBin;
HerobackBin.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUEwQztBQUcxQyxNQUFxQixXQUFXO0lBSXZCLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDckIsTUFBTSxDQUFDLDJCQUEyQixFQUFFLDZDQUE2QyxDQUFDO2FBQ2xGLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sR0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUEsR0FBQSxDQUFDLENBQUM7UUFHM0QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxPQUFPO2FBQ1QsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2FBQy9CLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxnREFBQyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUc7O1lBQ3ZDLG1DQUFtQztZQUNuQyxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLEdBQUc7b0JBQ0gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTTtpQkFDakMsQ0FBQyxDQUFDO2dCQUVILHFCQUFxQjtnQkFDckIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBRzs7WUFDeEQsbUNBQW1DO1lBQ25DLElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDMUMsR0FBRztvQkFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO2lCQUNuQyxDQUFDLENBQUM7Z0JBRUgsMEJBQTBCO2dCQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLFlBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBOztBQTVEeUIsb0JBQVEsR0FBRyxJQUFJLGFBQVEsRUFBRSxDQUFDO0FBQzFCLG1CQUFPLEdBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRnhGLDhCQThEQztBQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICogYXMgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0ICogYXMgUGFja2FnZSBmcm9tICdwanNvbic7XG5pbXBvcnQgSGVyb2JhY2ssIHsgU3RyZWFtIH0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJ3RzLWZyYW1ld29yay1jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFja0JpbiB7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgaGVyb2JhY2sgPSBuZXcgSGVyb2JhY2soKTtcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBwcm9ncmFtOiBwcm9ncmFtLkNvbW1hbmQgPSBwcm9ncmFtLnZlcnNpb24oUGFja2FnZS52ZXJzaW9uKTtcblxuICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XG4gICAgLy8gUHJlcGFyZSBkdW1wIGNvbW1hbmRcbiAgICB0aGlzLnByb2dyYW1cbiAgICAgIC5jb21tYW5kKCdkdW1wIDx1cmk+JylcbiAgICAgIC5vcHRpb24oJy1lLCAtLWV4cG9ydGVyIFtleHBvcnRlcl0nLCAnVGhlIGV4cG9ydGVyIHRvIGJlIHVzZWQsIGRlZmF1bHRzIHRvIFwiZmlsZVwiJylcbiAgICAgIC5vcHRpb24oJy16LCAtLW5vLWd6aXAnLCAnRGlzYWJsZXMgR1pJUCBjb21wcmVzc2lvbiBvZiB0aGUgZHVtcCBmaWxlJylcbiAgICAgIC5hY3Rpb24oYXN5bmMgKHVyaTogc3RyaW5nLCBjbWQpID0+IHRoaXMuZHVtcCh1cmksIGNtZCkpO1xuXG5cbiAgICAvLyBQcmVwYXJlIHJlc3RvcmUgY29tbWFuZFxuICAgIHRoaXMucHJvZ3JhbVxuICAgICAgLmNvbW1hbmQoJ3Jlc3RvcmUgPGZpbGU+IDx1cmk+JylcbiAgICAgIC5vcHRpb24oJy16LCAtLW5vLWd6aXAnLCAnRGlzYWJsZXMgR1pJUCBjb21wcmVzc2lvbiBvZiB0aGUgZHVtcCBmaWxlJylcbiAgICAgIC5hY3Rpb24oYXN5bmMgKGZpbGUsIHVyaSwgY21kKSA9PiB0aGlzLnJlc3RvcmUoZmlsZSwgdXJpLCBjbWQpKTtcblxuICAgIHRoaXMucHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBkdW1wKHVyaTogc3RyaW5nLCBjbWQpIHtcbiAgICAvLyBQcmVwYXJlIGEgaGVyb2JhY2sgZHVtcCBpbnN0YW5jZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5oZXJvYmFjay5kdW1wKHtcbiAgICAgICAgdXJpLFxuICAgICAgICBiYXNlRGlyOiBjbWQucGF0aCB8fCBwcm9jZXNzLmN3ZCgpLFxuICAgICAgICBleHBvcnRlcjogY21kLmV4cG9ydGVyIHx8ICdmaWxlJyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEdW1wIHRvIGxvY2FsIGZpbGVcbiAgICAgIGF3YWl0IGR1bXAuZXhwb3J0KCk7XG5cbiAgICAgIHRoaXMuaGVyb2JhY2subG9nZ2VyLmluZm8oJ1N1Y2Nlc3MhJyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICB0aGlzLmhlcm9iYWNrLmxvZ2dlci5lcnJvcihleGNlcHRpb24ubWVzc2FnZSk7XG4gICAgICBwcm9jZXNzLmV4aXQoZXhjZXB0aW9uLmRldGFpbHMuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyByZXN0b3JlKGZpbGU6IHN0cmluZywgdXJpOiBzdHJpbmcsIGNtZCkge1xuICAgIC8vIFByZXBhcmUgYSBoZXJvYmFjayBkdW1wIGluc3RhbmNlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3RvcmUgPSBhd2FpdCB0aGlzLmhlcm9iYWNrLnJlc3RvcmUoe1xuICAgICAgICB1cmksXG4gICAgICAgIGd6aXA6ICFjbWQuZ3ppcCxcbiAgICAgICAgYmFzZURpcjogY21kLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXN0b3JlIGZyb20gbG9jYWwgZHVtcFxuICAgICAgY29uc3QgZHVtcCA9IGF3YWl0IFN0cmVhbS5yZWFkKHsgZmlsZU5hbWU6IGZpbGUgfSk7XG4gICAgICBhd2FpdCByZXN0b3JlLmltcG9ydChkdW1wKTtcblxuICAgICAgdGhpcy5oZXJvYmFjay5sb2dnZXIuaW5mbygnU3VjY2VzcyEnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIHRoaXMuaGVyb2JhY2subG9nZ2VyLmVycm9yKGV4Y2VwdGlvbi5tZXNzYWdlKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG4gICAgfVxuICB9XG59XG5cbkhlcm9iYWNrQmluLmluaXQoKTsiXX0=