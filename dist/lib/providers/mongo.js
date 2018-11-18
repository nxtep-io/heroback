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
    dump(options = {}) {
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
    restore(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.default = MongoProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdFO0FBSXhFLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLFFBQVEsQ0FBQztJQTJDakIsQ0FBQztJQXpDUSxXQUFXO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsSUFBSSxDQUFDLFVBQXVCLEVBQUU7O1lBQ3pDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFdBQVc7Z0JBQ1gsSUFBSTtnQkFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7YUFDbEIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUN4QztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUcsQ0FBQzthQUMxQztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8scUJBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLElBQWlCLEVBQUUsT0FBdUI7O1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0Y7QUE1Q0QsZ0NBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRHVtcE9wdGlvbnMsIEhlcm9iYWNrUHJvdmlkZXIsIFJlc3RvcmVPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBVcmlQYXJhbXNTY2hlbWEsIElucHV0U3RyZWFtIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5tb25nbyc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAnbW9uZ28nLFxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiAnMjcwMTcnLFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgbW9uZ29kdW1wIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZHVtcChvcHRpb25zOiBEdW1wT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICBjb25zdCBhcmdzID0gW1xuICAgICAgJy0tYXJjaGl2ZScsXG4gICAgICBgLWRgLFxuICAgICAgdGhpcy51cmkuZGF0YWJhc2UsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS5ob3N0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkuaG9zdCkge1xuICAgICAgYXJncy5wdXNoKGAtLWhvc3Q9XCIke3RoaXMudXJpLmhvc3R9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkucG9ydCAhPT0gdGhpcy51cmlEZWZhdWx0cygpLnBvcnQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wb3J0PVwiJHt0aGlzLnVyaS5wb3J0fVwiYCwgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkudXNlcm5hbWUpIHtcbiAgICAgIGFyZ3MucHVzaCgnLXUnLCB0aGlzLnVyaS51c2VybmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBhcmdzLnB1c2goJy1wJywgdGhpcy51cmkucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEdW1waW5nIHVzaW5nIFwibW9uZ29kdW1wXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuICAgIHJldHVybiBzcGF3bignbW9uZ29kdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBJbnB1dFN0cmVhbSwgb3B0aW9uczogUmVzdG9yZU9wdGlvbnMpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59Il19