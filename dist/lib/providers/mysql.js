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
            throw new Error("Method not implemented for MySQL");
        });
    }
}
exports.default = MySQLProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL215c3FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQTJDO0FBSTNDLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLE1BQU0sQ0FBQztJQXVDZixDQUFDO0lBckNRLFdBQVc7UUFDaEIsT0FBTztZQUNMLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDVSxJQUFJOztZQUNmLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDdkIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8scUJBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsSUFBdUI7O1lBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7Q0FDRjtBQXhDRCxnQ0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlTUUxQcm92aWRlciBleHRlbmRzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBleHQgPSAnLnNxbCc7XG5cbiAgcHVibGljIHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXRpbHMuVXJpUGFyYW1zU2NoZW1hPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiAnbXlzcWwnLFxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiAnMzMwNicsXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBteXNxbGR1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHt0aGlzLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgYCR7dGhpcy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcj0ke3RoaXMudXJpLnVzZXJuYW1lfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS5wYXNzd29yZCkge1xuICAgICAgYXJncy5wdXNoKGAtLXBhc3N3b3JkPSR7dGhpcy51cmkucGFzc3dvcmR9YCk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRHVtcGluZyB1c2luZyBcIm15c3FsZHVtcFwiIGJpbmFyeScsIHsgYXJncyB9KTtcbiAgICByZXR1cm4gc3Bhd24oJ215c3FsZHVtcCcsIGFyZ3MsIHsgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmVzIHRoZSBkdW1wIHRvIHRoZSBkZXNpcmVkIGRhdGFiYXNlIHVzaW5nIGFwc3FsIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBVdGlscy5JbnB1dFN0cmVhbSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZCBmb3IgTXlTUUxcIik7XG4gIH1cbn0iXX0=