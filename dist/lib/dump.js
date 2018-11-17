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
     * Initializes an exporter instance based on constructor options.
     */
    static initializeProvider(options) {
        let provider;
        if (options.provider instanceof base_1.HerobackProvider) {
            provider = options.provider;
        }
        else {
            provider = base_1.providerFactory(options);
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
            return `${clean}.sql.gz`;
        }
        return `${clean}.sql`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxpQ0FBNEU7QUFFNUUsaUNBQWlDO0FBRXBCLFFBQUEsV0FBVyxHQUFHLDREQUE0RCxDQUFDO0FBQzNFLFFBQUEsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7QUFVakUsTUFBcUIsWUFBWTtJQUsvQixZQUE0QixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQTRCO1FBQzVELElBQUksUUFBUSxDQUFDO1FBRWIsSUFBSSxPQUFPLENBQUMsUUFBUSxZQUFZLHVCQUFnQixFQUFFO1lBQ2hELFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzdCO2FBQU07WUFDTCxRQUFRLEdBQUcsc0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sS0FBSyxFQUFFO1lBQzVDLFFBQVEsR0FBRyxzQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBNEIsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFXLEVBQUUsZ0NBQXdCLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxLQUFLLFNBQVMsQ0FBQztTQUMxQjtRQUNELE9BQU8sR0FBRyxLQUFLLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0csR0FBRzs7WUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFeEMsaUNBQWlDO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEdBQUc7O1lBQ1AsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxNQUFNLENBQUMsVUFBeUIsRUFBRTs7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBQzdFLENBQUM7S0FBQTtDQUNGO0FBdkZELCtCQXVGQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBleHBvcnRlckZhY3RvcnksIEhlcm9iYWNrUHJvdmlkZXIsIHByb3ZpZGVyRmFjdG9yeSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgSGVyb2JhY2tFeHBvcnRlciwgeyBFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi9iYXNlL2V4cG9ydGVyJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0xFQU5fUkVHRVggPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLihcXGR7M30pWiQvO1xuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTiA9ICckMSQyJDMuJDQkNSQ2LiQ3MDAwMDAwJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja0R1bXBPcHRpb25zIHtcbiAgcHJvdmlkZXI6IHN0cmluZyB8IEhlcm9iYWNrUHJvdmlkZXI7XG4gIGV4cG9ydGVyOiBzdHJpbmcgfCBIZXJvYmFja0V4cG9ydGVyO1xuICBiYXNlRGlyPzogc3RyaW5nO1xuICBnemlwPzogYm9vbGVhbjtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrRHVtcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aW1lc3RhbXA6IERhdGU7XG4gIHByb3RlY3RlZCByZWFkb25seSBwcm92aWRlcjogSGVyb2JhY2tQcm92aWRlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4cG9ydGVyOiBIZXJvYmFja0V4cG9ydGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKSB7XG4gICAgdGhpcy50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucHJvdmlkZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZVByb3ZpZGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuZXhwb3J0ZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuIGV4cG9ydGVyIGluc3RhbmNlIGJhc2VkIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmIChvcHRpb25zLnByb3ZpZGVyIGluc3RhbmNlb2YgSGVyb2JhY2tQcm92aWRlcikge1xuICAgICAgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW4gZXhwb3J0ZXIgaW5zdGFuY2UgYmFzZWQgb24gY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVFeHBvcnRlcihvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogSGVyb2JhY2tFeHBvcnRlciB7XG4gICAgbGV0IGV4cG9ydGVyO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmV4cG9ydGVyID09PSB0eXBlb2YgJ3N0cicpIHtcbiAgICAgIGV4cG9ydGVyID0gZXhwb3J0ZXJGYWN0b3J5KG9wdGlvbnMuZXhwb3J0ZXIgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0ZXIgPSBvcHRpb25zLmV4cG9ydGVyIGFzIEhlcm9iYWNrRXhwb3J0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW5lcmF0ZWQgZmlsZW5hbWUgZm9yIHRoaXMgZHVtcCBpbnN0YW5jZS5cbiAgICovXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsZWFuID0gdGhpcy50aW1lc3RhbXAudG9JU09TdHJpbmcoKS5yZXBsYWNlKENMRUFOX1JFR0VYLCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04pO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ3ppcCkge1xuICAgICAgcmV0dXJuIGAke2NsZWFufS5zcWwuZ3pgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y2xlYW59LnNxbGA7XG4gIH1cblxuICAvKipcbiAgICogU3Bhd25zIGEgY2hpbGQgcHJvY2VzcyBhbmQgZHVtcHMgcmVxdWVzdGVkIGRhdGFiYXNlLiBUaGlzIG1ldGhvZHMgcmV0dXJucyB0aGVcbiAgICogY2hpbGQgcHJvY2VzcyBpbnN0YW5jZSBpdHNlbGYgd2l0aG91dCBhbnkgaGVyb2JhY2sgbG9naWNzIHdyYXBwZWQgeWV0LCBcbiAgICogYW5kIGlzIG1vc3RseSB1c2VkIGludGVybmFsbHkuXG4gICAqIDxiciAvPlxuICAgKiBGb3IgYSBoaWdoZXIgbGV2ZWwgaW50ZXJmYWNlLCBjaGVjayBgYGBkdW1wLmV4cG9ydCgpYGBgIGFuZCBgYGBkdW1wLnJhdygpYGBgLlxuICAgKi9cbiAgYXN5bmMgcnVuKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucHJvdmlkZXIuZHVtcCgpO1xuXG4gICAgLy8gT3B0aW9uYWxseSwgY29tcHJlc3Mgd2l0aCBHWklQXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICBjb25zdCBnemlwQ2hpbGQgPSBVdGlscy5TdHJlYW0uZ3ppcChkdW1wLnN0ZG91dCk7XG4gICAgICByZXR1cm4gZ3ppcENoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBkdW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFzIGEgcmF3IHN0cmluZy4gVGhpcyBpcyBtZWFudCBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZXMsIFxuICAgKiBtYXkgYmUgYmFkIGZvciBvdmVyYWxsIHBlcmZvbWFuY2UuXG4gICAqL1xuICBhc3luYyByYXcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gVXRpbHMuU3RyZWFtLnN0cmluZ2lmeShkdW1wLnN0ZG91dCk7XG4gIH1cblxuICAvKipcbiAgICogRHVtcHMgYW5kIGV4cG9ydHMgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBhc3luYyBleHBvcnQob3B0aW9uczogRXhwb3J0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3J0ZXIuZXhwb3J0KGR1bXAsIHsgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsIC4uLm9wdGlvbnMgfSk7XG4gIH1cbn0iXX0=