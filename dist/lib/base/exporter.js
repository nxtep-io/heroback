"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_framework_common_1 = require("ts-framework-common");
class HerobackExporter {
    constructor(name, options = {}) {
        this.name = name;
        this.logger = options.logger || ts_framework_common_1.Logger.getInstance();
        this.logger.debug(`Initializing exporter for "${this.name}"`);
    }
}
exports.default = HerobackExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmFzZS9leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE2RDtBQVE3RCxNQUE4QixnQkFBZ0I7SUFHNUMsWUFBNEIsSUFBWSxFQUFFLFVBQW1DLEVBQUU7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksNEJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUlGO0FBVkQsbUNBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIsIExvZ2dlckluc3RhbmNlIH0gZnJvbSBcInRzLWZyYW1ld29yay1jb21tb25cIjtcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIHtcbiAgbG9nZ2VyPzogTG9nZ2VySW5zdGFuY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLCBvcHRpb25zOiBIZXJvYmFja0V4cG9ydGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgSW5pdGlhbGl6aW5nIGV4cG9ydGVyIGZvciBcIiR7dGhpcy5uYW1lfVwiYCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWJzdHJhY3QgZXhwb3J0KGR1bXA6IElucHV0U3RyZWFtLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxJbnB1dFN0cmVhbT47XG5cbn0iXX0=