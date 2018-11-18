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
const base_1 = require("../base");
class GoogleGCSExporter extends base_1.HerobackExporter {
    constructor(options) {
        super();
        this.options = options;
        // Creates a client
        this.gcs = new storage_1.Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
    }
    export(dump) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.gcs.bucket(this.options.bucketName).pipe(dump);
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi90aGlyZC1wYXJ0eS9nb29nbGUtZ2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtREFBZ0Q7QUFFaEQsa0NBQTBEO0FBTzFELE1BQXFCLGlCQUFrQixTQUFRLHVCQUFnQjtJQUc3RCxZQUFtQixPQUFpQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURTLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBR2xELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVksTUFBTSxDQUFDLElBQWtCOztZQUNwQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtDQUNGO0FBYkQsb0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGdvb2dsZS1jbG91ZC9zdG9yYWdlJztcbmltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgRXhwb3J0T3B0aW9ucyB7XG4gIGJ1Y2tldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlR0NTRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGdjczogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIENyZWF0ZXMgYSBjbGllbnRcbiAgICB0aGlzLmdjcyA9IG5ldyBTdG9yYWdlKHsgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HT09HTEVfUFJPSkVDVF9JRCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHBvcnQoZHVtcDogQ2hpbGRQcm9jZXNzKTogUHJvbWlzZTxJbnB1dFN0cmVhbT4ge1xuICAgIHJldHVybiB0aGlzLmdjcy5idWNrZXQodGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUpLnBpcGUoZHVtcCk7XG4gIH1cbn0iXX0=