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
                child = child_process_1.spawn('pg_dump', args, { shell: true, stdio: ['ignore', 'pipe', 'inherit'] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBc0VmLENBQUM7SUFwRVEsV0FBVztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLElBQUk7O1lBQ2YsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDekIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDekIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTthQUNoQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksS0FBSyxDQUFDO1lBRVYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTlELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxxQkFBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLFdBQVcsRUFBRSxJQUFJLEVBQUU7b0JBQy9ELEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcscUJBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2RjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsSUFBdUI7O1lBQzFDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7YUFDMUIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFFRCxJQUFJLEtBQUssQ0FBQztZQUVWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUU3RCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixLQUFLLEdBQUcscUJBQUssQ0FBQyxlQUFlLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUM1RCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztpQkFDbkMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLHFCQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZFO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQXZFRCxtQ0F1RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdGdyZXNQcm92aWRlciBleHRlbmRzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBleHQgPSAnLnNxbCc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXRpbHMuVXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAncG9zdGdyZXNxbCcsXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQ6ICc1NDMyJyxcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIER1bXBzIHRoZSBkZXNpcmVkIGRhdGFiYXNlIHVzaW5nIHBnX2R1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHt0aGlzLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgYC0tZGJuYW1lPSR7dGhpcy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcm5hbWU9JHt0aGlzLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRHVtcGluZyB1c2luZyBcInBnX2R1bXBcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oYFBHUEFTU1dPUkQ9XCIke3RoaXMudXJpLnBhc3N3b3JkfVwiIHBnX2R1bXBgLCBhcmdzLCB7XG4gICAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgICBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J11cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IHNwYXduKCdwZ19kdW1wJywgYXJncywgeyBzaGVsbDogdHJ1ZSwgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlcyB0aGUgZHVtcCB0byB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBhcHNxbCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlc3RvcmUoZHVtcDogVXRpbHMuSW5wdXRTdHJlYW0pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgJHt0aGlzLnVyaS5kYXRhYmFzZX1gLFxuICAgICAgYC0taG9zdD0ke3RoaXMudXJpLmhvc3R9YCxcbiAgICAgIGAtLXBvcnQ9JHt0aGlzLnVyaS5wb3J0fWAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtLXVzZXJuYW1lPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc3RvcmluZyB1c2luZyBcInBzcWxcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oYFBHUEFTU1dPUkQ9XCIke3RoaXMudXJpLnBhc3N3b3JkfVwiIHBzcWxgLCBhcmdzLCB7XG4gICAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgICBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaW5oZXJpdCddXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBzcGF3bigncHNxbCcsIGFyZ3MsIHsgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIH1cblxuICAgIGR1bXAucGlwZShjaGlsZC5zdGRpbik7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59Il19