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
class PostgresProvider extends base_1.HerobackProvider {
    constructor() {
        super(...arguments);
        this.ext = '.sql';
        this.uriDefaults = ({
            protocol: 'postgresql',
            host: 'localhost',
            port: '5432',
        });
    }
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                `--host=${this.uri.host}`,
                `--port=${this.uri.port}`,
                `--dbname=${this.uri.database}`,
            ];
            if (this.uri.username) {
                args.push(`--username=${this.uri.username}`);
            }
            let child;
            if (this.uri.password) {
                args.push(`--password`);
                child = child_process_1.spawn('bash');
                child.stdin.end(`$(echo ${this.uri.password + '\n'} | pg_dump ${args.join(' ')})`);
            }
            else {
                child = child_process_1.spawn('pg_dump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
            }
            return child;
        });
    }
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = PostgresProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdEO0FBS3hELE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO1FBRWIsZ0JBQVcsR0FBNkIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsWUFBWTtZQUN0QixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztJQWdDTCxDQUFDO0lBOUJDOztPQUVHO0lBQ1UsSUFBSSxDQUFDLFVBQXVCLEVBQUU7O1lBQ3pDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDaEMsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFFRCxJQUFJLEtBQUssQ0FBQztZQUVWLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssR0FBRyxxQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcscUJBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUU7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxJQUFrQjs7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQXZDRCxtQ0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBEdW1wT3B0aW9ucywgSGVyb2JhY2tQcm92aWRlciB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IEhlcm9iYWNrRHVtcCBmcm9tIFwiLi4vZHVtcFwiO1xuaW1wb3J0IHsgVXJpUGFyYW1zU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RncmVzUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5zcWwnO1xuXG4gIHVyaURlZmF1bHRzOiBQYXJ0aWFsPFVyaVBhcmFtc1NjaGVtYT4gPSAoe1xuICAgIHByb3RvY29sOiAncG9zdGdyZXNxbCcsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogJzU0MzInLFxuICB9KTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgcGdfZHVtcCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGR1bXAob3B0aW9uczogRHVtcE9wdGlvbnMgPSB7fSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHt0aGlzLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgYC0tZGJuYW1lPSR7dGhpcy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcm5hbWU9JHt0aGlzLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wYXNzd29yZGApO1xuICAgICAgY2hpbGQgPSBzcGF3bignYmFzaCcpO1xuICAgICAgY2hpbGQuc3RkaW4uZW5kKGAkKGVjaG8gJHt0aGlzLnVyaS5wYXNzd29yZCArICdcXG4nfSB8IHBnX2R1bXAgJHthcmdzLmpvaW4oJyAnKX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oJ3BnX2R1bXAnLCBhcmdzLCB7IHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBIZXJvYmFja0R1bXApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=