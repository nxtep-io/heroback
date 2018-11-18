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
const child_process_1 = require("child_process");
const base_1 = require("../base");
class MongoProvider extends base_1.HerobackProvider {
    constructor() {
        super(...arguments);
        this.ext = '.mongo';
    }
    uriDefaults() {
        return {
            protocol: 'mongo',
            host: 'localhost',
            port: '27017',
        };
    }
    ;
    /**
     * Dumps the desired database using mongodump child process.
     */
    dump() {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                '--archive',
                `-d`,
                this.uri.database,
            ];
            if (this.uri.host !== this.uriDefaults().host) {
                args.push(`--host="${this.uri.host}"`);
            }
            if (this.uri.port !== this.uriDefaults().port) {
                args.push(`--port="${this.uri.port}"`);
            }
            if (this.uri.username) {
                args.push('-u', this.uri.username);
            }
            if (this.uri.password) {
                args.push('-p', this.uri.password);
            }
            this.logger.debug('Dumping using "mongodump" binary', { args });
            return child_process_1.spawn('mongodump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
        });
    }
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                '--archive',
                `-d`,
                this.uri.database,
            ];
            if (this.uri.host !== this.uriDefaults().host) {
                args.push(`--host="${this.uri.host}"`);
            }
            if (this.uri.port !== this.uriDefaults().port) {
                args.push(`--port="${this.uri.port}"`);
            }
            if (this.uri.username) {
                args.push('-u', this.uri.username);
            }
            if (this.uri.password) {
                args.push('-p', this.uri.password);
            }
            this.logger.debug('Restoring using "mongorestore" binary', { args });
            const child = child_process_1.spawn('mongorestore', args, { stdio: ['pipe', 'pipe', 'inherit'] });
            dump.pipe(child.stdin);
            return child;
        });
    }
}
exports.default = MongoProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLFFBQVEsQ0FBQztJQW9FakIsQ0FBQztJQWxFUSxXQUFXO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsSUFBSTs7WUFDZixNQUFNLElBQUksR0FBRztnQkFDWCxXQUFXO2dCQUNYLElBQUk7Z0JBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO2FBQ2xCLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7YUFDeEM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFHLENBQUM7YUFDMUM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoRSxPQUFPLHFCQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxJQUFpQjs7WUFDcEMsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsV0FBVztnQkFDWCxJQUFJO2dCQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUTthQUNsQixDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBRyxDQUFDO2FBQzFDO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsTUFBTSxLQUFLLEdBQUcscUJBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQXJFRCxnQ0FxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSwgVXJpUGFyYW1zU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5tb25nbyc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAnbW9uZ28nLFxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiAnMjcwMTcnLFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgbW9uZ29kdW1wIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZHVtcCgpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAnLS1hcmNoaXZlJyxcbiAgICAgIGAtZGAsXG4gICAgICB0aGlzLnVyaS5kYXRhYmFzZSxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLmhvc3QgIT09IHRoaXMudXJpRGVmYXVsdHMoKS5ob3N0KSB7XG4gICAgICBhcmdzLnB1c2goYC0taG9zdD1cIiR7dGhpcy51cmkuaG9zdH1cImApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS5wb3J0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkucG9ydCkge1xuICAgICAgYXJncy5wdXNoKGAtLXBvcnQ9XCIke3RoaXMudXJpLnBvcnR9XCJgLCApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKCctdScsIHRoaXMudXJpLnVzZXJuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaCgnLXAnLCB0aGlzLnVyaS5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ0R1bXBpbmcgdXNpbmcgXCJtb25nb2R1bXBcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG4gICAgcmV0dXJuIHNwYXduKCdtb25nb2R1bXAnLCBhcmdzLCB7IHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZXN0b3JlKGR1bXA6IElucHV0U3RyZWFtKTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICBjb25zdCBhcmdzID0gW1xuICAgICAgJy0tYXJjaGl2ZScsXG4gICAgICBgLWRgLFxuICAgICAgdGhpcy51cmkuZGF0YWJhc2UsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS5ob3N0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkuaG9zdCkge1xuICAgICAgYXJncy5wdXNoKGAtLWhvc3Q9XCIke3RoaXMudXJpLmhvc3R9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkucG9ydCAhPT0gdGhpcy51cmlEZWZhdWx0cygpLnBvcnQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wb3J0PVwiJHt0aGlzLnVyaS5wb3J0fVwiYCwgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkudXNlcm5hbWUpIHtcbiAgICAgIGFyZ3MucHVzaCgnLXUnLCB0aGlzLnVyaS51c2VybmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBhcmdzLnB1c2goJy1wJywgdGhpcy51cmkucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXN0b3JpbmcgdXNpbmcgXCJtb25nb3Jlc3RvcmVcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG4gICAgY29uc3QgY2hpbGQgPSBzcGF3bignbW9uZ29yZXN0b3JlJywgYXJncywgeyBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIGR1bXAucGlwZShjaGlsZC5zdGRpbik7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59Il19