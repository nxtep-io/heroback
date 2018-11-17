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
            return child_process_1.spawn('mongodump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
        });
    }
    restore(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = MongoProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFFcEQsa0NBQXdEO0FBSXhELE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLFFBQVEsQ0FBQztJQTBDakIsQ0FBQztJQXhDUSxXQUFXO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsSUFBSSxDQUFDLFVBQXVCLEVBQUU7O1lBQ3pDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFdBQVc7Z0JBQ1gsSUFBSTtnQkFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7YUFDbEIsQ0FBQztZQUVGLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUN4QztZQUVELElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUUsQ0FBQzthQUN6QztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsT0FBTyxxQkFBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RSxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsSUFBa0I7O1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0Y7QUEzQ0QsZ0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IEhlcm9iYWNrRHVtcCBmcm9tIFwiLi4vZHVtcFwiO1xuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciwgRHVtcE9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IFVyaVBhcmFtc1NjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nb1Byb3ZpZGVyIGV4dGVuZHMgSGVyb2JhY2tQcm92aWRlciB7XG4gIGV4dCA9ICcubW9uZ28nO1xuXG4gIHB1YmxpYyB1cmlEZWZhdWx0cygpOiBQYXJ0aWFsPFVyaVBhcmFtc1NjaGVtYT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm90b2NvbDogJ21vbmdvJyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogJzI3MDE3JyxcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIER1bXBzIHRoZSBkZXNpcmVkIGRhdGFiYXNlIHVzaW5nIG1vbmdvZHVtcCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGR1bXAob3B0aW9uczogRHVtcE9wdGlvbnMgPSB7fSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgICctLWFyY2hpdmUnLFxuICAgICAgYC1kYCxcbiAgICAgIHRoaXMudXJpLmRhdGFiYXNlLFxuICAgIF07XG5cbiAgICBpZih0aGlzLnVyaS5ob3N0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkuaG9zdCkge1xuICAgICAgYXJncy5wdXNoKGAtLWhvc3Q9XCIke3RoaXMudXJpLmhvc3R9XCJgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnVyaS5wb3J0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkucG9ydCkge1xuICAgICAgYXJncy5wdXNoKGAtLXBvcnQ9XCIke3RoaXMudXJpLnBvcnR9XCJgLCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goJy11JywgdGhpcy51cmkudXNlcm5hbWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS5wYXNzd29yZCkge1xuICAgICAgYXJncy5wdXNoKCctcCcsIHRoaXMudXJpLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Bhd24oJ21vbmdvZHVtcCcsIGFyZ3MsIHsgc3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlc3RvcmUoZHVtcDogSGVyb2JhY2tEdW1wKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19