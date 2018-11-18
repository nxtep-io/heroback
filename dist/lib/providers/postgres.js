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
    }
    uriDefaults() {
        return {
            protocol: 'postgresql',
            host: 'localhost',
            port: '5432',
        };
    }
    ;
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump() {
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
            this.logger.debug('Dumping using "pg_dump" binary', { args });
            if (this.uri.password) {
                child = child_process_1.spawn(`PGPASSWORD="${this.uri.password}" pg_dump`, args, {
                    shell: true,
                    stdio: ['ignore', 'pipe', 'inherit']
                });
            }
            else {
                child = child_process_1.spawn('pg_dump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
            }
            return child;
        });
    }
    /**
     * Restores the dump to the desired database using apsql child process.
     */
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                `${this.uri.database}`,
                `--host=${this.uri.host}`,
                `--port=${this.uri.port}`,
            ];
            if (this.uri.username) {
                args.push(`--username=${this.uri.username}`);
            }
            let child;
            this.logger.debug('Restoring using "psql" binary', { args });
            if (this.uri.password) {
                child = child_process_1.spawn(`PGPASSWORD="${this.uri.password}" psql`, args, {
                    shell: true,
                    stdio: ['pipe', 'pipe', 'inherit']
                });
            }
            else {
                child = child_process_1.spawn('psql', args, { stdio: ['ignore', 'pipe', 'inherit'] });
            }
            dump.pipe(child.stdin);
            return child;
        });
    }
}
exports.default = PostgresProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBc0VmLENBQUM7SUFwRVEsV0FBVztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLElBQUk7O1lBQ2YsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDekIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDekIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTthQUNoQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksS0FBSyxDQUFDO1lBRVYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTlELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxxQkFBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLFdBQVcsRUFBRSxJQUFJLEVBQUU7b0JBQy9ELEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcscUJBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUU7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1UsT0FBTyxDQUFDLElBQXVCOztZQUMxQyxNQUFNLElBQUksR0FBRztnQkFDWCxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN0QixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2FBQzFCLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxLQUFLLENBQUM7WUFFVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFFN0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsS0FBSyxHQUFHLHFCQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsUUFBUSxFQUFFLElBQUksRUFBRTtvQkFDNUQsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7aUJBQ25DLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxxQkFBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2RTtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0Y7QUF2RUQsbUNBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RncmVzUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5zcWwnO1xuXG4gIHB1YmxpYyB1cmlEZWZhdWx0cygpOiBQYXJ0aWFsPFV0aWxzLlVyaVBhcmFtc1NjaGVtYT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm90b2NvbDogJ3Bvc3RncmVzcWwnLFxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiAnNTQzMicsXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBwZ19kdW1wIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZHVtcCgpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgLS1ob3N0PSR7dGhpcy51cmkuaG9zdH1gLFxuICAgICAgYC0tcG9ydD0ke3RoaXMudXJpLnBvcnR9YCxcbiAgICAgIGAtLWRibmFtZT0ke3RoaXMudXJpLmRhdGFiYXNlfWAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtLXVzZXJuYW1lPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ0R1bXBpbmcgdXNpbmcgXCJwZ19kdW1wXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuXG4gICAgaWYgKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBjaGlsZCA9IHNwYXduKGBQR1BBU1NXT1JEPVwiJHt0aGlzLnVyaS5wYXNzd29yZH1cIiBwZ19kdW1wYCwgYXJncywge1xuICAgICAgICBzaGVsbDogdHJ1ZSxcbiAgICAgICAgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBzcGF3bigncGdfZHVtcCcsIGFyZ3MsIHsgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlcyB0aGUgZHVtcCB0byB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBhcHNxbCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlc3RvcmUoZHVtcDogVXRpbHMuSW5wdXRTdHJlYW0pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgJHt0aGlzLnVyaS5kYXRhYmFzZX1gLFxuICAgICAgYC0taG9zdD0ke3RoaXMudXJpLmhvc3R9YCxcbiAgICAgIGAtLXBvcnQ9JHt0aGlzLnVyaS5wb3J0fWAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtLXVzZXJuYW1lPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc3RvcmluZyB1c2luZyBcInBzcWxcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oYFBHUEFTU1dPUkQ9XCIke3RoaXMudXJpLnBhc3N3b3JkfVwiIHBzcWxgLCBhcmdzLCB7XG4gICAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgICBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaW5oZXJpdCddXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBzcGF3bigncHNxbCcsIGFyZ3MsIHsgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIH1cblxuICAgIGR1bXAucGlwZShjaGlsZC5zdGRpbik7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59Il19