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
class HerobackProvider {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
        // Clean the options uri undefined params
        Object.keys(this.options.uri).forEach(key => this.options.uri[key] === undefined && delete this.options.uri[key]);
        this.logger.debug(`Initializing provider for "${this.uriDefaults().protocol}" database`, {
            uri: this.uri
        });
    }
    get uri() {
        return Object.assign({}, this.uriDefaults(), this.options.uri);
    }
    migrate() {
        return __awaiter(this, void 0, void 0, function* () {
            const dump = yield this.dump();
            return this.restore(dump.stdout);
        });
    }
}
exports.default = HerobackProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmFzZS9wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsNkRBQTZDO0FBUTdDLE1BQThCLGdCQUFnQjtJQUk1QyxZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCx5Q0FBeUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFcEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsOEJBQThCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLFlBQVksRUFBRTtZQUN2RixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wseUJBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFHO0lBQ3hELENBQUM7SUFRWSxPQUFPOztZQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUVGO0FBOUJELG1DQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd0cy1mcmFtZXdvcmstY29tbW9uJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja1Byb3ZpZGVyT3B0aW9ucyB7XG4gIHVyaTogVXRpbHMuVXJpUGFyYW1zU2NoZW1hO1xuICBsb2dnZXI/OiBMb2dnZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogSGVyb2JhY2tQcm92aWRlck9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICAgIFxuICAgIC8vIENsZWFuIHRoZSBvcHRpb25zIHVyaSB1bmRlZmluZWQgcGFyYW1zXG4gICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLnVyaSApLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9ucy51cmkgW2tleV0gPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgdGhpcy5vcHRpb25zLnVyaSBba2V5XSlcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBJbml0aWFsaXppbmcgcHJvdmlkZXIgZm9yIFwiJHt0aGlzLnVyaURlZmF1bHRzKCkucHJvdG9jb2x9XCIgZGF0YWJhc2VgLCB7XG4gICAgICB1cmk6IHRoaXMudXJpXG4gICAgfSk7XG4gIH1cblxuICBnZXQgdXJpKCkge1xuICAgIHJldHVybiB7IC4uLnRoaXMudXJpRGVmYXVsdHMoKSwgLi4udGhpcy5vcHRpb25zLnVyaSB9O1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHVyaURlZmF1bHRzKCk6IFBhcnRpYWw8VXRpbHMuVXJpUGFyYW1zU2NoZW1hPjtcblxuICBwdWJsaWMgYXN5bmMgYWJzdHJhY3QgZHVtcCgpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz47XG5cbiAgcHVibGljIGFzeW5jIGFic3RyYWN0IHJlc3RvcmUoZHVtcDogVXRpbHMuSW5wdXRTdHJlYW0pOiBQcm9taXNlPENoaWxkUHJvY2Vzcz47XG5cbiAgcHVibGljIGFzeW5jIG1pZ3JhdGUoKTogUHJvbWlzZTxDaGlsZFByb2Nlc3M+IHtcbiAgICBjb25zdCBkdW1wID0gYXdhaXQgdGhpcy5kdW1wKCk7XG4gICAgcmV0dXJuIHRoaXMucmVzdG9yZShkdW1wLnN0ZG91dCk7XG4gIH1cblxufSJdfQ==