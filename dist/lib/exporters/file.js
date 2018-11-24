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
const base_1 = require("../base");
const Utils = require("../utils");
class FileExporter extends base_1.HerobackExporter {
    constructor(options = {}) {
        super('file', options);
    }
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Utils.Stream.write(dump, { fileName: options.fileName, baseDir: options.baseDir });
        });
    }
}
exports.default = FileExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9leHBvcnRlcnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQW1GO0FBQ25GLGtDQUFrQztBQUVsQyxNQUFxQixZQUFhLFNBQVEsdUJBQWdCO0lBQ3hELFlBQVksVUFBbUMsRUFBRTtRQUMvQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFWSxNQUFNLENBQUMsSUFBdUIsRUFBRSxPQUFzQjs7WUFDakUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDNUYsQ0FBQztLQUFBO0NBQ0Y7QUFSRCwrQkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cG9ydE9wdGlvbnMsIEhlcm9iYWNrRXhwb3J0ZXIsIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVFeHBvcnRlciBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBIZXJvYmFja0V4cG9ydGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoJ2ZpbGUnLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHBvcnQoZHVtcDogVXRpbHMuSW5wdXRTdHJlYW0sIG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFV0aWxzLklucHV0U3RyZWFtPiB7XG4gICAgcmV0dXJuIFV0aWxzLlN0cmVhbS53cml0ZShkdW1wLCB7IGZpbGVOYW1lOiBvcHRpb25zLmZpbGVOYW1lLCBiYXNlRGlyOiBvcHRpb25zLmJhc2VEaXIgfSk7XG4gIH1cbn0iXX0=