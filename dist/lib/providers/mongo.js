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
        this.ext = '.zip';
        this.uriDefaults = ({
            protocol: 'mongo',
            host: 'localhost',
            port: '27017',
        });
    }
    /**
     * Dumps the desired database using mongodump child process.
     */
    dump(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                '--archive',
                '--dumpDbUsersAndRoles',
                `--port="${this.uri.port}"`,
                `-h "${this.uri.host}"`,
                `-d "${this.uri.database}"`,
            ];
            if (this.uri.username) {
                args.push(`-u ${this.uri.username}`);
            }
            if (this.uri.password) {
                args.push(`-p "${this.uri.password}"`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFFcEQsa0NBQXdEO0FBSXhELE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLE1BQU0sQ0FBQztRQUViLGdCQUFXLEdBQTZCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE9BQU87WUFDakIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQUM7SUE0QkwsQ0FBQztJQTFCQzs7T0FFRztJQUNVLElBQUksQ0FBQyxVQUF1QixFQUFFOztZQUN6QyxNQUFNLElBQUksR0FBRztnQkFDWCxXQUFXO2dCQUNYLHVCQUF1QjtnQkFDdkIsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDdkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRzthQUM1QixDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN0QztZQUVELElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDeEM7WUFFRCxPQUFPLHFCQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxJQUFrQjs7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQW5DRCxnQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgSGVyb2JhY2tEdW1wIGZyb20gXCIuLi9kdW1wXCI7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyLCBEdW1wT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgVXJpUGFyYW1zU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvdmlkZXIgZXh0ZW5kcyBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgZXh0ID0gJy56aXAnO1xuXG4gIHVyaURlZmF1bHRzOiBQYXJ0aWFsPFVyaVBhcmFtc1NjaGVtYT4gPSAoe1xuICAgIHByb3RvY29sOiAnbW9uZ28nLFxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6ICcyNzAxNycsXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBtb25nb2R1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IER1bXBPcHRpb25zID0ge30pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAnLS1hcmNoaXZlJyxcbiAgICAgICctLWR1bXBEYlVzZXJzQW5kUm9sZXMnLFxuICAgICAgYC0tcG9ydD1cIiR7dGhpcy51cmkucG9ydH1cImAsXG4gICAgICBgLWggXCIke3RoaXMudXJpLmhvc3R9XCJgLFxuICAgICAgYC1kIFwiJHt0aGlzLnVyaS5kYXRhYmFzZX1cImAsXG4gICAgXTtcblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKGAtdSAke3RoaXMudXJpLnVzZXJuYW1lfWApO1xuICAgIH1cblxuICAgIGlmKHRoaXMudXJpLnBhc3N3b3JkKSB7XG4gICAgICBhcmdzLnB1c2goYC1wIFwiJHt0aGlzLnVyaS5wYXNzd29yZH1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzcGF3bignbW9uZ29kdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBIZXJvYmFja0R1bXApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=