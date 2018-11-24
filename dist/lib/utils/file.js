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
const path = require("path");
const fs = require("fs-extra");
class FileUtils {
    static delete(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return fs.unlink(path.join(options.baseDir || process.cwd(), options.fileName));
        });
    }
}
exports.default = FileUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlscy9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkI7QUFDN0IsK0JBQStCO0FBRS9CLE1BQXFCLFNBQVM7SUFDckIsTUFBTSxDQUFPLE1BQU0sQ0FBQyxPQUErQzs7WUFDeEUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQztLQUFBO0NBQ0Y7QUFKRCw0QkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsZXRlKG9wdGlvbnM6IHsgZmlsZU5hbWU6IHN0cmluZywgYmFzZURpcj86IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGZzLnVubGluayhwYXRoLmpvaW4oIG9wdGlvbnMuYmFzZURpciB8fCBwcm9jZXNzLmN3ZCgpLCBvcHRpb25zLmZpbGVOYW1lKSk7XG4gIH1cbn0iXX0=