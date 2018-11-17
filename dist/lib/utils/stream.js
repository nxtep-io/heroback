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
const fs = require("fs");
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
     * Reads a stream into a string variable asynchronously.
     */
    static write(stream, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = path.resolve(options.baseDir || './', options.fileName);
            const writeStream = fs.createWriteStream(file);
            stream.pipe(writeStream);
            return new Promise((resolve, reject) => {
                writeStream.on('error', error => reject(error));
                writeStream.on('end', () => resolve());
            });
        });
    }
}
exports.default = StreamUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWxzL3N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaURBQW9EO0FBQ3BELHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFJN0IsTUFBcUIsV0FBVztJQUV2QixNQUFNLENBQU8sSUFBSSxDQUFDLE1BQW1COztZQUMxQyxrREFBa0Q7WUFDbEQsTUFBTSxTQUFTLEdBQUcscUJBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQU8sU0FBUyxDQUFDLE1BQW1COztZQUMvQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDN0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQU8sS0FBSyxDQUFDLE1BQW1CLEVBQUUsT0FBOEM7O1lBQzNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BFLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzNDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FFRjtBQWxDRCw4QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFN0cmVhbSA9IHsgb246IEZ1bmN0aW9uLCBwaXBlOiBGdW5jdGlvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1VdGlscyB7XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnemlwKHN0cmVhbTogSW5wdXRTdHJlYW0pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIC8vIFNwYXduIGd6aXAgY2hpbGQgcHJvY2VzcyBhbmQgaGFuZGxlIGVycm9yIGNvZGVzXG4gICAgY29uc3QgZ3ppcENoaWxkID0gc3Bhd24oJ2d6aXAnLCBbXSwgeyBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaW5oZXJpdCddIH0pO1xuICAgIHN0cmVhbS5waXBlKGd6aXBDaGlsZC5zdGRpbik7XG4gICAgcmV0dXJuIGd6aXBDaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBhIHN0cmVhbSBpbnRvIGEgc3RyaW5nIHZhcmlhYmxlIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBzdHJpbmdpZnkoc3RyZWFtOiBJbnB1dFN0cmVhbSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgY2h1bmsgPT4gY2h1bmtzLnB1c2goY2h1bmspKVxuICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIHJlamVjdClcbiAgICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4gcmVzb2x2ZShCdWZmZXIuY29uY2F0KGNodW5rcykudG9TdHJpbmcoJ3V0ZjgnKSkpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgYSBzdHJlYW0gaW50byBhIHN0cmluZyB2YXJpYWJsZSBhc3luY2hyb25vdXNseS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUoc3RyZWFtOiBJbnB1dFN0cmVhbSwgb3B0aW9uczogeyBmaWxlTmFtZTogc3RyaW5nLCBiYXNlRGlyOiBzdHJpbmcgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSBwYXRoLnJlc29sdmUob3B0aW9ucy5iYXNlRGlyIHx8ICcuLycsIG9wdGlvbnMuZmlsZU5hbWUpXG4gICAgY29uc3Qgd3JpdGVTdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShmaWxlKTtcbiAgICBzdHJlYW0ucGlwZSh3cml0ZVN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlU3RyZWFtLm9uKCdlcnJvcicsIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgd3JpdGVTdHJlYW0ub24oJ2VuZCcsICgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxufSJdfQ==