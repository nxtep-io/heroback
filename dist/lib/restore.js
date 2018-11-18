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
    import(dump, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.provider.restore(dump, options);
            return new Promise((resolve, reject) => {
                result.on('error', exception => reject(exception));
                result.on('exit', () => resolve(true));
            });
        });
    }
}
exports.default = HerobackRestore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw2REFBNkM7QUFDN0MsaUNBQTJFO0FBQzNFLHlDQUF5QztBQVd6QyxNQUFxQixlQUFlO0lBSWxDLFlBQTRCLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSw0QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBK0I7UUFDL0QsSUFBSSxRQUFRLENBQUM7UUFFYixJQUFJLE9BQU8sQ0FBQyxRQUFRLFlBQVksdUJBQWdCLEVBQUU7WUFDaEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNMLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFWSxNQUFNLENBQUMsSUFBaUIsRUFBRSxVQUEwQixFQUFFOztZQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksT0FBTyxDQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUM5QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBNUJELGtDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAndHMtZnJhbWV3b3JrLWNvbW1vbic7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyLCBwcm92aWRlckZhY3RvcnksIFJlc3RvcmVPcHRpb25zIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9iYWNrUmVzdG9yZU9wdGlvbnMge1xuICBwcm92aWRlcjogc3RyaW5nIHwgSGVyb2JhY2tQcm92aWRlcjtcbiAgYmFzZURpcj86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VyO1xuICBnemlwPzogYm9vbGVhbjtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrUmVzdG9yZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHByb3ZpZGVyOiBIZXJvYmFja1Byb3ZpZGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBIZXJvYmFja1Jlc3RvcmVPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLnByb3ZpZGVyID0gSGVyb2JhY2tSZXN0b3JlLmluaXRpYWxpemVQcm92aWRlcihvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVQcm92aWRlcihvcHRpb25zOiBIZXJvYmFja1Jlc3RvcmVPcHRpb25zKTogSGVyb2JhY2tQcm92aWRlciB7XG4gICAgbGV0IHByb3ZpZGVyO1xuXG4gICAgaWYgKG9wdGlvbnMucHJvdmlkZXIgaW5zdGFuY2VvZiBIZXJvYmFja1Byb3ZpZGVyKSB7XG4gICAgICBwcm92aWRlciA9IG9wdGlvbnMucHJvdmlkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXJGYWN0b3J5KG9wdGlvbnMsIFByb3ZpZGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGltcG9ydChkdW1wOiBJbnB1dFN0cmVhbSwgb3B0aW9uczogUmVzdG9yZU9wdGlvbnMgPSB7fSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvdmlkZXIucmVzdG9yZShkdW1wLCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzdWx0Lm9uKCdlcnJvcicsIGV4Y2VwdGlvbiA9PiByZWplY3QoZXhjZXB0aW9uKSk7XG4gICAgICByZXN1bHQub24oJ2V4aXQnLCAoKSA9PiByZXNvbHZlKHRydWUpKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==