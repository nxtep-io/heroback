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
            yield Utils.Stream.write(dump.stdout, { fileName: options.fileName, baseDir: options.baseDir });
            return true;
        });
    }
}
exports.default = FileExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9leHBvcnRlcnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esa0NBQTBEO0FBQzFELGtDQUFrQztBQUVsQyxNQUFxQixZQUFhLFNBQVEsdUJBQWdCO0lBQzNDLE1BQU0sQ0FBQyxJQUFrQixFQUFFLE9BQXNCOztZQUM1RCxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDaEcsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQUxELCtCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBFeHBvcnRPcHRpb25zLCBIZXJvYmFja0V4cG9ydGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVFeHBvcnRlciBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBwdWJsaWMgYXN5bmMgZXhwb3J0KGR1bXA6IENoaWxkUHJvY2Vzcywgb3B0aW9uczogRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGF3YWl0IFV0aWxzLlN0cmVhbS53cml0ZShkdW1wLnN0ZG91dCwgeyBmaWxlTmFtZTogb3B0aW9ucy5maWxlTmFtZSwgYmFzZURpcjogb3B0aW9ucy5iYXNlRGlyIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19