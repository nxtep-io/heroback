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
const Utils = require("../utils");
const base_1 = require("./base");
class FileExporter extends base_1.default {
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Utils.Stream.write(dump.stdout, { fileName: options.fileName, baseDir: options.baseDir });
            return true;
        });
    }
}
exports.default = FileExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9leHBvcnRlcnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQWtDO0FBQ2xDLGlDQUF5RDtBQUd6RCxNQUFxQixZQUFhLFNBQVEsY0FBZ0I7SUFDM0MsTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBc0I7O1lBQzVELE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNoRyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNGO0FBTEQsK0JBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgSGVyb2JhY2tFeHBvcnRlciwgeyBFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVFeHBvcnRlciBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBwdWJsaWMgYXN5bmMgZXhwb3J0KGR1bXA6IENoaWxkUHJvY2Vzcywgb3B0aW9uczogRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGF3YWl0IFV0aWxzLlN0cmVhbS53cml0ZShkdW1wLnN0ZG91dCwgeyBmaWxlTmFtZTogb3B0aW9ucy5maWxlTmFtZSwgYmFzZURpcjogb3B0aW9ucy5iYXNlRGlyIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19