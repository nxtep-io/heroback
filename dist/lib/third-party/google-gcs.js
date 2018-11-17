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
const exporters_1 = require("../exporters");
class GoogleGCSExporter extends exporters_1.HerobackExporter {
    constructor(options) {
        super();
        this.options = options;
        // Creates a client
        this.gcs = new storage_1.Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
    }
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gcs.bucket(this.options.bucketName).pipe(dump);
            return true;
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi90aGlyZC1wYXJ0eS9nb29nbGUtZ2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtREFBZ0Q7QUFFaEQsNENBQStEO0FBTS9ELE1BQXFCLGlCQUFrQixTQUFRLDRCQUFnQjtJQUc3RCxZQUFtQixPQUFpQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURTLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBR2xELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVksTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBc0I7O1lBQzVELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQWRELG9DQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvc3RvcmFnZSc7XG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IEV4cG9ydE9wdGlvbnMsIEhlcm9iYWNrRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZXhwb3J0ZXJzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgRXhwb3J0T3B0aW9ucyB7XG4gIGJ1Y2tldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlR0NTRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGdjczogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogR29vZ2xlR0NTRXhwb3J0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIENyZWF0ZXMgYSBjbGllbnRcbiAgICB0aGlzLmdjcyA9IG5ldyBTdG9yYWdlKHsgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HT09HTEVfUFJPSkVDVF9JRCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHBvcnQoZHVtcDogQ2hpbGRQcm9jZXNzLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgYXdhaXQgdGhpcy5nY3MuYnVja2V0KHRoaXMub3B0aW9ucy5idWNrZXROYW1lKS5waXBlKGR1bXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19