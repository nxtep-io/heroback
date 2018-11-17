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
const base_1 = require("./base");
class PostgresProvider extends base_1.default {
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = [
                `--host=${options.uri.host}`,
                `--port=${options.uri.port}`,
                `--dbname=${options.uri.database}`,
            ];
            if (options.uri.username) {
                args.push(`--username=${options.uri.username}`);
            }
            let child;
            if (options.uri.password) {
                args.push(`--password`);
                child = child_process_1.spawn('bash');
                child.stdin.end(`$(echo ${options.uri.password + '\n'} | pg_dump ${args.join(' ')})`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFHcEQsaUNBQXVEO0FBSXZELE1BQXFCLGdCQUFpQixTQUFRLGNBQWdCO0lBQzVEOztPQUVHO0lBQ1UsSUFBSSxDQUFDLE9BQW9COztZQUNwQyxNQUFNLElBQUksR0FBRztnQkFDWCxVQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUM1QixVQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUM1QixZQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2FBQ25DLENBQUM7WUFFRixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1lBRUQsSUFBSSxLQUFLLENBQUM7WUFFVixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QixLQUFLLEdBQUcscUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkY7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLHFCQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsSUFBa0I7O1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0Y7QUEvQkQsbUNBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgV3JpdGVTdHJlYW0gfSBmcm9tICdmcyc7XG5pbXBvcnQgSGVyb2JhY2tEdW1wIGZyb20gXCIuLi9kdW1wXCI7XG5pbXBvcnQgSGVyb2JhY2tQcm92aWRlciwgeyBEdW1wT3B0aW9ucyB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IFdyaXRhYmxlIH0gZnJvbSAnc3RyZWFtJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Z3Jlc1Byb3ZpZGVyIGV4dGVuZHMgSGVyb2JhY2tQcm92aWRlciB7XG4gIC8qKlxuICAgKiBEdW1wcyB0aGUgZGVzaXJlZCBkYXRhYmFzZSB1c2luZyBwZ19kdW1wIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZHVtcChvcHRpb25zOiBEdW1wT3B0aW9ucyk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHtvcHRpb25zLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7b3B0aW9ucy51cmkucG9ydH1gLFxuICAgICAgYC0tZGJuYW1lPSR7b3B0aW9ucy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKG9wdGlvbnMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcm5hbWU9JHtvcHRpb25zLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAob3B0aW9ucy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGFyZ3MucHVzaChgLS1wYXNzd29yZGApO1xuICAgICAgY2hpbGQgPSBzcGF3bignYmFzaCcpO1xuICAgICAgY2hpbGQuc3RkaW4uZW5kKGAkKGVjaG8gJHtvcHRpb25zLnVyaS5wYXNzd29yZCArICdcXG4nfSB8IHBnX2R1bXAgJHthcmdzLmpvaW4oJyAnKX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oJ3BnX2R1bXAnLCBhcmdzLCB7IHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBIZXJvYmFja0R1bXApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=