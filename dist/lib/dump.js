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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2REFBd0U7QUFDeEUsaUNBQTZHO0FBQzdHLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMsaUNBQWlDO0FBRXBCLFFBQUEsV0FBVyxHQUFHLDREQUE0RCxDQUFDO0FBQzNFLFFBQUEsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7QUFnQ2pFLE1BQXFCLFlBQVk7SUFNL0IsWUFBNEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSw0QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxDQUFDLFFBQVEsWUFBWSx1QkFBZ0IsRUFBRTtZQUNoRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0wsUUFBUSxHQUFHLHNCQUFlLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQTRCO1FBQzVELElBQUksUUFBUSxDQUFDO1FBRWIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtB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IlxuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBCYXNlRXJyb3IsIExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICd0cy1mcmFtZXdvcmstY29tbW9uJztcbmltcG9ydCB7IGV4cG9ydGVyRmFjdG9yeSwgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZXhwb3J0ZXJzJztcbmltcG9ydCAqIGFzIFByb3ZpZGVycyBmcm9tICcuL3Byb3ZpZGVycyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYID0gL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KS4oXFxkezN9KVokLztcbmV4cG9ydCBjb25zdCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04gPSAnJDEkMiQzLiQ0JDUkNi4kNzAwMDAwMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tEdW1wT3B0aW9ucyB7XG4gIC8qKiBcbiAgICogRGVsZXRlcyBmaWxlIGdlbmVyYXRlZCBpZiBkdW1wcyBmYWlscywgZGVmYXVsdHMgdG8gXCJ0cnVlXCIuIFxuICAgKiA8YnIgLz5cbiAgICogKipOb3RpY2U6KiogVGhpcyBpcyBvbmx5IHdvcmtpbmcgZm9yIHRoZSBGaWxlIGV4cG9ydGVyLlxuICAgKi9cbiAgZGVsZXRlRmlsZU9uRmFpbD86IGJvb2xlYW47XG5cbiAgLyoqIFxuICAgKiBUaGUgZXhwb3J0ZXIgdG8gYmUgdXNlZCBpbiBkdW1wIHByb2Nlc3NpbmcsIGRlZmF1bHRzIHRvIFwiZmlsZVwiXG4gICAqL1xuICBleHBvcnRlcjogc3RyaW5nIHwgSGVyb2JhY2tFeHBvcnRlcjtcblxuICAvKipcbiAgICogVGhlIGR1bXAgcHJvdmlkZXIgdG8gYmUgdXNlZC5cbiAgICovXG4gIHByb3ZpZGVyPzogSGVyb2JhY2tQcm92aWRlcjtcblxuICAvKipcbiAgICogVGhlIGJhc2VkaXIgZm9yIHRoZSBmaWxlIGluIGV4cG9ydGVyLCBkZWZhdWxzIHRvICcuLycuXG4gICAqL1xuICBiYXNlRGlyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VyIGluc3RhY2UgdG8gYmUgdXNlZC5cbiAgICovXG4gIGxvZ2dlcj86IExvZ2dlckluc3RhbmNlO1xuICB1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tEdW1wIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aW1lc3RhbXA6IERhdGU7XG4gIHByb3RlY3RlZCByZWFkb25seSBwcm92aWRlcjogSGVyb2JhY2tQcm92aWRlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4cG9ydGVyOiBIZXJvYmFja0V4cG9ydGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKSB7XG4gICAgdGhpcy50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5wcm92aWRlciA9IEhlcm9iYWNrRHVtcC5pbml0aWFsaXplUHJvdmlkZXIob3B0aW9ucyk7XG4gICAgdGhpcy5leHBvcnRlciA9IEhlcm9iYWNrRHVtcC5pbml0aWFsaXplRXhwb3J0ZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBwcm92aWRlciBpbnN0YW5jZSBiYXNlZCBvbiBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZVByb3ZpZGVyKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBIZXJvYmFja1Byb3ZpZGVyIHtcbiAgICBsZXQgcHJvdmlkZXI7XG5cbiAgICBpZiAob3B0aW9ucy5wcm92aWRlciBpbnN0YW5jZW9mIEhlcm9iYWNrUHJvdmlkZXIpIHtcbiAgICAgIHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmlkZXIgPSBwcm92aWRlckZhY3Rvcnkob3B0aW9ucywgUHJvdmlkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW4gZXhwb3J0ZXIgaW5zdGFuY2UgYmFzZWQgb24gY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVFeHBvcnRlcihvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogSGVyb2JhY2tFeHBvcnRlciB7XG4gICAgbGV0IGV4cG9ydGVyO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmV4cG9ydGVyID09PSB0eXBlb2YgJ3N0cicpIHtcbiAgICAgIGV4cG9ydGVyID0gZXhwb3J0ZXJGYWN0b3J5KG9wdGlvbnMuZXhwb3J0ZXIgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0ZXIgPSBvcHRpb25zLmV4cG9ydGVyIGFzIEhlcm9iYWNrRXhwb3J0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBnZW5lcmF0ZWQgZmlsZW5hbWUgZm9yIHRoaXMgZHVtcCBpbnN0YW5jZS5cbiAgICovXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsZWFuID0gdGhpcy50aW1lc3RhbXAudG9JU09TdHJpbmcoKS5yZXBsYWNlKENMRUFOX1JFR0VYLCBDTEVBTl9SRUdFWF9TVUJTVElUVVRJT04pO1xuICAgIHJldHVybiBgJHtjbGVhbn0uZHVtcCR7dGhpcy5wcm92aWRlci5leHR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3bnMgYSBjaGlsZCBwcm9jZXNzIGFuZCBkdW1wcyByZXF1ZXN0ZWQgZGF0YWJhc2UuIFRoaXMgbWV0aG9kcyByZXR1cm5zIHRoZVxuICAgKiBjaGlsZCBwcm9jZXNzIGluc3RhbmNlIGl0c2VsZiB3aXRob3V0IGFueSBoZXJvYmFjayBsb2dpY3Mgd3JhcHBlZCB5ZXQsIFxuICAgKiBhbmQgaXMgbW9zdGx5IHVzZWQgaW50ZXJuYWxseS5cbiAgICogPGJyIC8+XG4gICAqIEZvciBhIGhpZ2hlciBsZXZlbCBpbnRlcmZhY2UsIGNoZWNrIGBgYGR1bXAuZXhwb3J0KClgYGAgYW5kIGBgYGR1bXAucmF3KClgYGAuXG4gICAqL1xuICBhc3luYyBydW4oKTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlci5kdW1wKCk7XG4gIH1cblxuICAvKipcbiAgICogRHVtcHMgYXMgYSByYXcgc3RyaW5nLiBUaGlzIGlzIG1lYW50IGZvciBkZXZlbG9wbWVudCBwdXJwb3NlcywgXG4gICAqIG1heSBiZSBiYWQgZm9yIG92ZXJhbGwgcGVyZm9tYW5jZS5cbiAgICovXG4gIGFzeW5jIHJhdygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGR1bXAgPSBhd2FpdCB0aGlzLnJ1bigpO1xuICAgIHJldHVybiBVdGlscy5TdHJlYW0uc3RyaW5naWZ5KGR1bXAuc3Rkb3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdW1wcyBhbmQgZXhwb3J0cyB0aGUgcmVzdWx0cy5cbiAgICovXG4gIGFzeW5jIGV4cG9ydChvcHRpb25zOiBFeHBvcnRPcHRpb25zID0ge30pOiBQcm9taXNlPFV0aWxzLklucHV0U3RyZWFtPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG5cbiAgICAvLyBHcmFicyBleHBvcnRpbmcgcHJvbWlzZSB0byBiZSBhd2FpdGVkXG4gICAgY29uc3QgZXhwb3J0ZXIgPSB0aGlzLmV4cG9ydGVyLmV4cG9ydChkdW1wLnN0ZG91dCwgeyBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSwgLi4ub3B0aW9ucyB9KTtcblxuICAgIC8vIFdyYXAgZHVtcCBjaGlsZCBwcm9jZXNzIGluIGEgcHJvbWlzZSB0byBoYW5kbGUgZmFpbHVyZSBwcm9wZXJseVxuICAgIGNvbnN0IGV4aXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkdW1wLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ1Vua25vd24gZXhwb3J0IGVycm9yJywgZXJyb3IpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICBkdW1wLm9uKCdleGl0JywgYXN5bmMgY29kZSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEdW1wIGNoaWxkIHByb2Nlc3MgZXhpdGVkJywgeyBjb2RlIH0pO1xuICAgICAgICBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgICAgIGlmICh0aGlzLmV4cG9ydGVyIGluc3RhbmNlb2YgRmlsZUV4cG9ydGVyICYmIHRoaXMub3B0aW9ucy5kZWxldGVGaWxlT25GYWlsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgVXRpbHMuRmlsZS5kZWxldGUoeyBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSwgYmFzZURpcjogdGhpcy5vcHRpb25zLmJhc2VEaXIgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVqZWN0KG5ldyBCYXNlRXJyb3IoJ1Vua25vd24gZXJyb3IgaW4gZHVtcCBjaGlsZCBwcm9jZXNzJywgeyBjb2RlIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvLyBBd2FpdCBmb3IgYm90aCBvZiB0aGVtIGluIHBhcmFsbGVsXG4gICAgcmV0dXJuIFByb21pc2VcbiAgICAgIC5hbGwoW2V4aXQsIGV4cG9ydGVyXSlcbiAgICAgIC50aGVuKChbZXhpdFJlc3VsdCwgZXhwb3J0ZXJSZXN1bHRdKSA9PiBleHBvcnRlclJlc3VsdCk7XG4gIH1cbn0iXX0=