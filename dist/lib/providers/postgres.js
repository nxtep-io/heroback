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
                    let child;
                    this.logger.debug('Restoring using "psql" binary', { args });
                    if (this.uri.password) {
                        child = child_process_1.spawn(`PGPASSWORD="${this.uri.password}" psql`, args, {
                            shell: true,
                            stdio: ['ignore', 'pipe', 'inherit']
                        });
                    }
                    else {
                        child = child_process_1.spawn('psql', args, { stdio: ['ignore', 'pipe', 'inherit'] });
                    }
                    resolve(child);
                }));
            }));
        });
    }
}
exports.default = PostgresProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBb0Q7QUFDcEQsa0NBQXdFO0FBSXhFLE1BQXFCLGdCQUFpQixTQUFRLHVCQUFnQjtJQUE5RDs7UUFDRSxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBdUVmLENBQUM7SUFyRVEsV0FBVztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLElBQUksQ0FBQyxVQUF1QixFQUFFOztZQUN6QyxNQUFNLElBQUksR0FBRztnQkFDWCxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN6QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2FBQ2hDLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsSUFBSSxLQUFLLENBQUM7WUFFVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFFOUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsS0FBSyxHQUFHLHFCQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsV0FBVyxFQUFFLElBQUksRUFBRTtvQkFDL0QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxxQkFBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxRTtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsSUFBdUIsRUFBRSxPQUF1Qjs7WUFDbkUsT0FBTyxJQUFJLE9BQU8sQ0FBZSxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFBQyxPQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQVMsRUFBRTtvQkFDckYsTUFBTSxJQUFJLEdBQUc7d0JBQ1gsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDdEIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTt3QkFDekIsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtxQkFDMUIsQ0FBQztvQkFFRixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUM5QztvQkFFRCxJQUFJLEtBQUssQ0FBQztvQkFFVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRTdELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLEtBQUssR0FBRyxxQkFBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLFFBQVEsRUFBRSxJQUFJLEVBQUU7NEJBQzVELEtBQUssRUFBRSxJQUFJOzRCQUNYLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO3lCQUNyQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsS0FBSyxHQUFHLHFCQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN2RTtvQkFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQSxDQUFDLENBQUE7Y0FBQSxDQUFDLENBQUM7UUFDTixDQUFDO0tBQUE7Q0FDRjtBQXhFRCxtQ0F3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBEdW1wT3B0aW9ucywgSGVyb2JhY2tQcm92aWRlciwgUmVzdG9yZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Z3Jlc1Byb3ZpZGVyIGV4dGVuZHMgSGVyb2JhY2tQcm92aWRlciB7XG4gIGV4dCA9ICcuc3FsJztcblxuICBwdWJsaWMgdXJpRGVmYXVsdHMoKTogUGFydGlhbDxVdGlscy5VcmlQYXJhbXNTY2hlbWE+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdG9jb2w6ICdwb3N0Z3Jlc3FsJyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogJzU0MzInLFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRHVtcHMgdGhlIGRlc2lyZWQgZGF0YWJhc2UgdXNpbmcgcGdfZHVtcCBjaGlsZCBwcm9jZXNzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGR1bXAob3B0aW9uczogRHVtcE9wdGlvbnMgPSB7fSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGAtLWhvc3Q9JHt0aGlzLnVyaS5ob3N0fWAsXG4gICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgYC0tZGJuYW1lPSR7dGhpcy51cmkuZGF0YWJhc2V9YCxcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICBhcmdzLnB1c2goYC0tdXNlcm5hbWU9JHt0aGlzLnVyaS51c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRHVtcGluZyB1c2luZyBcInBnX2R1bXBcIiBiaW5hcnknLCB7IGFyZ3MgfSk7XG5cbiAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgIGNoaWxkID0gc3Bhd24oYFBHUEFTU1dPUkQ9XCIke3RoaXMudXJpLnBhc3N3b3JkfVwiIHBnX2R1bXBgLCBhcmdzLCB7XG4gICAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgICBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J11cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IHNwYXduKCdwZ19kdW1wJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmVzIHRoZSBkdW1wIHRvIHRoZSBkZXNpcmVkIGRhdGFiYXNlIHVzaW5nIGFwc3FsIGNoaWxkIHByb2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShkdW1wOiBVdGlscy5JbnB1dFN0cmVhbSwgb3B0aW9uczogUmVzdG9yZU9wdGlvbnMpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxDaGlsZFByb2Nlc3M+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IGR1bXAub24oJ29wZW4nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhcmdzID0gW1xuICAgICAgICBgJHt0aGlzLnVyaS5kYXRhYmFzZX1gLFxuICAgICAgICBgLS1ob3N0PSR7dGhpcy51cmkuaG9zdH1gLFxuICAgICAgICBgLS1wb3J0PSR7dGhpcy51cmkucG9ydH1gLFxuICAgICAgXTtcblxuICAgICAgaWYgKHRoaXMudXJpLnVzZXJuYW1lKSB7XG4gICAgICAgIGFyZ3MucHVzaChgLS11c2VybmFtZT0ke3RoaXMudXJpLnVzZXJuYW1lfWApO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGQ7XG5cbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXN0b3JpbmcgdXNpbmcgXCJwc3FsXCIgYmluYXJ5JywgeyBhcmdzIH0pO1xuXG4gICAgICBpZiAodGhpcy51cmkucGFzc3dvcmQpIHtcbiAgICAgICAgY2hpbGQgPSBzcGF3bihgUEdQQVNTV09SRD1cIiR7dGhpcy51cmkucGFzc3dvcmR9XCIgcHNxbGAsIGFyZ3MsIHtcbiAgICAgICAgICBzaGVsbDogdHJ1ZSxcbiAgICAgICAgICBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J11cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IHNwYXduKCdwc3FsJywgYXJncywgeyBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoY2hpbGQpO1xuICAgIH0pKTtcbiAgfVxufSJdfQ==