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
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = PostgresProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdEO0FBS3hELE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBd0NmLENBQUM7SUF0Q1EsV0FBVztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLElBQUksQ0FBQyxVQUF1QixFQUFFOztZQUN6QyxNQUFNLElBQUksR0FBRztnQkFDWCxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2FBQ2hDLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxLQUFLLENBQUM7WUFFVixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QixLQUFLLEdBQUcscUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLHFCQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsSUFBa0I7O1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0Y7QUF6Q0QsbUNBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRHVtcE9wdGlvbnMsIEhlcm9iYWNrUHJvdmlkZXIgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCBIZXJvYmFja0R1bXAgZnJvbSBcIi4uL2R1bXBcIjtcbmltcG9ydCB7IFVyaVBhcmFtc1NjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Z3Jlc1Byb3ZpZGVyIGV4dGVuZHMgSGVyb2JhY2tQcm92aWRlciB7XG4gIGV4dCA9ICcuc3FsJztcblxuICBwdWJsaWMgdXJpRGVmYXVsdHMoKTogUGFydGlhbDxVcmlQYXJhbXNTY2hlbWE+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdG9jb2w6ICdwb3N0Z3Jlc3FsJyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogJzU0MzInLFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgcGdfZHVtcCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGR1bXAob3B0aW9uczogRHVtcE9wdGlvbnMgPSB7fSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHt0aGlzLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgYC0tZGJuYW1lPSR7dGhpcy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcm5hbWU9JHt0aGlzLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wYXNzd29yZGApO1xuICAgICAgY2hpbGQgPSBzcGF3bignYmFzaCcpO1xuICAgICAgY2hpbGQuc3RkaW4uZW5kKGAkKGVjaG8gJHt0aGlzLnVyaS5wYXNzd29yZCArICdcXG4nfSB8IHBnX2R1bXAgJHthcmdzLmpvaW4oJyAnKX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oJ3BnX2R1bXAnLCBhcmdzLCB7IHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBIZXJvYmFja0R1bXApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=