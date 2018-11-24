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
            dump.pipe(writeStream);
            return new Promise((resolve, reject) => {
                writeStream.on('error', error => reject(error));
                dump.on('error', error => reject(error));
                dump.on('end', () => resolve(writeStream));
            });
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9leHBvcnRlcnMvdGhpcmQtcGFydHkvZ29vZ2xlLWdjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLG1EQUFnRDtBQUVoRCxxQ0FBdUU7QUFRdkUsTUFBcUIsaUJBQWtCLFNBQVEsdUJBQWdCO0lBRzdELFlBQW1CLFVBQW9DLEVBQUU7UUFDdkQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBR3ZELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVksTUFBTSxDQUFDLElBQWlCOztZQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xELFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUF0QkQsb0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAZ29vZ2xlLWNsb3VkL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja0V4cG9ydGVyLCBIZXJvYmFja0V4cG9ydGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlck9wdGlvbnMge1xuICBidWNrZXROYW1lPzogc3RyaW5nO1xuICBmaWxlTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlR0NTRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGdjczogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcignZ29vZ2xlJywgb3B0aW9ucyk7XG5cbiAgICAvLyBDcmVhdGVzIGEgY2xpZW50XG4gICAgdGhpcy5nY3MgPSBuZXcgU3RvcmFnZSh7IHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1BST0pFQ1RfSUQgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhwb3J0KGR1bXA6IElucHV0U3RyZWFtKTogUHJvbWlzZTxJbnB1dFN0cmVhbT4ge1xuICAgIGNvbnN0IGJ1Y2tldCA9IHRoaXMuZ2NzLmJ1Y2tldChwcm9jZXNzLmVudi5HT09HTEVfQlVDS0VUX05BTUUgfHwgdGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUpO1xuICAgIGNvbnN0IGZpbGUgPSBidWNrZXQuZmlsZSh0aGlzLm9wdGlvbnMuZmlsZU5hbWUgfHwgdXVpZC52NCgpKTtcbiAgICBjb25zdCB3cml0ZVN0cmVhbSA9IGZpbGUuY3JlYXRlV3JpdGVTdHJlYW0oKTtcblxuICAgIGR1bXAucGlwZSh3cml0ZVN0cmVhbSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPElucHV0U3RyZWFtPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZVN0cmVhbS5vbignZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIGR1bXAub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBkdW1wLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKHdyaXRlU3RyZWFtKSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=