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
    restore(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = MongoProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL21vbmdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdFO0FBSXhFLE1BQXFCLGFBQWMsU0FBUSx1QkFBZ0I7SUFBM0Q7O1FBQ0UsUUFBRyxHQUFHLFFBQVEsQ0FBQztJQTBDakIsQ0FBQztJQXhDUSxXQUFXO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsSUFBSSxDQUFDLFVBQXVCLEVBQUU7O1lBQ3pDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFdBQVc7Z0JBQ1gsSUFBSTtnQkFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7YUFDbEIsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUN4QztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUcsQ0FBQzthQUMxQztZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsT0FBTyxxQkFBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RSxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsSUFBaUIsRUFBRSxPQUF1Qjs7WUFDN0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRjtBQTNDRCxnQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBEdW1wT3B0aW9ucywgSGVyb2JhY2tQcm92aWRlciwgUmVzdG9yZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IFVyaVBhcmFtc1NjaGVtYSwgSW5wdXRTdHJlYW0gfSBmcm9tICcuLi91dGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ29Qcm92aWRlciBleHRlbmRzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBleHQgPSAnLm1vbmdvJztcblxuICBwdWJsaWMgdXJpRGVmYXVsdHMoKTogUGFydGlhbDxVcmlQYXJhbXNTY2hlbWE+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdG9jb2w6ICdtb25nbycsXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQ6ICcyNzAxNycsXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBtb25nb2R1bXAgY2hpbGQgcHJvY2Vzcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IER1bXBPcHRpb25zID0ge30pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAnLS1hcmNoaXZlJyxcbiAgICAgIGAtZGAsXG4gICAgICB0aGlzLnVyaS5kYXRhYmFzZSxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLmhvc3QgIT09IHRoaXMudXJpRGVmYXVsdHMoKS5ob3N0KSB7XG4gICAgICBhcmdzLnB1c2goYC0taG9zdD1cIiR7dGhpcy51cmkuaG9zdH1cImApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS5wb3J0ICE9PSB0aGlzLnVyaURlZmF1bHRzKCkucG9ydCkge1xuICAgICAgYXJncy5wdXNoKGAtLXBvcnQ9XCIke3RoaXMudXJpLnBvcnR9XCJgLCApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVyaS51c2VybmFtZSkge1xuICAgICAgYXJncy5wdXNoKCctdScsIHRoaXMudXJpLnVzZXJuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaCgnLXAnLCB0aGlzLnVyaS5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYXduKCdtb25nb2R1bXAnLCBhcmdzLCB7IHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZXN0b3JlKGR1bXA6IElucHV0U3RyZWFtLCBvcHRpb25zOiBSZXN0b3JlT3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==