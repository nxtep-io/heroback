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
const dump_1 = require("./dump");
class Heroback {
    dump(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new dump_1.default(options);
        });
    }
}
exports.default = Heroback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUEyRDtBQUUzRCxNQUFxQixRQUFRO0lBQ2QsSUFBSSxDQUFDLE9BQTRCOztZQUM1QyxPQUFPLElBQUksY0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUNGO0FBSkQsMkJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVyb2JhY2tEdW1wLCB7IEhlcm9iYWNrRHVtcE9wdGlvbnMgfSBmcm9tICcuL2R1bXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvYmFjayB7XG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBQcm9taXNlPEhlcm9iYWNrRHVtcD4ge1xuICAgIHJldHVybiBuZXcgSGVyb2JhY2tEdW1wKG9wdGlvbnMpO1xuICB9XG59Il19