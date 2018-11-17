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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUU5QixNQUFxQixXQUFXO0lBR3ZCLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDckIsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDBEQUEwRCxDQUFDO2FBQ3ZGLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSx3REFBd0QsQ0FBQzthQUM3RixNQUFNLENBQUMsMkJBQTJCLEVBQUUsZ0RBQWdELENBQUM7YUFDckYsTUFBTSxDQUFDLGVBQWUsRUFBRSw0Q0FBNEMsQ0FBQzthQUNyRSxNQUFNLENBQUMsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7O1lBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBUSxFQUFFLENBQUM7WUFFaEMsbUNBQW1DO1lBQ25DLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUMvQixHQUFHO29CQUNILElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7b0JBQ2xDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU07b0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLFVBQVU7aUJBQ3JDLENBQUMsQ0FBQztnQkFFSCxxQkFBcUI7Z0JBQ3JCLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVwQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sU0FBUyxFQUFFO2dCQUNsQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUM7S0FBQTs7QUFyQ3lCLG1CQUFPLEdBQW9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRHhGLDhCQXVDQztBQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICogYXMgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0ICogYXMgUGFja2FnZSBmcm9tICdwanNvbic7XG5pbXBvcnQgSGVyb2JhY2sgZnJvbSAnLi4vbGliJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tCaW4ge1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IHByb2dyYW06IHByb2dyYW0uQ29tbWFuZCA9IHByb2dyYW0udmVyc2lvbihQYWNrYWdlLnZlcnNpb24pO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICAvLyBQcmVwYXJlIGR1bXAgY29tbWFuZFxuICAgIHRoaXMucHJvZ3JhbVxuICAgICAgLmNvbW1hbmQoJ2R1bXAgPHVyaT4nKVxuICAgICAgLm9wdGlvbignLWQsIC0tZGVzdCBbcGF0aF0nLCAnVGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBmb3IgdGhlIGR1bXAgW0RlZmF1bHRzIHRvIGN3ZF0nKVxuICAgICAgLm9wdGlvbignLXAsIC0tcHJvdmlkZXIgW3Byb3ZpZGVyXScsICdVc2VzIHNwZWNpZmljIGRhdGFiYXNlIHByb3ZpZGVyIFtEZWZhdWx0cyB0byBwb3N0Z3Jlc10nKVxuICAgICAgLm9wdGlvbignLWUsIC0tZXhwb3J0ZXIgW2V4cG9ydGVyXScsICdVc2VzIHNwZWNpZmljIGR1bXAgZXhwb3J0ZXIgW0RlZmF1bHRzIHRvIGZpbGVdJylcbiAgICAgIC5vcHRpb24oJy16LCAtLW5vLWd6aXAnLCAnRGlzYWJsZXMgR1pJUCBjb21wcmVzc2lvbiBvZiB0aGUgZHVtcCBmaWxlJylcbiAgICAgIC5hY3Rpb24oYXN5bmMgKHVyaSwgY21kKSA9PiB0aGlzLmR1bXAodXJpLCBjbWQpKVxuXG4gICAgdGhpcy5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGR1bXAodXJpLCBjbWQpIHtcbiAgICBjb25zdCBoZXJvYmFjayA9IG5ldyBIZXJvYmFjaygpO1xuXG4gICAgLy8gUHJlcGFyZSBhIGhlcm9iYWNrIGR1bXAgaW5zdGFuY2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgZHVtcCA9IGF3YWl0IGhlcm9iYWNrLmR1bXAoe1xuICAgICAgICB1cmksXG4gICAgICAgIGd6aXA6ICFjbWQuZ3ppcCxcbiAgICAgICAgYmFzZURpcjogY21kLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgZXhwb3J0ZXI6IGNtZC5leHBvcnRlciB8fCAnZmlsZScsXG4gICAgICAgIHByb3ZpZGVyOiBjbWQucHJvdmlkZXIgfHwgJ3Bvc3RncmVzJyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEdW1wIHRvIGxvY2FsIGZpbGVcbiAgICAgIGF3YWl0IGR1bXAuZXhwb3J0KCk7XG5cbiAgICAgIGhlcm9iYWNrLmxvZ2dlci5pbmZvKCdTdWNjZXNzIScpO1xuICAgICAgcHJvY2Vzcy5leGl0KDApO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgaGVyb2JhY2subG9nZ2VyLmVycm9yKGV4Y2VwdGlvbi5tZXNzYWdlKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XG4gICAgfVxuICB9XG59XG5cbkhlcm9iYWNrQmluLmluaXQoKTsiXX0=