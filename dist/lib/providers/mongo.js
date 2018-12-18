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
            protocol: 'mongodb',
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
            const args = ['--archive'];
            if (this.uri.host !== this.uriDefaults().host) {
                args.push(`--uri="${this.uri.raw}"`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLFFBQVEsQ0FBQztJQW9EakIsQ0FBQztJQWxEUSxXQUFXO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsSUFBSTs7WUFDZixNQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoRSxPQUFPLHFCQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxJQUFpQjs7WUFDcEMsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsV0FBVztnQkFDWCxJQUFJO2dCQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUTthQUNsQixDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBRyxDQUFDO2FBQzFDO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsTUFBTSxLQUFLLEdBQUcscUJBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQXJERCxnQ0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSwgVXJpUGFyYW1zU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5tb25nbyc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAnbW9uZ29kYicsXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQ6ICcyNzAxNycsXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBtb25nb2R1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFsnLS1hcmNoaXZlJ107XG5cbiAgICBpZiAodGhpcy51cmkuaG9zdCAhPT0gdGhpcy51cmlEZWZhdWx0cygpLmhvc3QpIHtcbiAgICAgIGFyZ3MucHVzaChgLS11cmk9XCIke3RoaXMudXJpLnJhd31cImApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEdW1waW5nIHVzaW5nIFwibW9uZ29kdW1wXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuICAgIHJldHVybiBzcGF3bignbW9uZ29kdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBJbnB1dFN0cmVhbSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgICctLWFyY2hpdmUnLFxuICAgICAgYC1kYCxcbiAgICAgIHRoaXMudXJpLmRhdGFiYXNlLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy51cmkuaG9zdCAhPT0gdGhpcy51cmlEZWZhdWx0cygpLmhvc3QpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1ob3N0PVwiJHt0aGlzLnVyaS5ob3N0fVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnBvcnQgIT09IHRoaXMudXJpRGVmYXVsdHMoKS5wb3J0KSB7XG4gICAgICBhcmdzLnB1c2goYC0tcG9ydD1cIiR7dGhpcy51cmkucG9ydH1cImAsICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goJy11JywgdGhpcy51cmkudXNlcm5hbWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS5wYXNzd29yZCkge1xuICAgICAgYXJncy5wdXNoKCctcCcsIHRoaXMudXJpLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzdG9yaW5nIHVzaW5nIFwibW9uZ29yZXN0b3JlXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuICAgIGNvbnN0IGNoaWxkID0gc3Bhd24oJ21vbmdvcmVzdG9yZScsIGFyZ3MsIHsgc3RkaW86IFsncGlwZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgICBkdW1wLnBpcGUoY2hpbGQuc3RkaW4pO1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufSJdfQ==