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
const Utils = require("./utils");
exports.CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
exports.CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';
class HerobackDump {
    constructor(options) {
        this.options = options;
        this.timestamp = new Date();
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
        this.provider = HerobackDump.initializeProvider(options);
        this.exporter = HerobackDump.initializeExporter(options);
    }
    /**
     * Initializes a provider instance based on constructor options.
     */
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
    /**
     * Initializes an exporter instance based on constructor options.
     */
    static initializeExporter(options) {
        let exporter;
        if (typeof options.exporter === typeof 'str') {
            exporter = base_1.exporterFactory(options.exporter);
        }
        else {
            exporter = options.exporter;
        }
        return exporter;
    }
    /**
     * Gets a generated filename for this dump instance.
     */
    get fileName() {
        const clean = this.timestamp.toISOString().replace(exports.CLEAN_REGEX, exports.CLEAN_REGEX_SUBSTITUTION);
        if (this.options.gzip) {
            return `${clean}${this.provider.ext}.gz`;
        }
        return `${clean}.dump${this.provider.ext}`;
    }
    /**
     * Spawns a child process and dumps requested database. This methods returns the
     * child process instance itself without any heroback logics wrapped yet,
     * and is mostly used internally.
     * <br />
     * For a higher level interface, check ```dump.export()``` and ```dump.raw()```.
     */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const dump = yield this.provider.dump();
            // Optionally, compress with GZIP
            if (this.options.gzip) {
                const gzipChild = Utils.Stream.gzip(dump.stdout);
                return gzipChild;
            }
            return dump;
        });
    }
    /**
     * Dumps as a raw string. This is meant for development purposes,
     * may be bad for overall perfomance.
     */
    raw() {
        return __awaiter(this, void 0, void 0, function* () {
            const dump = yield this.run();
            return Utils.Stream.stringify(dump.stdout);
        });
    }
    /**
     * Dumps and exports the results.
     */
    export(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const dump = yield this.run();
            return this.exporter.export(dump, Object.assign({ fileName: this.fileName }, options));
        });
    }
}
exports.default = HerobackDump;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2REFBNkM7QUFDN0MsaUNBQTZHO0FBQzdHLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFFcEIsUUFBQSxXQUFXLEdBQUcsNERBQTRELENBQUM7QUFDM0UsUUFBQSx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQVdqRSxNQUFxQixZQUFZO0lBTS9CLFlBQTRCLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBNEI7UUFDNUQsSUFBSSxRQUFRLENBQUM7UUFFYixJQUFJLE9BQU8sQ0FBQyxRQUFRLFlBQVksdUJBQWdCLEVBQUU7WUFDaEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNMLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sS0FBSyxFQUFFO1lBQzVDLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBNEIsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFXLEVBQUUsZ0NBQXdCLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMxQztRQUNELE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0csR0FBRzs7WUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFeEMsaUNBQWlDO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEdBQUc7O1lBQ1AsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxNQUFNLENBQUMsVUFBeUIsRUFBRTs7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBQzdFLENBQUM7S0FBQTtDQUNGO0FBekZELCtCQXlGQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd0cy1mcmFtZXdvcmstY29tbW9uJztcbmltcG9ydCB7IGV4cG9ydGVyRmFjdG9yeSwgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYID0gL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KS4oXFxkezN9KVokLztcbmV4cG9ydCBjb25zdCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04gPSAnJDEkMiQzLiQ0JDUkNi4kNzAwMDAwMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tEdW1wT3B0aW9ucyB7XG4gIGV4cG9ydGVyOiBzdHJpbmcgfCBIZXJvYmFja0V4cG9ydGVyO1xuICBwcm92aWRlcj86IEhlcm9iYWNrUHJvdmlkZXI7XG4gIGJhc2VEaXI/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgZ3ppcD86IGJvb2xlYW47XG4gIHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFja0R1bXAge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aW1lc3RhbXA6IERhdGU7XG4gIHByb3RlY3RlZCByZWFkb25seSBwcm92aWRlcjogSGVyb2JhY2tQcm92aWRlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4cG9ydGVyOiBIZXJvYmFja0V4cG9ydGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKSB7XG4gICAgdGhpcy50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5wcm92aWRlciA9IEhlcm9iYWNrRHVtcC5pbml0aWFsaXplUHJvdmlkZXIob3B0aW9ucyk7XG4gICAgdGhpcy5leHBvcnRlciA9IEhlcm9iYWNrRHVtcC5pbml0aWFsaXplRXhwb3J0ZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBwcm92aWRlciBpbnN0YW5jZSBiYXNlZCBvbiBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZVByb3ZpZGVyKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgICBsZXQgcHJvdmlkZXI7XG5cbiAgICBpZiAob3B0aW9ucy5wcm92aWRlciBpbnN0YW5jZW9mIEhlcm9iYWNrUHJvdmlkZXIpIHtcbiAgICAgIHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmlkZXIgPSBwcm92aWRlckZhY3Rvcnkob3B0aW9ucywgUHJvdmlkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW4gZXhwb3J0ZXIgaW5zdGFuY2UgYmFzZWQgb24gY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVFeHBvcnRlcihvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogSGVyb2JhY2tFeHBvcnRlciB7XG4gICAgbGV0IGV4cG9ydGVyO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmV4cG9ydGVyID09PSB0eXBlb2YgJ3N0cicpIHtcbiAgICAgIGV4cG9ydGVyID0gZXhwb3J0ZXJGYWN0b3J5KG9wdGlvbnMuZXhwb3J0ZXIgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0ZXIgPSBvcHRpb25zLmV4cG9ydGVyIGFzIEhlcm9iYWNrRXhwb3J0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW5lcmF0ZWQgZmlsZW5hbWUgZm9yIHRoaXMgZHVtcCBpbnN0YW5jZS5cbiAgICovXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsZWFuID0gdGhpcy50aW1lc3RhbXAudG9JU09TdHJpbmcoKS5yZXBsYWNlKENMRUFOX1JFR0VYLCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04pO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ3ppcCkge1xuICAgICAgcmV0dXJuIGAke2NsZWFufSR7dGhpcy5wcm92aWRlci5leHR9Lmd6YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2NsZWFufS5kdW1wJHt0aGlzLnByb3ZpZGVyLmV4dH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwYXducyBhIGNoaWxkIHByb2Nlc3MgYW5kIGR1bXBzIHJlcXVlc3RlZCBkYXRhYmFzZS4gVGhpcyBtZXRob2RzIHJldHVybnMgdGhlXG4gICAqIGNoaWxkIHByb2Nlc3MgaW5zdGFuY2UgaXRzZWxmIHdpdGhvdXQgYW55IGhlcm9iYWNrIGxvZ2ljcyB3cmFwcGVkIHlldCwgXG4gICAqIGFuZCBpcyBtb3N0bHkgdXNlZCBpbnRlcm5hbGx5LlxuICAgKiA8YnIgLz5cbiAgICogRm9yIGEgaGlnaGVyIGxldmVsIGludGVyZmFjZSwgY2hlY2sgYGBgZHVtcC5leHBvcnQoKWBgYCBhbmQgYGBgZHVtcC5yYXcoKWBgYC5cbiAgICovXG4gIGFzeW5jIHJ1bigpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGR1bXAgPSBhd2FpdCB0aGlzLnByb3ZpZGVyLmR1bXAoKTtcblxuICAgIC8vIE9wdGlvbmFsbHksIGNvbXByZXNzIHdpdGggR1pJUFxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ3ppcCkge1xuICAgICAgY29uc3QgZ3ppcENoaWxkID0gVXRpbHMuU3RyZWFtLmd6aXAoZHVtcC5zdGRvdXQpO1xuICAgICAgcmV0dXJuIGd6aXBDaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZHVtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdW1wcyBhcyBhIHJhdyBzdHJpbmcuIFRoaXMgaXMgbWVhbnQgZm9yIGRldmVsb3BtZW50IHB1cnBvc2VzLCBcbiAgICogbWF5IGJlIGJhZCBmb3Igb3ZlcmFsbCBwZXJmb21hbmNlLlxuICAgKi9cbiAgYXN5bmMgcmF3KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIFV0aWxzLlN0cmVhbS5zdHJpbmdpZnkoZHVtcC5zdGRvdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFuZCBleHBvcnRzIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgYXN5bmMgZXhwb3J0KG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMgPSB7fSk6IFByb21pc2U8VXRpbHMuSW5wdXRTdHJlYW0+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gdGhpcy5leHBvcnRlci5leHBvcnQoZHVtcCwgeyBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSwgLi4ub3B0aW9ucyB9KTtcbiAgfVxufSJdfQ==