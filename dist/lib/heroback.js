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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUE2QztBQUM3QyxpQ0FBMkQ7QUFDM0QsdUNBQW9FO0FBUXBFLE1BQXFCLFFBQVE7SUFHM0IsWUFBbUIsVUFBMkIsRUFBRTtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRVksSUFBSSxDQUFDLE9BQTRCOztZQUM1QyxPQUFPLElBQUksY0FBWSxpQkFBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUssT0FBTyxFQUFHLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE9BQStCOztZQUNsRCxPQUFPLElBQUksaUJBQWUsaUJBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFLLE9BQU8sRUFBRyxDQUFDO1FBQzVFLENBQUM7S0FBQTtDQUNGO0FBZEQsMkJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd0cy1mcmFtZXdvcmstY29tbW9uJztcbmltcG9ydCBIZXJvYmFja0R1bXAsIHsgSGVyb2JhY2tEdW1wT3B0aW9ucyB9IGZyb20gJy4vZHVtcCc7XG5pbXBvcnQgSGVyb2JhY2tSZXN0b3JlLCB7IEhlcm9iYWNrUmVzdG9yZU9wdGlvbnMgfSBmcm9tICcuL3Jlc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9iYWNrT3B0aW9ucyB7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgZ3ppcD86IGJvb2xlYW47XG4gIGJhc2VEaXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrIHtcbiAgcHVibGljIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBIZXJvYmFja09wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogUHJvbWlzZTxIZXJvYmFja0R1bXA+IHtcbiAgICByZXR1cm4gbmV3IEhlcm9iYWNrRHVtcCh7IGJhc2VEaXI6IHRoaXMub3B0aW9ucy5iYXNlRGlyLCAuLi5vcHRpb25zIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlc3RvcmUob3B0aW9uczogSGVyb2JhY2tSZXN0b3JlT3B0aW9ucyk6IFByb21pc2U8SGVyb2JhY2tSZXN0b3JlPiB7XG4gICAgcmV0dXJuIG5ldyBIZXJvYmFja1Jlc3RvcmUoeyBiYXNlRGlyOiB0aGlzLm9wdGlvbnMuYmFzZURpciwgLi4ub3B0aW9ucyB9KTtcbiAgfVxufSJdfQ==