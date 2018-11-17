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
const exporters_1 = require("./exporters");
const providers_1 = require("./providers");
const Utils = require("./utils");
exports.CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
exports.CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';
class HerobackDump {
    constructor(options) {
        this.options = options;
        this.timestamp = new Date();
        this.uri = Utils.Uri.parse(options.uri);
        this.provider = HerobackDump.initializeProvider(options);
        this.exporter = HerobackDump.initializeExporter(options);
    }
    /**
     * Initializes an exporter instance based on constructor options.
     */
    static initializeProvider(options) {
        let provider;
        if (typeof options.provider === typeof 'str') {
            provider = providers_1.providerFactory(options.provider);
        }
        else {
            provider = options.provider;
        }
        return provider;
    }
    /**
     * Initializes an exporter instance based on constructor options.
     */
    static initializeExporter(options) {
        let exporter;
        if (typeof options.exporter === typeof 'str') {
            exporter = exporters_1.exporterFactory(options.exporter);
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
            const dump = yield this.provider.dump({ uri: this.uri });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kdW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSwyQ0FBK0U7QUFDL0UsMkNBQWdFO0FBQ2hFLGlDQUFpQztBQUVwQixRQUFBLFdBQVcsR0FBRyw0REFBNEQsQ0FBQztBQUMzRSxRQUFBLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0FBVWpFLE1BQXFCLFlBQVk7SUFNL0IsWUFBNEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sS0FBSyxFQUFFO1lBQzVDLFFBQVEsR0FBRywyQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBNEIsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUE0QjtRQUM1RCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sS0FBSyxFQUFFO1lBQzVDLFFBQVEsR0FBRywyQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBNEIsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFXLEVBQUUsZ0NBQXdCLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxLQUFLLFNBQVMsQ0FBQztTQUMxQjtRQUNELE9BQU8sR0FBRyxLQUFLLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0csR0FBRzs7WUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRXpELGlDQUFpQztZQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNyQixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDRyxHQUFHOztZQUNQLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0csTUFBTSxDQUFDLFVBQXlCLEVBQUU7O1lBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSyxPQUFPLEVBQUcsQ0FBQztRQUM3RSxDQUFDO0tBQUE7Q0FDRjtBQXpGRCwrQkF5RkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4cG9ydGVyRmFjdG9yeSwgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciB9IGZyb20gJy4vZXhwb3J0ZXJzJztcbmltcG9ydCB7IEhlcm9iYWNrUHJvdmlkZXIsIHByb3ZpZGVyRmFjdG9yeSB9IGZyb20gJy4vcHJvdmlkZXJzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0xFQU5fUkVHRVggPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLihcXGR7M30pWiQvO1xuZXhwb3J0IGNvbnN0IENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTiA9ICckMSQyJDMuJDQkNSQ2LiQ3MDAwMDAwJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja0R1bXBPcHRpb25zIHtcbiAgcHJvdmlkZXI6IHN0cmluZyB8IEhlcm9iYWNrUHJvdmlkZXI7XG4gIGV4cG9ydGVyOiBzdHJpbmcgfCBIZXJvYmFja0V4cG9ydGVyO1xuICBiYXNlRGlyPzogc3RyaW5nO1xuICBnemlwPzogYm9vbGVhbjtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrRHVtcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSB1cmk6IFV0aWxzLlVyaVBhcmFtc1NjaGVtYTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRpbWVzdGFtcDogRGF0ZTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHByb3ZpZGVyOiBIZXJvYmFja1Byb3ZpZGVyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXhwb3J0ZXI6IEhlcm9iYWNrRXhwb3J0ZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpIHtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy51cmkgPSBVdGlscy5VcmkucGFyc2Uob3B0aW9ucy51cmkpO1xuICAgIHRoaXMucHJvdmlkZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZVByb3ZpZGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuZXhwb3J0ZXIgPSBIZXJvYmFja0R1bXAuaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuIGV4cG9ydGVyIGluc3RhbmNlIGJhc2VkIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tEdW1wT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcm92aWRlciA9PT0gdHlwZW9mICdzdHInKSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zLnByb3ZpZGVyIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlciBhcyBIZXJvYmFja1Byb3ZpZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbiBleHBvcnRlciBpbnN0YW5jZSBiYXNlZCBvbiBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZUV4cG9ydGVyKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBIZXJvYmFja0V4cG9ydGVyIHtcbiAgICBsZXQgZXhwb3J0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXhwb3J0ZXIgPT09IHR5cGVvZiAnc3RyJykge1xuICAgICAgZXhwb3J0ZXIgPSBleHBvcnRlckZhY3Rvcnkob3B0aW9ucy5leHBvcnRlciBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRlciA9IG9wdGlvbnMuZXhwb3J0ZXIgYXMgSGVyb2JhY2tFeHBvcnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0ZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGdlbmVyYXRlZCBmaWxlbmFtZSBmb3IgdGhpcyBkdW1wIGluc3RhbmNlLlxuICAgKi9cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xlYW4gPSB0aGlzLnRpbWVzdGFtcC50b0lTT1N0cmluZygpLnJlcGxhY2UoQ0xFQU5fUkVHRVgsIENMRUFOX1JFR0VYX1NVQlNUSVRVVElPTik7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nemlwKSB7XG4gICAgICByZXR1cm4gYCR7Y2xlYW59LnNxbC5nemA7XG4gICAgfVxuICAgIHJldHVybiBgJHtjbGVhbn0uc3FsYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3bnMgYSBjaGlsZCBwcm9jZXNzIGFuZCBkdW1wcyByZXF1ZXN0ZWQgZGF0YWJhc2UuIFRoaXMgbWV0aG9kcyByZXR1cm5zIHRoZVxuICAgKiBjaGlsZCBwcm9jZXNzIGluc3RhbmNlIGl0c2VsZiB3aXRob3V0IGFueSBoZXJvYmFjayBsb2dpY3Mgd3JhcHBlZCB5ZXQsIFxuICAgKiBhbmQgaXMgbW9zdGx5IHVzZWQgaW50ZXJuYWxseS5cbiAgICogPGJyIC8+XG4gICAqIEZvciBhIGhpZ2hlciBsZXZlbCBpbnRlcmZhY2UsIGNoZWNrIGBgYGR1bXAuZXhwb3J0KClgYGAgYW5kIGBgYGR1bXAucmF3KClgYGAuXG4gICAqL1xuICBhc3luYyBydW4oKTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5wcm92aWRlci5kdW1wKHsgdXJpOiB0aGlzLnVyaSB9KTtcblxuICAgIC8vIE9wdGlvbmFsbHksIGNvbXByZXNzIHdpdGggR1pJUFxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ3ppcCkge1xuICAgICAgY29uc3QgZ3ppcENoaWxkID0gVXRpbHMuU3RyZWFtLmd6aXAoZHVtcC5zdGRvdXQpO1xuICAgICAgcmV0dXJuIGd6aXBDaGlsZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZHVtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdW1wcyBhcyBhIHJhdyBzdHJpbmcuIFRoaXMgaXMgbWVhbnQgZm9yIGRldmVsb3BtZW50IHB1cnBvc2VzLCBcbiAgICogbWF5IGJlIGJhZCBmb3Igb3ZlcmFsbCBwZXJmb21hbmNlLlxuICAgKi9cbiAgYXN5bmMgcmF3KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgZHVtcCA9IGF3YWl0IHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIFV0aWxzLlN0cmVhbS5zdHJpbmdpZnkoZHVtcC5zdGRvdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIER1bXBzIGFuZCBleHBvcnRzIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgYXN5bmMgZXhwb3J0KG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMgPSB7fSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGR1bXAgPSBhd2FpdCB0aGlzLnJ1bigpO1xuICAgIHJldHVybiB0aGlzLmV4cG9ydGVyLmV4cG9ydChkdW1wLCB7IGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLCAuLi5vcHRpb25zIH0pO1xuICB9XG59Il19