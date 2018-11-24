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
const exporters_1 = require("./exporters");
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
            return this.provider.dump();
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
            // Grabs exporting promise to be awaited
            const exporter = this.exporter.export(dump.stdout, Object.assign({ fileName: this.fileName }, options));
            // Wrap dump child process in a promise to handle failure properly
            const exit = new Promise((resolve, reject) => {
                dump.on('error', error => {
                    this.logger.error('Unknown export error', error);
                    reject(error);
                });
                dump.on('exit', (code) => __awaiter(this, void 0, void 0, function* () {
                    this.logger.debug('Dump child process exited', { code });
                    if (code !== 0) {
                        if (this.exporter instanceof exporters_1.FileExporter && this.options.deleteFileOnFail !== false) {
                            yield Utils.File.delete({ fileName: this.fileName, baseDir: this.options.baseDir });
                        }
                        reject(new ts_framework_common_1.BaseError('Unknown error in dump child process', { code }));
                    }
                    else {
                        resolve();
                    }
                }));
            });
            // Await for both of them in parallel
            return Promise
                .all([exit, exporter])
                .then(([exitResult, exporterResult]) => exporterResult);
        });
    }
}
exports.default = HerobackDump;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2REFBd0Q7QUFDeEQsaUNBQTZHO0FBQzdHLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMsaUNBQWlDO0FBRXBCLFFBQUEsV0FBVyxHQUFHLDREQUE0RCxDQUFDO0FBQzNFLFFBQUEsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7QUFnQ2pFLE1BQXFCLFlBQVk7SUFNL0IsWUFBNEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSw0QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxDQUFDLFFBQVEsWUFBWSx1QkFBZ0IsRUFBRTtZQUNoRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0wsUUFBUSxHQUFHLHNCQUFlLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQTRCO1FBQzVELElBQUksUUFBUSxDQUFDO1FBRWIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtB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IlxuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBCYXNlRXJyb3IsIExvZ2dlciB9IGZyb20gJ3RzLWZyYW1ld29yay1jb21tb24nO1xuaW1wb3J0IHsgZXhwb3J0ZXJGYWN0b3J5LCBFeHBvcnRPcHRpb25zLCBIZXJvYmFja0V4cG9ydGVyLCBIZXJvYmFja1Byb3ZpZGVyLCBwcm92aWRlckZhY3RvcnkgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9leHBvcnRlcnMnO1xuaW1wb3J0ICogYXMgUHJvdmlkZXJzIGZyb20gJy4vcHJvdmlkZXJzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0xFQU5fUkVHRVggPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLihcXGR7M30pWiQvO1xuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTiA9ICckMSQyJDMuJDQkNSQ2LiQ3MDAwMDAwJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja0R1bXBPcHRpb25zIHtcbiAgLyoqIFxuICAgKiBEZWxldGVzIGZpbGUgZ2VuZXJhdGVkIGlmIGR1bXBzIGZhaWxzLCBkZWZhdWx0cyB0byBcInRydWVcIi4gXG4gICAqIDxiciAvPlxuICAgKiAqKk5vdGljZToqKiBUaGlzIGlzIG9ubHkgd29ya2luZyBmb3IgdGhlIEZpbGUgZXhwb3J0ZXIuXG4gICAqL1xuICBkZWxldGVGaWxlT25GYWlsPzogYm9vbGVhbjtcblxuICAvKiogXG4gICAqIFRoZSBleHBvcnRlciB0byBiZSB1c2VkIGluIGR1bXAgcHJvY2Vzc2luZywgZGVmYXVsdHMgdG8gXCJmaWxlXCJcbiAgICovXG4gIGV4cG9ydGVyOiBzdHJpbmcgfCBIZXJvYmFja0V4cG9ydGVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZHVtcCBwcm92aWRlciB0byBiZSB1c2VkLlxuICAgKi9cbiAgcHJvdmlkZXI/OiBIZXJvYmFja1Byb3ZpZGVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYmFzZWRpciBmb3IgdGhlIGZpbGUgaW4gZXhwb3J0ZXIsIGRlZmF1bHMgdG8gJy4vJy5cbiAgICovXG4gIGJhc2VEaXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dnZXIgaW5zdGFjZSB0byBiZSB1c2VkLlxuICAgKi9cbiAgbG9nZ2VyPzogTG9nZ2VyO1xuICB1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tEdW1wIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGltZXN0YW1wOiBEYXRlO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcHJvdmlkZXI6IEhlcm9iYWNrUHJvdmlkZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBleHBvcnRlcjogSGVyb2JhY2tFeHBvcnRlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucykge1xuICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMucHJvdmlkZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZVByb3ZpZGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuZXhwb3J0ZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgcHJvdmlkZXIgaW5zdGFuY2UgYmFzZWQgb24gY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVQcm92aWRlcihvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogSGVyb2JhY2tQcm92aWRlciB7XG4gICAgbGV0IHByb3ZpZGVyO1xuXG4gICAgaWYgKG9wdGlvbnMucHJvdmlkZXIgaW5zdGFuY2VvZiBIZXJvYmFja1Byb3ZpZGVyKSB7XG4gICAgICBwcm92aWRlciA9IG9wdGlvbnMucHJvdmlkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXJGYWN0b3J5KG9wdGlvbnMsIFByb3ZpZGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuIGV4cG9ydGVyIGluc3RhbmNlIGJhc2VkIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplRXhwb3J0ZXIob3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucyk6IEhlcm9iYWNrRXhwb3J0ZXIge1xuICAgIGxldCBleHBvcnRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5leHBvcnRlciA9PT0gdHlwZW9mICdzdHInKSB7XG4gICAgICBleHBvcnRlciA9IGV4cG9ydGVyRmFjdG9yeShvcHRpb25zLmV4cG9ydGVyIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydGVyID0gb3B0aW9ucy5leHBvcnRlciBhcyBIZXJvYmFja0V4cG9ydGVyO1xuICAgIH1cblxuICAgIHJldHVybiBleHBvcnRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgZ2VuZXJhdGVkIGZpbGVuYW1lIGZvciB0aGlzIGR1bXAgaW5zdGFuY2UuXG4gICAqL1xuICBnZXQgZmlsZU5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGVhbiA9IHRoaXMudGltZXN0YW1wLnRvSVNPU3RyaW5nKCkucmVwbGFjZShDTEVBTl9SRUdFWCwgQ0xFQU5fUkVHRVhfU1VCU1RJVFVUSU9OKTtcbiAgICByZXR1cm4gYCR7Y2xlYW59LmR1bXAke3RoaXMucHJvdmlkZXIuZXh0fWA7XG4gIH1cblxuICAvKipcbiAgICogU3Bhd25zIGEgY2hpbGQgcHJvY2VzcyBhbmQgZHVtcHMgcmVxdWVzdGVkIGRhdGFiYXNlLiBUaGlzIG1ldGhvZHMgcmV0dXJucyB0aGVcbiAgICogY2hpbGQgcHJvY2VzcyBpbnN0YW5jZSBpdHNlbGYgd2l0aG91dCBhbnkgaGVyb2JhY2sgbG9naWNzIHdyYXBwZWQgeWV0LCBcbiAgICogYW5kIGlzIG1vc3RseSB1c2VkIGludGVybmFsbHkuXG4gICAqIDxiciAvPlxuICAgKiBGb3IgYSBoaWdoZXIgbGV2ZWwgaW50ZXJmYWNlLCBjaGVjayBgYGBkdW1wLmV4cG9ydCgpYGBgIGFuZCBgYGBkdW1wLnJhdygpYGBgLlxuICAgKi9cbiAgYXN5bmMgcnVuKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuZHVtcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFzIGEgcmF3IHN0cmluZy4gVGhpcyBpcyBtZWFudCBmb3IgZGV2ZWxvcG1lbnQgcHVycG9zZXMsIFxuICAgKiBtYXkgYmUgYmFkIGZvciBvdmVyYWxsIHBlcmZvbWFuY2UuXG4gICAqL1xuICBhc3luYyByYXcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gVXRpbHMuU3RyZWFtLnN0cmluZ2lmeShkdW1wLnN0ZG91dCk7XG4gIH1cblxuICAvKipcbiAgICogRHVtcHMgYW5kIGV4cG9ydHMgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBhc3luYyBleHBvcnQob3B0aW9uczogRXhwb3J0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxVdGlscy5JbnB1dFN0cmVhbT4ge1xuICAgIGNvbnN0IGR1bXAgPSBhd2FpdCB0aGlzLnJ1bigpO1xuXG4gICAgLy8gR3JhYnMgZXhwb3J0aW5nIHByb21pc2UgdG8gYmUgYXdhaXRlZFxuICAgIGNvbnN0IGV4cG9ydGVyID0gdGhpcy5leHBvcnRlci5leHBvcnQoZHVtcC5zdGRvdXQsIHsgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsIC4uLm9wdGlvbnMgfSk7XG5cbiAgICAvLyBXcmFwIGR1bXAgY2hpbGQgcHJvY2VzcyBpbiBhIHByb21pc2UgdG8gaGFuZGxlIGZhaWx1cmUgcHJvcGVybHlcbiAgICBjb25zdCBleGl0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZHVtcC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdVbmtub3duIGV4cG9ydCBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgZHVtcC5vbignZXhpdCcsIGFzeW5jIGNvZGUgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRHVtcCBjaGlsZCBwcm9jZXNzIGV4aXRlZCcsIHsgY29kZSB9KTtcbiAgICAgICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5leHBvcnRlciBpbnN0YW5jZW9mIEZpbGVFeHBvcnRlciAmJiB0aGlzLm9wdGlvbnMuZGVsZXRlRmlsZU9uRmFpbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IFV0aWxzLkZpbGUuZGVsZXRlKHsgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsIGJhc2VEaXI6IHRoaXMub3B0aW9ucy5iYXNlRGlyIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlamVjdChuZXcgQmFzZUVycm9yKCdVbmtub3duIGVycm9yIGluIGR1bXAgY2hpbGQgcHJvY2VzcycsIHsgY29kZSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuXG4gICAgLy8gQXdhaXQgZm9yIGJvdGggb2YgdGhlbSBpbiBwYXJhbGxlbFxuICAgIHJldHVybiBQcm9taXNlXG4gICAgICAuYWxsKFtleGl0LCBleHBvcnRlcl0pXG4gICAgICAudGhlbigoW2V4aXRSZXN1bHQsIGV4cG9ydGVyUmVzdWx0XSkgPT4gZXhwb3J0ZXJSZXN1bHQpO1xuICB9XG59Il19