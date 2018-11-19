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
const uuid = require("uuid");
const storage_1 = require("@google-cloud/storage");
const base_1 = require("../../base");
class GoogleGCSExporter extends base_1.HerobackExporter {
    constructor(options = {}) {
        super('google', options);
        this.options = options;
        // Creates a client
        this.gcs = new storage_1.Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
    }
    export(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            const bucket = this.gcs.bucket(process.env.GOOGLE_BUCKET_NAME || this.options.bucketName);
            const file = bucket.file(this.options.fileName || uuid.v4());
            const writeStream = file.createWriteStream();
            dump.stdout.pipe(writeStream);
            return new Promise((resolve, reject) => {
                writeStream.on('error', error => reject(error));
                dump.on('error', error => reject(error));
                dump.on('end', () => resolve(writeStream));
            });
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9leHBvcnRlcnMvdGhpcmQtcGFydHkvZ29vZ2xlLWdjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLG1EQUFnRDtBQUVoRCxxQ0FBdUU7QUFRdkUsTUFBcUIsaUJBQWtCLFNBQVEsdUJBQWdCO0lBRzdELFlBQW1CLFVBQW9DLEVBQUU7UUFDdkQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBR3ZELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVksTUFBTSxDQUFDLElBQWtCOztZQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksT0FBTyxDQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNsRCxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGdvb2dsZS1jbG91ZC9zdG9yYWdlJztcbmltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tFeHBvcnRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUdDU0V4cG9ydGVyT3B0aW9ucyBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIHtcbiAgYnVja2V0TmFtZT86IHN0cmluZztcbiAgZmlsZU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZUdDU0V4cG9ydGVyIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBnY3M6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEdvb2dsZUdDU0V4cG9ydGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoJ2dvb2dsZScsIG9wdGlvbnMpO1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNsaWVudFxuICAgIHRoaXMuZ2NzID0gbmV3IFN0b3JhZ2UoeyBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9QUk9KRUNUX0lEIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4cG9ydChkdW1wOiBDaGlsZFByb2Nlc3MpOiBQcm9taXNlPElucHV0U3RyZWFtPiB7XG4gICAgY29uc3QgYnVja2V0ID0gdGhpcy5nY3MuYnVja2V0KHByb2Nlc3MuZW52LkdPT0dMRV9CVUNLRVRfTkFNRSB8fCB0aGlzLm9wdGlvbnMuYnVja2V0TmFtZSk7XG4gICAgY29uc3QgZmlsZSA9IGJ1Y2tldC5maWxlKHRoaXMub3B0aW9ucy5maWxlTmFtZSB8fCB1dWlkLnY0KCkpO1xuICAgIGNvbnN0IHdyaXRlU3RyZWFtID0gZmlsZS5jcmVhdGVXcml0ZVN0cmVhbSgpO1xuXG4gICAgZHVtcC5zdGRvdXQucGlwZSh3cml0ZVN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPElucHV0U3RyZWFtPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZVN0cmVhbS5vbignZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIGR1bXAub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBkdW1wLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKHdyaXRlU3RyZWFtKSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=