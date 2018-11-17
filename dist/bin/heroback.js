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
    constructor() {
        this.program = program.version(Package.version);
        this.program
            .command('dump <uri>')
            .option('-p, --provider [provider]', 'Uses specific database provider [Defaults to postgres]')
            .option('-e, --exporter [exporter]', 'Uses specific dump exporter [Defaults to file]')
            .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
            .action((uri, cmd) => __awaiter(this, void 0, void 0, function* () {
            const heroback = new lib_1.default();
            // Prepare a heroback dump instance
            const dump = yield heroback.dump({
                uri,
                gzip: !cmd.gzip,
                baseDir: process.cwd(),
                exporter: cmd.exporter || 'file',
                provider: cmd.provider || 'postgres',
            });
            // Dump to local file
            yield dump.export();
            console.log('Dumped database to local file!');
        }));
        this.program.parse(process.argv);
    }
}
exports.default = HerobackBin;
new HerobackBin();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUU5QixNQUFxQixXQUFXO0lBRzlCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsT0FBTzthQUNULE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDckIsTUFBTSxDQUFDLDJCQUEyQixFQUFFLHdEQUF3RCxDQUFDO2FBQzdGLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxnREFBZ0QsQ0FBQzthQUNyRixNQUFNLENBQUMsZUFBZSxFQUFFLDRDQUE0QyxDQUFDO2FBQ3JFLE1BQU0sQ0FBQyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQVEsRUFBRSxDQUFDO1lBRWhDLG1DQUFtQztZQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLEdBQUc7Z0JBQ0gsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU07Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLFVBQVU7YUFDckMsQ0FBQyxDQUFDO1lBRUgscUJBQXFCO1lBQ3JCLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBRUosSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQTlCRCw4QkE4QkM7QUFFRCxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgKiBhcyBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5pbXBvcnQgKiBhcyBQYWNrYWdlIGZyb20gJ3Bqc29uJztcbmltcG9ydCBIZXJvYmFjayBmcm9tICcuLi9saWInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFja0JpbiB7XG4gIHByb2dyYW06IHByb2dyYW0uQ29tbWFuZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtLnZlcnNpb24oUGFja2FnZS52ZXJzaW9uKTtcblxuICAgIHRoaXMucHJvZ3JhbVxuICAgICAgLmNvbW1hbmQoJ2R1bXAgPHVyaT4nKVxuICAgICAgLm9wdGlvbignLXAsIC0tcHJvdmlkZXIgW3Byb3ZpZGVyXScsICdVc2VzIHNwZWNpZmljIGRhdGFiYXNlIHByb3ZpZGVyIFtEZWZhdWx0cyB0byBwb3N0Z3Jlc10nKVxuICAgICAgLm9wdGlvbignLWUsIC0tZXhwb3J0ZXIgW2V4cG9ydGVyXScsICdVc2VzIHNwZWNpZmljIGR1bXAgZXhwb3J0ZXIgW0RlZmF1bHRzIHRvIGZpbGVdJylcbiAgICAgIC5vcHRpb24oJy16LCAtLW5vLWd6aXAnLCAnRGlzYWJsZXMgR1pJUCBjb21wcmVzc2lvbiBvZiB0aGUgZHVtcCBmaWxlJylcbiAgICAgIC5hY3Rpb24oYXN5bmMgKHVyaSwgY21kKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlcm9iYWNrID0gbmV3IEhlcm9iYWNrKCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBhIGhlcm9iYWNrIGR1bXAgaW5zdGFuY2VcbiAgICAgICAgY29uc3QgZHVtcCA9IGF3YWl0IGhlcm9iYWNrLmR1bXAoe1xuICAgICAgICAgIHVyaSxcbiAgICAgICAgICBnemlwOiAhY21kLmd6aXAsXG4gICAgICAgICAgYmFzZURpcjogcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgICBleHBvcnRlcjogY21kLmV4cG9ydGVyIHx8ICdmaWxlJyxcbiAgICAgICAgICBwcm92aWRlcjogY21kLnByb3ZpZGVyIHx8ICdwb3N0Z3JlcycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIER1bXAgdG8gbG9jYWwgZmlsZVxuICAgICAgICBhd2FpdCBkdW1wLmV4cG9ydCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnRHVtcGVkIGRhdGFiYXNlIHRvIGxvY2FsIGZpbGUhJyk7XG4gICAgICB9KVxuXG4gICAgdGhpcy5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG4gIH1cbn1cblxubmV3IEhlcm9iYWNrQmluKCk7Il19