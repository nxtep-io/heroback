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
    restore(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                return dump.on('open', () => __awaiter(this, void 0, void 0, function* () {
                    const args = [
                        `${this.uri.database}`,
                        `--host=${this.uri.host}`,
                        `--port=${this.uri.port}`,
                    ];
                    if (this.uri.username) {
                        args.push(`--username=${this.uri.username}`);
                    }
                    const child = child_process_1.spawn('psql', args, { stdio: ['pipe', 'pipe', 'inherit'] });
                    dump.pipe(child.stdin);
                    child.on('exit', () => resolve(true));
                }));
            }));
        });
    }
}
exports.default = PostgresProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdFO0FBSXhFLE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBc0RmLENBQUM7SUFwRFEsV0FBVztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLElBQUksQ0FBQyxVQUF1QixFQUFFOztZQUN6QyxNQUFNLElBQUksR0FBRztnQkFDWCxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2FBQ2hDLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxLQUFLLENBQUM7WUFFVixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QixLQUFLLEdBQUcscUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLHFCQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsSUFBdUIsRUFBRSxPQUF1Qjs7WUFDbkUsT0FBTyxJQUFJLE9BQU8sQ0FBVSxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFBQyxPQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQVMsRUFBRTtvQkFDaEYsTUFBTSxJQUFJLEdBQUc7d0JBQ1gsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDdEIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTt3QkFDekIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtxQkFDMUIsQ0FBQztvQkFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUM5QztvQkFFRCxNQUFNLEtBQUssR0FBRyxxQkFBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUEsQ0FBQyxDQUFBO2NBQUEsQ0FBQyxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0Y7QUF2REQsbUNBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRHVtcE9wdGlvbnMsIEhlcm9iYWNrUHJvdmlkZXIsIFJlc3RvcmVPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdGdyZXNQcm92aWRlciBleHRlbmRzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBleHQgPSAnLnNxbCc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXRpbHMuVXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAncG9zdGdyZXNxbCcsXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQ6ICc1NDMyJyxcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIER1bXBzIHRoZSBkZXNpcmVkIGRhdGFiYXNlIHVzaW5nIHBnX2R1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IER1bXBPcHRpb25zID0ge30pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgLS1ob3N0PSR7dGhpcy51cmkuaG9zdH1gLFxuICAgICAgYC0tcG9ydD0ke3RoaXMudXJpLnBvcnR9YCxcbiAgICAgIGAtLWRibmFtZT0ke3RoaXMudXJpLmRhdGFiYXNlfWAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtLXVzZXJuYW1lPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBhcmdzLnB1c2goYC0tcGFzc3dvcmRgKTtcbiAgICAgIGNoaWxkID0gc3Bhd24oJ2Jhc2gnKTtcbiAgICAgIGNoaWxkLnN0ZGluLmVuZChgJChlY2hvICR7dGhpcy51cmkucGFzc3dvcmQgKyAnXFxuJ30gfCBwZ19kdW1wICR7YXJncy5qb2luKCcgJyl9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IHNwYXduKCdwZ19kdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlc3RvcmUoZHVtcDogVXRpbHMuSW5wdXRTdHJlYW0sIG9wdGlvbnM6IFJlc3RvcmVPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IGR1bXAub24oJ29wZW4nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhcmdzID0gW1xuICAgICAgICBgJHt0aGlzLnVyaS5kYXRhYmFzZX1gLFxuICAgICAgICBgLS1ob3N0PSR7dGhpcy51cmkuaG9zdH1gLFxuICAgICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgXTtcbiAgXG4gICAgICBpZiAodGhpcy51cmkudXNlcm5hbWUpIHtcbiAgICAgICAgYXJncy5wdXNoKGAtLXVzZXJuYW1lPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gc3Bhd24oJ3BzcWwnLCBhcmdzLCB7IHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gICAgICBkdW1wLnBpcGUoY2hpbGQuc3RkaW4pO1xuICAgICAgY2hpbGQub24oJ2V4aXQnLCAoKSA9PiByZXNvbHZlKHRydWUpKTtcbiAgICB9KSk7XG4gIH1cbn0iXX0=