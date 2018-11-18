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
            .option('-d, --dest [path]', 'The destination directory for the dump [Defaults to cwd]')
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
                    gzip: !cmd.gzip,
                    baseDir: cmd.path || process.cwd(),
                    exporter: cmd.exporter || 'file',
                    provider: cmd.provider || 'postgres',
                });
                // Dump to local file
                yield dump.export();
                this.heroback.logger.info('Success!');
                process.exit(0);
            }
            catch (exception) {
                this.heroback.logger.error(exception.message);
                process.exit(-1);
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
                    provider: cmd.provider || 'postgres',
                });
                // Restore from local dump
                const dump = yield lib_1.Stream.read({ fileName: file });
                yield restore.run(dump);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUEwQztBQUUxQyxNQUFxQixXQUFXO0lBSXZCLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDckIsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDBEQUEwRCxDQUFDO2FBQ3ZGLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sR0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUEsR0FBQSxDQUFDLENBQUM7UUFHM0QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxPQUFPO2FBQ1QsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2FBQy9CLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxnREFBQyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUc7O1lBQ3ZDLG1DQUFtQztZQUNuQyxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLEdBQUc7b0JBQ0gsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTTtvQkFDaEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksVUFBVTtpQkFDckMsQ0FBQyxDQUFDO2dCQUVILHFCQUFxQjtnQkFDckIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBRzs7WUFDeEQsbUNBQW1DO1lBQ25DLElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDMUMsR0FBRztvQkFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO29CQUNsQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxVQUFVO2lCQUNyQyxDQUFDLENBQUM7Z0JBRUgsMEJBQTBCO2dCQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLFlBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBOztBQS9EeUIsb0JBQVEsR0FBRyxJQUFJLGFBQVEsRUFBRSxDQUFDO0FBQzFCLG1CQUFPLEdBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRnhGLDhCQWlFQztBQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICogYXMgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0ICogYXMgUGFja2FnZSBmcm9tICdwanNvbic7XG5pbXBvcnQgSGVyb2JhY2ssIHsgU3RyZWFtIH0gZnJvbSAnLi4vbGliJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tCaW4ge1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IGhlcm9iYWNrID0gbmV3IEhlcm9iYWNrKCk7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgcHJvZ3JhbTogcHJvZ3JhbS5Db21tYW5kID0gcHJvZ3JhbS52ZXJzaW9uKFBhY2thZ2UudmVyc2lvbik7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0KCkge1xuICAgIC8vIFByZXBhcmUgZHVtcCBjb21tYW5kXG4gICAgdGhpcy5wcm9ncmFtXG4gICAgICAuY29tbWFuZCgnZHVtcCA8dXJpPicpXG4gICAgICAub3B0aW9uKCctZCwgLS1kZXN0IFtwYXRoXScsICdUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IGZvciB0aGUgZHVtcCBbRGVmYXVsdHMgdG8gY3dkXScpXG4gICAgICAub3B0aW9uKCcteiwgLS1uby1nemlwJywgJ0Rpc2FibGVzIEdaSVAgY29tcHJlc3Npb24gb2YgdGhlIGR1bXAgZmlsZScpXG4gICAgICAuYWN0aW9uKGFzeW5jICh1cmk6IHN0cmluZywgY21kKSA9PiB0aGlzLmR1bXAodXJpLCBjbWQpKTtcblxuXG4gICAgLy8gUHJlcGFyZSByZXN0b3JlIGNvbW1hbmRcbiAgICB0aGlzLnByb2dyYW1cbiAgICAgIC5jb21tYW5kKCdyZXN0b3JlIDxmaWxlPiA8dXJpPicpXG4gICAgICAub3B0aW9uKCcteiwgLS1uby1nemlwJywgJ0Rpc2FibGVzIEdaSVAgY29tcHJlc3Npb24gb2YgdGhlIGR1bXAgZmlsZScpXG4gICAgICAuYWN0aW9uKGFzeW5jIChmaWxlLCB1cmksIGNtZCkgPT4gdGhpcy5yZXN0b3JlKGZpbGUsIHVyaSwgY21kKSk7XG5cbiAgICB0aGlzLnByb2dyYW0ucGFyc2UocHJvY2Vzcy5hcmd2KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZHVtcCh1cmk6IHN0cmluZywgY21kKSB7XG4gICAgLy8gUHJlcGFyZSBhIGhlcm9iYWNrIGR1bXAgaW5zdGFuY2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMuaGVyb2JhY2suZHVtcCh7XG4gICAgICAgIHVyaSxcbiAgICAgICAgZ3ppcDogIWNtZC5nemlwLFxuICAgICAgICBiYXNlRGlyOiBjbWQucGF0aCB8fCBwcm9jZXNzLmN3ZCgpLFxuICAgICAgICBleHBvcnRlcjogY21kLmV4cG9ydGVyIHx8ICdmaWxlJyxcbiAgICAgICAgcHJvdmlkZXI6IGNtZC5wcm92aWRlciB8fCAncG9zdGdyZXMnLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIER1bXAgdG8gbG9jYWwgZmlsZVxuICAgICAgYXdhaXQgZHVtcC5leHBvcnQoKTtcblxuICAgICAgdGhpcy5oZXJvYmFjay5sb2dnZXIuaW5mbygnU3VjY2VzcyEnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIHRoaXMuaGVyb2JhY2subG9nZ2VyLmVycm9yKGV4Y2VwdGlvbi5tZXNzYWdlKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyByZXN0b3JlKGZpbGU6IHN0cmluZywgdXJpOiBzdHJpbmcsIGNtZCkge1xuICAgIC8vIFByZXBhcmUgYSBoZXJvYmFjayBkdW1wIGluc3RhbmNlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3RvcmUgPSBhd2FpdCB0aGlzLmhlcm9iYWNrLnJlc3RvcmUoe1xuICAgICAgICB1cmksXG4gICAgICAgIGd6aXA6ICFjbWQuZ3ppcCxcbiAgICAgICAgYmFzZURpcjogY21kLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgcHJvdmlkZXI6IGNtZC5wcm92aWRlciB8fCAncG9zdGdyZXMnLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlc3RvcmUgZnJvbSBsb2NhbCBkdW1wXG4gICAgICBjb25zdCBkdW1wID0gYXdhaXQgU3RyZWFtLnJlYWQoeyBmaWxlTmFtZTogZmlsZSB9KTtcbiAgICAgIGF3YWl0IHJlc3RvcmUucnVuKGR1bXApO1xuXG4gICAgICB0aGlzLmhlcm9iYWNrLmxvZ2dlci5pbmZvKCdTdWNjZXNzIScpO1xuICAgICAgcHJvY2Vzcy5leGl0KDApO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgdGhpcy5oZXJvYmFjay5sb2dnZXIuZXJyb3IoZXhjZXB0aW9uLm1lc3NhZ2UpO1xuICAgICAgcHJvY2Vzcy5leGl0KC0xKTtcbiAgICB9XG4gIH1cbn1cblxuSGVyb2JhY2tCaW4uaW5pdCgpOyJdfQ==