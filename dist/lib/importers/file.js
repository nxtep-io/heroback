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
class FileImporter extends base_1.HerobackImporter {
    import(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Utils.Stream.read({ fileName: options.fileName, baseDir: options.baseDir });
        });
    }
}
exports.default = FileImporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbXBvcnRlcnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQTBEO0FBQzFELGtDQUFrQztBQUVsQyxNQUFxQixZQUFhLFNBQVEsdUJBQWdCO0lBQzNDLE1BQU0sQ0FBQyxPQUFzQjs7WUFDeEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyRixDQUFDO0tBQUE7Q0FDRjtBQUpELCtCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVyb2JhY2tJbXBvcnRlciwgSW1wb3J0T3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlSW1wb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0ltcG9ydGVyIHtcbiAgcHVibGljIGFzeW5jIGltcG9ydChvcHRpb25zOiBJbXBvcnRPcHRpb25zKTogUHJvbWlzZTxVdGlscy5JbnB1dFN0cmVhbT4ge1xuICAgIHJldHVybiBVdGlscy5TdHJlYW0ucmVhZCh7IGZpbGVOYW1lOiBvcHRpb25zLmZpbGVOYW1lLCBiYXNlRGlyOiBvcHRpb25zLmJhc2VEaXIgfSk7XG4gIH1cbn0iXX0=