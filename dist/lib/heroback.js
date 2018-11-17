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
class Heroback {
    constructor(options = {}) {
        this.options = options;
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
    }
    dump(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new dump_1.default(options);
        });
    }
}
exports.default = Heroback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2JhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaGVyb2JhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUE2QztBQUM3QyxpQ0FBMkQ7QUFNM0QsTUFBcUIsUUFBUTtJQUczQixZQUFtQixVQUEyQixFQUFFO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSw0QkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxJQUFJLENBQUMsT0FBNEI7O1lBQzVDLE9BQU8sSUFBSSxjQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBQ0Y7QUFWRCwyQkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3RzLWZyYW1ld29yay1jb21tb24nO1xuaW1wb3J0IEhlcm9iYWNrRHVtcCwgeyBIZXJvYmFja0R1bXBPcHRpb25zIH0gZnJvbSAnLi9kdW1wJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja09wdGlvbnMge1xuICBsb2dnZXI/OiBMb2dnZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9iYWNrIHtcbiAgcHVibGljIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBIZXJvYmFja09wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZHVtcChvcHRpb25zOiBIZXJvYmFja0R1bXBPcHRpb25zKTogUHJvbWlzZTxIZXJvYmFja0R1bXA+IHtcbiAgICByZXR1cm4gbmV3IEhlcm9iYWNrRHVtcChvcHRpb25zKTtcbiAgfVxufSJdfQ==