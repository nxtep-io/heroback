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
            return this.gcs.bucket(process.env.GOOGLE_BUCKET_NAME || this.options.bucketName).pipe(dump);
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9leHBvcnRlcnMvdGhpcmQtcGFydHkvZ29vZ2xlLWdjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBRWhELHFDQUF1RTtBQU92RSxNQUFxQixpQkFBa0IsU0FBUSx1QkFBZ0I7SUFHN0QsWUFBbUIsVUFBb0MsRUFBRTtRQUN2RCxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBK0I7UUFHdkQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFWSxNQUFNLENBQUMsSUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRixDQUFDO0tBQUE7Q0FDRjtBQWJELG9DQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvc3RvcmFnZSc7XG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IEhlcm9iYWNrRXhwb3J0ZXIsIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVHQ1NFeHBvcnRlck9wdGlvbnMgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyT3B0aW9ucyB7XG4gIGJ1Y2tldE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZUdDU0V4cG9ydGVyIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBnY3M6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEdvb2dsZUdDU0V4cG9ydGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoJ2dvb2dsZScsIG9wdGlvbnMpO1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNsaWVudFxuICAgIHRoaXMuZ2NzID0gbmV3IFN0b3JhZ2UoeyBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9QUk9KRUNUX0lEIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4cG9ydChkdW1wOiBDaGlsZFByb2Nlc3MpOiBQcm9taXNlPElucHV0U3RyZWFtPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2NzLmJ1Y2tldChwcm9jZXNzLmVudi5HT09HTEVfQlVDS0VUX05BTUUgfHwgdGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUpLnBpcGUoZHVtcCk7XG4gIH1cbn0iXX0=