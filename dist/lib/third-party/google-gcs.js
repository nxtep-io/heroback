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
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gcs.bucket(this.options.bucketName).pipe(dump);
            return true;
        });
    }
}
exports.default = GoogleGCSExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWdjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi90aGlyZC1wYXJ0eS9nb29nbGUtZ2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtREFBZ0Q7QUFFaEQsa0NBQTBEO0FBTTFELE1BQXFCLGlCQUFrQixTQUFRLHVCQUFnQjtJQUc3RCxZQUFtQixPQUFpQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURTLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBR2xELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVksTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBc0I7O1lBQzVELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQWRELG9DQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvc3RvcmFnZSc7XG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IEV4cG9ydE9wdGlvbnMsIEhlcm9iYWNrRXhwb3J0ZXIgfSBmcm9tICcuLi9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVHQ1NFeHBvcnRlck9wdGlvbnMgZXh0ZW5kcyBFeHBvcnRPcHRpb25zIHtcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVHQ1NFeHBvcnRlciBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ2NzOiBTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBHb29nbGVHQ1NFeHBvcnRlck9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gQ3JlYXRlcyBhIGNsaWVudFxuICAgIHRoaXMuZ2NzID0gbmV3IFN0b3JhZ2UoeyBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9QUk9KRUNUX0lEIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4cG9ydChkdW1wOiBDaGlsZFByb2Nlc3MsIG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBhd2FpdCB0aGlzLmdjcy5idWNrZXQodGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUpLnBpcGUoZHVtcCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXX0=