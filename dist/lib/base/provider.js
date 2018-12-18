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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmFzZS9wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsNkRBQTZEO0FBUTdELE1BQThCLGdCQUFnQjtJQUk1QyxZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCx5Q0FBeUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFcEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsOEJBQThCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLFlBQVksRUFBRTtZQUN2RixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wseUJBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFHO0lBQ3hELENBQUM7SUFRWSxPQUFPOztZQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUVGO0FBOUJELG1DQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBMb2dnZXIsIExvZ2dlckluc3RhbmNlIH0gZnJvbSAndHMtZnJhbWV3b3JrLWNvbW1vbic7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb2JhY2tQcm92aWRlck9wdGlvbnMge1xuICB1cmk6IFV0aWxzLlVyaVBhcmFtc1NjaGVtYTtcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBIZXJvYmFja1Byb3ZpZGVyT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgXG4gICAgLy8gQ2xlYW4gdGhlIG9wdGlvbnMgdXJpIHVuZGVmaW5lZCBwYXJhbXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMudXJpICkuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zLnVyaSBba2V5XSA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSB0aGlzLm9wdGlvbnMudXJpIFtrZXldKVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEluaXRpYWxpemluZyBwcm92aWRlciBmb3IgXCIke3RoaXMudXJpRGVmYXVsdHMoKS5wcm90b2NvbH1cIiBkYXRhYmFzZWAsIHtcbiAgICAgIHVyaTogdGhpcy51cmlcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB1cmkoKSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy51cmlEZWZhdWx0cygpLCAuLi50aGlzLm9wdGlvbnMudXJpIH07XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgdXJpRGVmYXVsdHMoKTogUGFydGlhbDxVdGlscy5VcmlQYXJhbXNTY2hlbWE+O1xuXG4gIHB1YmxpYyBhc3luYyBhYnN0cmFjdCBkdW1wKCk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPjtcblxuICBwdWJsaWMgYXN5bmMgYWJzdHJhY3QgcmVzdG9yZShkdW1wOiBVdGlscy5JbnB1dFN0cmVhbSk6IFByb21pc2U8Q2hpbGRQcm9jZXNzPjtcblxuICBwdWJsaWMgYXN5bmMgbWlncmF0ZSgpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz4ge1xuICAgIGNvbnN0IGR1bXAgPSBhd2FpdCB0aGlzLmR1bXAoKTtcbiAgICByZXR1cm4gdGhpcy5yZXN0b3JlKGR1bXAuc3Rkb3V0KTtcbiAgfVxuXG59Il19