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
const fs = require("fs-extra");
const path = require("path");
class StreamUtils {
    static gzip(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            // Spawn gzip child process and handle error codes
            const gzipChild = child_process_1.spawn('gzip', [], { stdio: ['pipe', 'pipe', 'inherit'] });
            stream.pipe(gzipChild.stdin);
            return gzipChild;
        });
    }
    /**
     * Reads a stream into a string variable asynchronously.
     */
    static stringify(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            const chunks = [];
            return new Promise((resolve, reject) => {
                stream.on('data', chunk => chunks.push(chunk));
                stream.on('error', reject);
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            });
        });
    }
    /**
     * Writes a stream to a file.
     */
    static write(stream, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = path.resolve(options.baseDir || './', options.fileName);
            const writeStream = fs.createWriteStream(file);
            stream.pipe(writeStream);
            return new Promise((resolve, reject) => {
                writeStream.on('error', error => reject(error));
                stream.on('error', error => reject(error));
                stream.on('end', () => resolve());
            });
        });
    }
    /**
     * Reads a file into a stream.
     */
    static read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = path.resolve(options.baseDir || './', options.fileName);
            return fs.createReadStream(file);
        });
    }
}
exports.default = StreamUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWxzL3N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaURBQW9EO0FBQ3BELCtCQUErQjtBQUMvQiw2QkFBNkI7QUFLN0IsTUFBcUIsV0FBVztJQUV2QixNQUFNLENBQU8sSUFBSSxDQUFDLE1BQW1COztZQUMxQyxrREFBa0Q7WUFDbEQsTUFBTSxTQUFTLEdBQUcscUJBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQU8sU0FBUyxDQUFDLE1BQW1COztZQUMvQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDN0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQU8sS0FBSyxDQUFDLE1BQW1CLEVBQUUsT0FBOEM7O1lBQzNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BFLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzNDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBK0M7O1lBQ3RFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUVGO0FBM0NELDhCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkUHJvY2Vzcywgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBTdHJlYW0sIFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcblxuZXhwb3J0IHR5cGUgSW5wdXRTdHJlYW0gPSBTdHJlYW07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbVV0aWxzIHtcblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGd6aXAoc3RyZWFtOiBJbnB1dFN0cmVhbSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPiB7XG4gICAgLy8gU3Bhd24gZ3ppcCBjaGlsZCBwcm9jZXNzIGFuZCBoYW5kbGUgZXJyb3IgY29kZXNcbiAgICBjb25zdCBnemlwQ2hpbGQgPSBzcGF3bignZ3ppcCcsIFtdLCB7IHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gICAgc3RyZWFtLnBpcGUoZ3ppcENoaWxkLnN0ZGluKTtcbiAgICByZXR1cm4gZ3ppcENoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGEgc3RyZWFtIGludG8gYSBzdHJpbmcgdmFyaWFibGUgYXN5bmNocm9ub3VzbHkuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0cmluZ2lmeShzdHJlYW06IElucHV0U3RyZWFtKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCBjaHVuayA9PiBjaHVua3MucHVzaChjaHVuaykpXG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgICAgc3RyZWFtLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygndXRmOCcpKSlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBzdHJlYW0gdG8gYSBmaWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyB3cml0ZShzdHJlYW06IElucHV0U3RyZWFtLCBvcHRpb25zOiB7IGZpbGVOYW1lOiBzdHJpbmcsIGJhc2VEaXI6IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZSA9IHBhdGgucmVzb2x2ZShvcHRpb25zLmJhc2VEaXIgfHwgJy4vJywgb3B0aW9ucy5maWxlTmFtZSlcbiAgICBjb25zdCB3cml0ZVN0cmVhbSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGZpbGUpO1xuICAgIHN0cmVhbS5waXBlKHdyaXRlU3RyZWFtKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVTdHJlYW0ub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBzdHJlYW0ub24oJ2VuZCcsICgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgYSBmaWxlIGludG8gYSBzdHJlYW0uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlYWQob3B0aW9uczogeyBmaWxlTmFtZTogc3RyaW5nLCBiYXNlRGlyPzogc3RyaW5nIH0pOiBQcm9taXNlPElucHV0U3RyZWFtPiB7XG4gICAgY29uc3QgZmlsZSA9IHBhdGgucmVzb2x2ZShvcHRpb25zLmJhc2VEaXIgfHwgJy4vJywgb3B0aW9ucy5maWxlTmFtZSlcbiAgICByZXR1cm4gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbiAgfVxuXG59Il19