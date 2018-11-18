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
            return new dump_1.default(Object.assign({ gzip: this.options.gzip, baseDir: this.options.baseDir }, options));
        });
    }
    restore(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new restore_1.default(Object.assign({ gzip: this.options.gzip, baseDir: this.options.baseDir }, options));
        });
    }
}
exports.default = Heroback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUE2QztBQUM3QyxpQ0FBMkQ7QUFDM0QsdUNBQW9FO0FBUXBFLE1BQXFCLFFBQVE7SUFHM0IsWUFBbUIsVUFBMkIsRUFBRTtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRVksSUFBSSxDQUFDLE9BQTRCOztZQUM1QyxPQUFPLElBQUksY0FBWSxpQkFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQzFCLE9BQU8sRUFDVixDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE9BQStCOztZQUNsRCxPQUFPLElBQUksaUJBQWUsaUJBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUMxQixPQUFPLEVBQ1YsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBdEJELDJCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3RzLWZyYW1ld29yay1jb21tb24nO1xuaW1wb3J0IEhlcm9iYWNrRHVtcCwgeyBIZXJvYmFja0R1bXBPcHRpb25zIH0gZnJvbSAnLi9kdW1wJztcbmltcG9ydCBIZXJvYmFja1Jlc3RvcmUsIHsgSGVyb2JhY2tSZXN0b3JlT3B0aW9ucyB9IGZyb20gJy4vcmVzdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tPcHRpb25zIHtcbiAgbG9nZ2VyPzogTG9nZ2VyO1xuICBnemlwPzogYm9vbGVhbjtcbiAgYmFzZURpcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2sge1xuICBwdWJsaWMgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEhlcm9iYWNrT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkdW1wKG9wdGlvbnM6IEhlcm9iYWNrRHVtcE9wdGlvbnMpOiBQcm9taXNlPEhlcm9iYWNrRHVtcD4ge1xuICAgIHJldHVybiBuZXcgSGVyb2JhY2tEdW1wKHtcbiAgICAgIGd6aXA6IHRoaXMub3B0aW9ucy5nemlwLFxuICAgICAgYmFzZURpcjogdGhpcy5vcHRpb25zLmJhc2VEaXIsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzdG9yZShvcHRpb25zOiBIZXJvYmFja1Jlc3RvcmVPcHRpb25zKTogUHJvbWlzZTxIZXJvYmFja1Jlc3RvcmU+IHtcbiAgICByZXR1cm4gbmV3IEhlcm9iYWNrUmVzdG9yZSh7XG4gICAgICBnemlwOiB0aGlzLm9wdGlvbnMuZ3ppcCxcbiAgICAgIGJhc2VEaXI6IHRoaXMub3B0aW9ucy5iYXNlRGlyLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0pO1xuICB9XG59Il19