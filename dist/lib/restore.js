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
const ts_framework_common_1 = require("ts-framework-common");
const base_1 = require("./base");
const Providers = require("./providers");
class HerobackRestore {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
        this.provider = HerobackRestore.initializeProvider(options);
    }
    static initializeProvider(options) {
        let provider;
        if (options.provider instanceof base_1.HerobackProvider) {
            provider = options.provider;
        }
        else {
            provider = base_1.providerFactory(options, Providers);
        }
        return provider;
    }
    import(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for dump stream to be opened before starting
            return new Promise((resolve, reject) => dump.on('open', () => __awaiter(this, void 0, void 0, function* () {
                // Restores dump stream using provider
                const result = yield this.provider.restore(dump);
                // Handle restore events for callback
                result.on('error', exception => reject(exception));
                result.on('exit', () => resolve(result));
            })));
        });
    }
}
exports.default = HerobackRestore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2REFBNkM7QUFDN0MsaUNBQTJEO0FBQzNELHlDQUF5QztBQVd6QyxNQUFxQixlQUFlO0lBSWxDLFlBQTRCLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSw0QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBK0I7UUFDL0QsSUFBSSxRQUFRLENBQUM7UUFFYixJQUFJLE9BQU8sQ0FBQyxRQUFRLFlBQVksdUJBQWdCLEVBQUU7WUFDaEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNMLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFWSxNQUFNLENBQUMsSUFBaUI7O1lBQ25DLG9EQUFvRDtZQUNwRCxPQUFPLElBQUksT0FBTyxDQUFlLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBUyxFQUFFO2dCQUMvRSxzQ0FBc0M7Z0JBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpELHFDQUFxQztnQkFDckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0Y7QUFoQ0Qsa0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3RzLWZyYW1ld29yay1jb21tb24nO1xuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9iYWNrUmVzdG9yZU9wdGlvbnMge1xuICBwcm92aWRlcj86IEhlcm9iYWNrUHJvdmlkZXI7XG4gIGJhc2VEaXI/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgZ3ppcD86IGJvb2xlYW47XG4gIHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFja1Jlc3RvcmUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBwcm92aWRlcjogSGVyb2JhY2tQcm92aWRlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogSGVyb2JhY2tSZXN0b3JlT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5wcm92aWRlciA9IEhlcm9iYWNrUmVzdG9yZS5pbml0aWFsaXplUHJvdmlkZXIob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tSZXN0b3JlT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmIChvcHRpb25zLnByb3ZpZGVyIGluc3RhbmNlb2YgSGVyb2JhY2tQcm92aWRlcikge1xuICAgICAgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zLCBQcm92aWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbXBvcnQoZHVtcDogSW5wdXRTdHJlYW0pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIC8vIFdhaXQgZm9yIGR1bXAgc3RyZWFtIHRvIGJlIG9wZW5lZCBiZWZvcmUgc3RhcnRpbmdcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Q2hpbGRQcm9jZXNzPigocmVzb2x2ZSwgcmVqZWN0KSA9PiBkdW1wLm9uKCdvcGVuJywgYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gUmVzdG9yZXMgZHVtcCBzdHJlYW0gdXNpbmcgcHJvdmlkZXJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvdmlkZXIucmVzdG9yZShkdW1wKTtcblxuICAgICAgLy8gSGFuZGxlIHJlc3RvcmUgZXZlbnRzIGZvciBjYWxsYmFja1xuICAgICAgcmVzdWx0Lm9uKCdlcnJvcicsIGV4Y2VwdGlvbiA9PiByZWplY3QoZXhjZXB0aW9uKSk7XG4gICAgICByZXN1bHQub24oJ2V4aXQnLCAoKSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgIH0pKTtcbiAgfVxufSJdfQ==