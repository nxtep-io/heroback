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
                    gzip: !cmd.gzip,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUEwQztBQUUxQyxNQUFxQixXQUFXO0lBSXZCLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDckIsTUFBTSxDQUFDLDJCQUEyQixFQUFFLDZDQUE2QyxDQUFDO2FBQ2xGLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sR0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUEsR0FBQSxDQUFDLENBQUM7UUFHM0QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxPQUFPO2FBQ1QsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2FBQy9CLE1BQU0sQ0FBQyxlQUFlLEVBQUUsNENBQTRDLENBQUM7YUFDckUsTUFBTSxDQUFDLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxnREFBQyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUc7O1lBQ3ZDLG1DQUFtQztZQUNuQyxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLEdBQUc7b0JBQ0gsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTTtpQkFDakMsQ0FBQyxDQUFDO2dCQUVILHFCQUFxQjtnQkFDckIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBRzs7WUFDeEQsbUNBQW1DO1lBQ25DLElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDMUMsR0FBRztvQkFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO2lCQUNuQyxDQUFDLENBQUM7Z0JBRUgsMEJBQTBCO2dCQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLFlBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBOztBQTdEeUIsb0JBQVEsR0FBRyxJQUFJLGFBQVEsRUFBRSxDQUFDO0FBQzFCLG1CQUFPLEdBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRnhGLDhCQStEQztBQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICogYXMgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0ICogYXMgUGFja2FnZSBmcm9tICdwanNvbic7XG5pbXBvcnQgSGVyb2JhY2ssIHsgU3RyZWFtIH0gZnJvbSAnLi4vbGliJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tCaW4ge1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IGhlcm9iYWNrID0gbmV3IEhlcm9iYWNrKCk7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgcHJvZ3JhbTogcHJvZ3JhbS5Db21tYW5kID0gcHJvZ3JhbS52ZXJzaW9uKFBhY2thZ2UudmVyc2lvbik7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0KCkge1xuICAgIC8vIFByZXBhcmUgZHVtcCBjb21tYW5kXG4gICAgdGhpcy5wcm9ncmFtXG4gICAgICAuY29tbWFuZCgnZHVtcCA8dXJpPicpXG4gICAgICAub3B0aW9uKCctZSwgLS1leHBvcnRlciBbZXhwb3J0ZXJdJywgJ1RoZSBleHBvcnRlciB0byBiZSB1c2VkLCBkZWZhdWx0cyB0byBcImZpbGVcIicpXG4gICAgICAub3B0aW9uKCcteiwgLS1uby1nemlwJywgJ0Rpc2FibGVzIEdaSVAgY29tcHJlc3Npb24gb2YgdGhlIGR1bXAgZmlsZScpXG4gICAgICAuYWN0aW9uKGFzeW5jICh1cmk6IHN0cmluZywgY21kKSA9PiB0aGlzLmR1bXAodXJpLCBjbWQpKTtcblxuXG4gICAgLy8gUHJlcGFyZSByZXN0b3JlIGNvbW1hbmRcbiAgICB0aGlzLnByb2dyYW1cbiAgICAgIC5jb21tYW5kKCdyZXN0b3JlIDxmaWxlPiA8dXJpPicpXG4gICAgICAub3B0aW9uKCcteiwgLS1uby1nemlwJywgJ0Rpc2FibGVzIEdaSVAgY29tcHJlc3Npb24gb2YgdGhlIGR1bXAgZmlsZScpXG4gICAgICAuYWN0aW9uKGFzeW5jIChmaWxlLCB1cmksIGNtZCkgPT4gdGhpcy5yZXN0b3JlKGZpbGUsIHVyaSwgY21kKSk7XG5cbiAgICB0aGlzLnByb2dyYW0ucGFyc2UocHJvY2Vzcy5hcmd2KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZHVtcCh1cmk6IHN0cmluZywgY21kKSB7XG4gICAgLy8gUHJlcGFyZSBhIGhlcm9iYWNrIGR1bXAgaW5zdGFuY2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMuaGVyb2JhY2suZHVtcCh7XG4gICAgICAgIHVyaSxcbiAgICAgICAgZ3ppcDogIWNtZC5nemlwLFxuICAgICAgICBiYXNlRGlyOiBjbWQucGF0aCB8fCBwcm9jZXNzLmN3ZCgpLFxuICAgICAgICBleHBvcnRlcjogY21kLmV4cG9ydGVyIHx8ICdmaWxlJyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEdW1wIHRvIGxvY2FsIGZpbGVcbiAgICAgIGF3YWl0IGR1bXAuZXhwb3J0KCk7XG5cbiAgICAgIHRoaXMuaGVyb2JhY2subG9nZ2VyLmluZm8oJ1N1Y2Nlc3MhJyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICB0aGlzLmhlcm9iYWNrLmxvZ2dlci5lcnJvcihleGNlcHRpb24ubWVzc2FnZSk7XG4gICAgICBwcm9jZXNzLmV4aXQoLTEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVzdG9yZShmaWxlOiBzdHJpbmcsIHVyaTogc3RyaW5nLCBjbWQpIHtcbiAgICAvLyBQcmVwYXJlIGEgaGVyb2JhY2sgZHVtcCBpbnN0YW5jZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN0b3JlID0gYXdhaXQgdGhpcy5oZXJvYmFjay5yZXN0b3JlKHtcbiAgICAgICAgdXJpLFxuICAgICAgICBnemlwOiAhY21kLmd6aXAsXG4gICAgICAgIGJhc2VEaXI6IGNtZC5wYXRoIHx8IHByb2Nlc3MuY3dkKCksXG4gICAgICB9KTtcblxuICAgICAgLy8gUmVzdG9yZSBmcm9tIGxvY2FsIGR1bXBcbiAgICAgIGNvbnN0IGR1bXAgPSBhd2FpdCBTdHJlYW0ucmVhZCh7IGZpbGVOYW1lOiBmaWxlIH0pO1xuICAgICAgYXdhaXQgcmVzdG9yZS5pbXBvcnQoZHVtcCk7XG5cbiAgICAgIHRoaXMuaGVyb2JhY2subG9nZ2VyLmluZm8oJ1N1Y2Nlc3MhJyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICB0aGlzLmhlcm9iYWNrLmxvZ2dlci5lcnJvcihleGNlcHRpb24ubWVzc2FnZSk7XG4gICAgICBwcm9jZXNzLmV4aXQoLTEpO1xuICAgIH1cbiAgfVxufVxuXG5IZXJvYmFja0Jpbi5pbml0KCk7Il19