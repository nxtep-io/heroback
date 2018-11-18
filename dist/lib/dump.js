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
const base_1 = require("./base");
const Providers = require("./providers");
const Utils = require("./utils");
exports.CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
exports.CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';
class HerobackDump {
    constructor(options) {
        this.options = options;
        this.timestamp = new Date();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxpQ0FBNkc7QUFDN0cseUNBQXlDO0FBQ3pDLGlDQUFpQztBQUVwQixRQUFBLFdBQVcsR0FBRyw0REFBNEQsQ0FBQztBQUMzRSxRQUFBLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0FBVWpFLE1BQXFCLFlBQVk7SUFLL0IsWUFBNEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxDQUFDLFFBQVEsWUFBWSx1QkFBZ0IsRUFBRTtZQUNoRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0wsUUFBUSxHQUFHLHNCQUFlLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQTRCO1FBQzVELElBQUksUUFBUSxDQUFDO1FBRWIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxLQUFLLEVBQUU7WUFDNUMsUUFBUSxHQUFHLHNCQUFlLENBQUMsT0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUE0QixDQUFDO1NBQ2pEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsbUJBQVcsRUFBRSxnQ0FBd0IsQ0FBQyxDQUFDO1FBQzFGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDckIsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDRyxHQUFHOztZQUNQLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV4QyxpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDckIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLE1BQU0sQ0FBQyxVQUF5QixFQUFFOztZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUssT0FBTyxFQUFHLENBQUM7UUFDN0UsQ0FBQztLQUFBO0NBQ0Y7QUF2RkQsK0JBdUZDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGV4cG9ydGVyRmFjdG9yeSwgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYID0gL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KS4oXFxkezN9KVokLztcbmV4cG9ydCBjb25zdCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04gPSAnJDEkMiQzLiQ0JDUkNi4kNzAwMDAwMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tEdW1wT3B0aW9ucyB7XG4gIHByb3ZpZGVyOiBzdHJpbmcgfCBIZXJvYmFja1Byb3ZpZGVyO1xuICBleHBvcnRlcjogc3RyaW5nIHwgSGVyb2JhY2tFeHBvcnRlcjtcbiAgYmFzZURpcj86IHN0cmluZztcbiAgZ3ppcD86IGJvb2xlYW47XG4gIHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFja0R1bXAge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGltZXN0YW1wOiBEYXRlO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcHJvdmlkZXI6IEhlcm9iYWNrUHJvdmlkZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBleHBvcnRlcjogSGVyb2JhY2tFeHBvcnRlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucykge1xuICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnByb3ZpZGVyID0gSGVyb2JhY2tEdW1wLmluaXRpYWxpemVQcm92aWRlcihvcHRpb25zKTtcbiAgICB0aGlzLmV4cG9ydGVyID0gSGVyb2JhY2tEdW1wLmluaXRpYWxpemVFeHBvcnRlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIHByb3ZpZGVyIGluc3RhbmNlIGJhc2VkIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmIChvcHRpb25zLnByb3ZpZGVyIGluc3RhbmNlb2YgSGVyb2JhY2tQcm92aWRlcikge1xuICAgICAgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zLCBQcm92aWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbiBleHBvcnRlciBpbnN0YW5jZSBiYXNlZCBvbiBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBIZXJvYmFja0V4cG9ydGVyIHtcbiAgICBsZXQgZXhwb3J0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXhwb3J0ZXIgPT09IHR5cGVvZiAnc3RyJykge1xuICAgICAgZXhwb3J0ZXIgPSBleHBvcnRlckZhY3Rvcnkob3B0aW9ucy5leHBvcnRlciBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRlciA9IG9wdGlvbnMuZXhwb3J0ZXIgYXMgSGVyb2JhY2tFeHBvcnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0ZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGdlbmVyYXRlZCBmaWxlbmFtZSBmb3IgdGhpcyBkdW1wIGluc3RhbmNlLlxuICAgKi9cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xlYW4gPSB0aGlzLnRpbWVzdGFtcC50b0lTT1N0cmluZygpLnJlcGxhY2UoQ0xFQU5fUkVHRVgsIENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTik7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICByZXR1cm4gYCR7Y2xlYW59JHt0aGlzLnByb3ZpZGVyLmV4dH0uZ3pgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y2xlYW59LmR1bXAke3RoaXMucHJvdmlkZXIuZXh0fWA7XG4gIH1cblxuICAvKipcbiAgICogU3Bhd25zIGEgY2hpbGQgcHJvY2VzcyBhbmQgZHVtcHMgcmVxdWVzdGVkIGRhdGFiYXNlLiBUaGlzIG1ldGhvZHMgcmV0dXJucyB0aGVcbiAgICogY2hpbGQgcHJvY2VzcyBpbnN0YW5jZSBpdHNlbGYgd2l0aG91dCBhbnkgaGVyb2JhY2sgbG9naWNzIHdyYXBwZWQgeWV0LCBcbiAgICogYW5kIGlzIG1vc3RseSB1c2VkIGludGVybmFsbHkuXG4gICAqIDxiciAvPlxuICAgKiBGb3IgYSBoaWdoZXIgbGV2ZWwgaW50ZXJmYWNlLCBjaGVjayBgYGBkdW1wLmV4cG9ydCgpYGBgIGFuZCBgYGBkdW1wLnJhdygpYGBgLlxuICAgKi9cbiAgYXN5bmMgcnVuKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucHJvdmlkZXIuZHVtcCgpO1xuXG4gICAgLy8gT3B0aW9uYWxseSwgY29tcHJlc3Mgd2l0aCBHWklQXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICBjb25zdCBnemlwQ2hpbGQgPSBVdGlscy5TdHJlYW0uZ3ppcChkdW1wLnN0ZG91dCk7XG4gICAgICByZXR1cm4gZ3ppcENoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBkdW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFzIGEgcmF3IHN0cmluZy4gVGhpcyBpcyBtZWFudCBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZXMsIFxuICAgKiBtYXkgYmUgYmFkIGZvciBvdmVyYWxsIHBlcmZvbWFuY2UuXG4gICAqL1xuICBhc3luYyByYXcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gVXRpbHMuU3RyZWFtLnN0cmluZ2lmeShkdW1wLnN0ZG91dCk7XG4gIH1cblxuICAvKipcbiAgICogRHVtcHMgYW5kIGV4cG9ydHMgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBhc3luYyBleHBvcnQob3B0aW9uczogRXhwb3J0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3J0ZXIuZXhwb3J0KGR1bXAsIHsgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsIC4uLm9wdGlvbnMgfSk7XG4gIH1cbn0iXX0=