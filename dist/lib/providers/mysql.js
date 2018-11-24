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
class MySQLProvider extends base_1.HerobackProvider {
    constructor() {
        super(...arguments);
        this.ext = '.sql';
    }
    uriDefaults() {
        return {
            protocol: 'mysql',
            host: 'localhost',
            port: '3306',
        };
    }
    ;
    /**
     * Dumps the desired database using mysqldump child process.
     */
    dump() {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                `--host=${this.uri.host}`,
                `--port=${this.uri.port}`,
                `${this.uri.database}`,
            ];
            if (this.uri.username) {
                args.push(`--user=${this.uri.username}`);
            }
            if (this.uri.password) {
                args.push(`--password=${this.uri.password}`);
            }
            this.logger.debug('Dumping using "mysqldump" binary', { args });
            return child_process_1.spawn('mysqldump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
        });
    }
    /**
     * Restores the dump to the desired database using apsql child process.
     */
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                `--host=${this.uri.host}`,
                `--port=${this.uri.port}`,
                `${this.uri.database}`,
            ];
            if (this.uri.username) {
                args.push(`--user=${this.uri.username}`);
            }
            if (this.uri.password) {
                args.push(`--password=${this.uri.password}`);
            }
            this.logger.debug('Restoring using "mysqlimport" binary', { args });
            const child = child_process_1.spawn('mysqlimport', args, { stdio: ['pipe', 'pipe', 'inherit'] });
            dump.pipe(child.stdin);
            return child;
        });
    }
}
exports.default = MySQLProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL215c3FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLE1BQU0sQ0FBQztJQXdEZixDQUFDO0lBdERRLFdBQVc7UUFDaEIsT0FBTztZQUNMLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDVSxJQUFJOztZQUNmLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDdkIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8scUJBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsSUFBdUI7O1lBQzFDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDdkIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sS0FBSyxHQUFHLHFCQUFLLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWpGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0Y7QUF6REQsZ0NBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U1FMUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy5zcWwnO1xuXG4gIHB1YmxpYyB1cmlEZWZhdWx0cygpOiBQYXJ0aWFsPFV0aWxzLlVyaVBhcmFtc1NjaGVtYT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm90b2NvbDogJ215c3FsJyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogJzMzMDYnLFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgbXlzcWxkdW1wIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZHVtcCgpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICBgLS1ob3N0PSR7dGhpcy51cmkuaG9zdH1gLFxuICAgICAgYC0tcG9ydD0ke3RoaXMudXJpLnBvcnR9YCxcbiAgICAgIGAke3RoaXMudXJpLmRhdGFiYXNlfWAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtLXVzZXI9JHt0aGlzLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wYXNzd29yZD0ke3RoaXMudXJpLnBhc3N3b3JkfWApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEdW1waW5nIHVzaW5nIFwibXlzcWxkdW1wXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuICAgIHJldHVybiBzcGF3bignbXlzcWxkdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZXMgdGhlIGR1bXAgdG8gdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgYXBzcWwgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyByZXN0b3JlKGR1bXA6IFV0aWxzLklucHV0U3RyZWFtKTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICBjb25zdCBhcmdzID0gW1xuICAgICAgYC0taG9zdD0ke3RoaXMudXJpLmhvc3R9YCxcbiAgICAgIGAtLXBvcnQ9JHt0aGlzLnVyaS5wb3J0fWAsXG4gICAgICBgJHt0aGlzLnVyaS5kYXRhYmFzZX1gLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy51cmkudXNlcm5hbWUpIHtcbiAgICAgIGFyZ3MucHVzaChgLS11c2VyPSR7dGhpcy51cmkudXNlcm5hbWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBhcmdzLnB1c2goYC0tcGFzc3dvcmQ9JHt0aGlzLnVyaS5wYXNzd29yZH1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzdG9yaW5nIHVzaW5nIFwibXlzcWxpbXBvcnRcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG4gICAgY29uc3QgY2hpbGQgPSBzcGF3bignbXlzcWxpbXBvcnQnLCBhcmdzLCB7IHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG5cbiAgICBkdW1wLnBpcGUoY2hpbGQuc3RkaW4pO1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufSJdfQ==