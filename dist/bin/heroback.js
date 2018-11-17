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
            .command('dump <uri>', 'Dumps a database based on its URI')
            .option('-d, --dest [path]', 'The destination directory for the dump [Defaults to cwd]')
            .option('-p, --provider [provider]', 'Uses specific database provider [Defaults to postgres]')
            .option('-e, --exporter [exporter]', 'Uses specific dump exporter [Defaults to file]')
            .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
            .action((uri, cmd) => __awaiter(this, void 0, void 0, function* () { return this.dump(uri, cmd); }));
        this.program.parse(process.argv);
    }
    static dump(uri, cmd) {
        return __awaiter(this, void 0, void 0, function* () {
            const heroback = new lib_1.default();
            // Prepare a heroback dump instance
            try {
                const dump = yield heroback.dump({
                    uri,
                    gzip: !cmd.gzip,
                    baseDir: cmd.path || process.cwd(),
                    exporter: cmd.exporter || 'file',
                    provider: cmd.provider || 'postgres',
                });
                // Dump to local file
                yield dump.export();
                heroback.logger.info('Success!');
                process.exit(0);
            }
            catch (exception) {
                heroback.logger.error(exception.message);
                process.exit(-1);
            }
        });
    }
}
HerobackBin.program = program.version(Package.version);
exports.default = HerobackBin;
HerobackBin.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUU5QixNQUFxQixXQUFXO0lBR3ZCLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLENBQUM7YUFDMUQsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDBEQUEwRCxDQUFDO2FBQ3ZGLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSx3REFBd0QsQ0FBQzthQUM3RixNQUFNLENBQUMsMkJBQTJCLEVBQUUsZ0RBQWdELENBQUM7YUFDckYsTUFBTSxDQUFDLGVBQWUsRUFBRSw0Q0FBNEMsQ0FBQzthQUNyRSxNQUFNLENBQUMsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7O1lBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBUSxFQUFFLENBQUM7WUFFaEMsbUNBQW1DO1lBQ25DLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUMvQixHQUFHO29CQUNILElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7b0JBQ2xDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU07b0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLFVBQVU7aUJBQ3JDLENBQUMsQ0FBQztnQkFFSCxxQkFBcUI7Z0JBQ3JCLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVwQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNsQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUM7S0FBQTs7QUFyQ3lCLG1CQUFPLEdBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRHhGLDhCQXVDQztBQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICogYXMgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0ICogYXMgUGFja2FnZSBmcm9tICdwanNvbic7XG5pbXBvcnQgSGVyb2JhY2sgZnJvbSAnLi4vbGliJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tCaW4ge1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IHByb2dyYW06IHByb2dyYW0uQ29tbWFuZCA9IHByb2dyYW0udmVyc2lvbihQYWNrYWdlLnZlcnNpb24pO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICAvLyBQcmVwYXJlIGR1bXAgY29tbWFuZFxuICAgIHRoaXMucHJvZ3JhbVxuICAgICAgLmNvbW1hbmQoJ2R1bXAgPHVyaT4nLCAnRHVtcHMgYSBkYXRhYmFzZSBiYXNlZCBvbiBpdHMgVVJJJylcbiAgICAgIC5vcHRpb24oJy1kLCAtLWRlc3QgW3BhdGhdJywgJ1RoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgZm9yIHRoZSBkdW1wIFtEZWZhdWx0cyB0byBjd2RdJylcbiAgICAgIC5vcHRpb24oJy1wLCAtLXByb3ZpZGVyIFtwcm92aWRlcl0nLCAnVXNlcyBzcGVjaWZpYyBkYXRhYmFzZSBwcm92aWRlciBbRGVmYXVsdHMgdG8gcG9zdGdyZXNdJylcbiAgICAgIC5vcHRpb24oJy1lLCAtLWV4cG9ydGVyIFtleHBvcnRlcl0nLCAnVXNlcyBzcGVjaWZpYyBkdW1wIGV4cG9ydGVyIFtEZWZhdWx0cyB0byBmaWxlXScpXG4gICAgICAub3B0aW9uKCcteiwgLS1uby1nemlwJywgJ0Rpc2FibGVzIEdaSVAgY29tcHJlc3Npb24gb2YgdGhlIGR1bXAgZmlsZScpXG4gICAgICAuYWN0aW9uKGFzeW5jICh1cmksIGNtZCkgPT4gdGhpcy5kdW1wKHVyaSwgY21kKSlcblxuICAgIHRoaXMucHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBkdW1wKHVyaSwgY21kKSB7XG4gICAgY29uc3QgaGVyb2JhY2sgPSBuZXcgSGVyb2JhY2soKTtcblxuICAgIC8vIFByZXBhcmUgYSBoZXJvYmFjayBkdW1wIGluc3RhbmNlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGR1bXAgPSBhd2FpdCBoZXJvYmFjay5kdW1wKHtcbiAgICAgICAgdXJpLFxuICAgICAgICBnemlwOiAhY21kLmd6aXAsXG4gICAgICAgIGJhc2VEaXI6IGNtZC5wYXRoIHx8IHByb2Nlc3MuY3dkKCksXG4gICAgICAgIGV4cG9ydGVyOiBjbWQuZXhwb3J0ZXIgfHwgJ2ZpbGUnLFxuICAgICAgICBwcm92aWRlcjogY21kLnByb3ZpZGVyIHx8ICdwb3N0Z3JlcycsXG4gICAgICB9KTtcblxuICAgICAgLy8gRHVtcCB0byBsb2NhbCBmaWxlXG4gICAgICBhd2FpdCBkdW1wLmV4cG9ydCgpO1xuXG4gICAgICBoZXJvYmFjay5sb2dnZXIuaW5mbygnU3VjY2VzcyEnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGhlcm9iYWNrLmxvZ2dlci5lcnJvcihleGNlcHRpb24ubWVzc2FnZSk7XG4gICAgICBwcm9jZXNzLmV4aXQoLTEpO1xuICAgIH1cbiAgfVxufVxuXG5IZXJvYmFja0Jpbi5pbml0KCk7Il19