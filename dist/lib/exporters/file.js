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
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Utils.Stream.write(dump.stdout, { fileName: options.fileName, baseDir: options.baseDir });
        });
    }
}
exports.default = FileExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9leHBvcnRlcnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esa0NBQTBEO0FBQzFELGtDQUFrQztBQUVsQyxNQUFxQixZQUFhLFNBQVEsdUJBQWdCO0lBQzNDLE1BQU0sQ0FBQyxJQUFrQixFQUFFLE9BQXNCOztZQUM1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkcsQ0FBQztLQUFBO0NBQ0Y7QUFKRCwrQkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHVibGljIGFzeW5jIGV4cG9ydChkdW1wOiBDaGlsZFByb2Nlc3MsIG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFV0aWxzLklucHV0U3RyZWFtPiB7XG4gICAgcmV0dXJuIFV0aWxzLlN0cmVhbS53cml0ZShkdW1wLnN0ZG91dCwgeyBmaWxlTmFtZTogb3B0aW9ucy5maWxlTmFtZSwgYmFzZURpcjogb3B0aW9ucy5iYXNlRGlyIH0pO1xuICB9XG59Il19