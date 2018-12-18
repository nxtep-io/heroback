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
const ts_framework_common_1 = require("ts-framework-common");
const dump_1 = require("./dump");
const restore_1 = require("./restore");
class Heroback {
    constructor(options = {}) {
        this.options = options;
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
    }
    dump(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new dump_1.default(Object.assign({ baseDir: this.options.baseDir }, options));
        });
    }
    restore(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new restore_1.default(Object.assign({ baseDir: this.options.baseDir }, options));
        });
    }
}
exports.default = Heroback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxpQ0FBMkQ7QUFDM0QsdUNBQW9FO0FBUXBFLE1BQXFCLFFBQVE7SUFHM0IsWUFBbUIsVUFBMkIsRUFBRTtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRVksSUFBSSxDQUFDLE9BQTRCOztZQUM1QyxPQUFPLElBQUksY0FBWSxpQkFBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUssT0FBTyxFQUFHLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE9BQStCOztZQUNsRCxPQUFPLElBQUksaUJBQWUsaUJBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBQzVFLENBQUM7S0FBQTtDQUNGO0FBZEQsMkJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIsIExvZ2dlckluc3RhbmNlIH0gZnJvbSAndHMtZnJhbWV3b3JrLWNvbW1vbic7XG5pbXBvcnQgSGVyb2JhY2tEdW1wLCB7IEhlcm9iYWNrRHVtcE9wdGlvbnMgfSBmcm9tICcuL2R1bXAnO1xuaW1wb3J0IEhlcm9iYWNrUmVzdG9yZSwgeyBIZXJvYmFja1Jlc3RvcmVPcHRpb25zIH0gZnJvbSAnLi9yZXN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja09wdGlvbnMge1xuICBsb2dnZXI/OiBMb2dnZXJJbnN0YW5jZTtcbiAgZ3ppcD86IGJvb2xlYW47XG4gIGJhc2VEaXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrIHtcbiAgcHVibGljIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEhlcm9iYWNrT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBQcm9taXNlPEhlcm9iYWNrRHVtcD4ge1xuICAgIHJldHVybiBuZXcgSGVyb2JhY2tEdW1wKHsgYmFzZURpcjogdGhpcy5vcHRpb25zLmJhc2VEaXIsIC4uLm9wdGlvbnMgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShvcHRpb25zOiBIZXJvYmFja1Jlc3RvcmVPcHRpb25zKTogUHJvbWlzZTxIZXJvYmFja1Jlc3RvcmU+IHtcbiAgICByZXR1cm4gbmV3IEhlcm9iYWNrUmVzdG9yZSh7IGJhc2VEaXI6IHRoaXMub3B0aW9ucy5iYXNlRGlyLCAuLi5vcHRpb25zIH0pO1xuICB9XG59Il19