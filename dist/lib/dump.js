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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2REFBNkM7QUFDN0MsaUNBQTZHO0FBQzdHLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFFcEIsUUFBQSxXQUFXLEdBQUcsNERBQTRELENBQUM7QUFDM0UsUUFBQSx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQVdqRSxNQUFxQixZQUFZO0lBTS9CLFlBQTRCLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBNEI7UUFDNUQsSUFBSSxRQUFRLENBQUM7UUFFYixJQUFJLE9BQU8sQ0FBQyxRQUFRLFlBQVksdUJBQWdCLEVBQUU7WUFDaEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNMLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sS0FBSyxFQUFFO1lBQzVDLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBNEIsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFXLEVBQUUsZ0NBQXdCLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMxQztRQUNELE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0csR0FBRzs7WUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFeEMsaUNBQWlDO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEdBQUc7O1lBQ1AsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxNQUFNLENBQUMsVUFBeUIsRUFBRTs7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBQzdFLENBQUM7S0FBQTtDQUNGO0FBekZELCtCQXlGQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd0cy1mcmFtZXdvcmstY29tbW9uJztcbmltcG9ydCB7IGV4cG9ydGVyRmFjdG9yeSwgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYID0gL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KS4oXFxkezN9KVokLztcbmV4cG9ydCBjb25zdCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04gPSAnJDEkMiQzLiQ0JDUkNi4kNzAwMDAwMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tEdW1wT3B0aW9ucyB7XG4gIHByb3ZpZGVyOiBzdHJpbmcgfCBIZXJvYmFja1Byb3ZpZGVyO1xuICBleHBvcnRlcjogc3RyaW5nIHwgSGVyb2JhY2tFeHBvcnRlcjtcbiAgYmFzZURpcj86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VyO1xuICBnemlwPzogYm9vbGVhbjtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrRHVtcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRpbWVzdGFtcDogRGF0ZTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHByb3ZpZGVyOiBIZXJvYmFja1Byb3ZpZGVyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXhwb3J0ZXI6IEhlcm9iYWNrRXhwb3J0ZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpIHtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLnByb3ZpZGVyID0gSGVyb2JhY2tEdW1wLmluaXRpYWxpemVQcm92aWRlcihvcHRpb25zKTtcbiAgICB0aGlzLmV4cG9ydGVyID0gSGVyb2JhY2tEdW1wLmluaXRpYWxpemVFeHBvcnRlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIHByb3ZpZGVyIGluc3RhbmNlIGJhc2VkIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmIChvcHRpb25zLnByb3ZpZGVyIGluc3RhbmNlb2YgSGVyb2JhY2tQcm92aWRlcikge1xuICAgICAgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zLCBQcm92aWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbiBleHBvcnRlciBpbnN0YW5jZSBiYXNlZCBvbiBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBIZXJvYmFja0V4cG9ydGVyIHtcbiAgICBsZXQgZXhwb3J0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXhwb3J0ZXIgPT09IHR5cGVvZiAnc3RyJykge1xuICAgICAgZXhwb3J0ZXIgPSBleHBvcnRlckZhY3Rvcnkob3B0aW9ucy5leHBvcnRlciBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRlciA9IG9wdGlvbnMuZXhwb3J0ZXIgYXMgSGVyb2JhY2tFeHBvcnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0ZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGdlbmVyYXRlZCBmaWxlbmFtZSBmb3IgdGhpcyBkdW1wIGluc3RhbmNlLlxuICAgKi9cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xlYW4gPSB0aGlzLnRpbWVzdGFtcC50b0lTT1N0cmluZygpLnJlcGxhY2UoQ0xFQU5fUkVHRVgsIENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTik7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICByZXR1cm4gYCR7Y2xlYW59JHt0aGlzLnByb3ZpZGVyLmV4dH0uZ3pgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y2xlYW59LmR1bXAke3RoaXMucHJvdmlkZXIuZXh0fWA7XG4gIH1cblxuICAvKipcbiAgICogU3Bhd25zIGEgY2hpbGQgcHJvY2VzcyBhbmQgZHVtcHMgcmVxdWVzdGVkIGRhdGFiYXNlLiBUaGlzIG1ldGhvZHMgcmV0dXJucyB0aGVcbiAgICogY2hpbGQgcHJvY2VzcyBpbnN0YW5jZSBpdHNlbGYgd2l0aG91dCBhbnkgaGVyb2JhY2sgbG9naWNzIHdyYXBwZWQgeWV0LCBcbiAgICogYW5kIGlzIG1vc3RseSB1c2VkIGludGVybmFsbHkuXG4gICAqIDxiciAvPlxuICAgKiBGb3IgYSBoaWdoZXIgbGV2ZWwgaW50ZXJmYWNlLCBjaGVjayBgYGBkdW1wLmV4cG9ydCgpYGBgIGFuZCBgYGBkdW1wLnJhdygpYGBgLlxuICAgKi9cbiAgYXN5bmMgcnVuKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucHJvdmlkZXIuZHVtcCgpO1xuXG4gICAgLy8gT3B0aW9uYWxseSwgY29tcHJlc3Mgd2l0aCBHWklQXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICBjb25zdCBnemlwQ2hpbGQgPSBVdGlscy5TdHJlYW0uZ3ppcChkdW1wLnN0ZG91dCk7XG4gICAgICByZXR1cm4gZ3ppcENoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBkdW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFzIGEgcmF3IHN0cmluZy4gVGhpcyBpcyBtZWFudCBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZXMsIFxuICAgKiBtYXkgYmUgYmFkIGZvciBvdmVyYWxsIHBlcmZvbWFuY2UuXG4gICAqL1xuICBhc3luYyByYXcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gVXRpbHMuU3RyZWFtLnN0cmluZ2lmeShkdW1wLnN0ZG91dCk7XG4gIH1cblxuICAvKipcbiAgICogRHVtcHMgYW5kIGV4cG9ydHMgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBhc3luYyBleHBvcnQob3B0aW9uczogRXhwb3J0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3J0ZXIuZXhwb3J0KGR1bXAsIHsgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsIC4uLm9wdGlvbnMgfSk7XG4gIH1cbn0iXX0=