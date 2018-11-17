"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HerobackProvider {
    constructor(options) {
        this.options = options;
    }
    get uri() {
        return Object.assign({}, this.uriDefaults, this.options.uri);
    }
}
exports.default = HerobackProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmFzZS9wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLE1BQThCLGdCQUFnQjtJQUc1QyxZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtJQUNuRCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wseUJBQVksSUFBSSxDQUFDLFdBQVcsRUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRztJQUN0RCxDQUFDO0NBTUY7QUFkRCxtQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgSGVyb2JhY2tEdW1wIGZyb20gXCIuLi9kdW1wXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHVtcE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9iYWNrUHJvdmlkZXJPcHRpb25zIHtcbiAgdXJpOiBVdGlscy5VcmlQYXJhbXNTY2hlbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhlcm9iYWNrUHJvdmlkZXIge1xuICBhYnN0cmFjdCB1cmlEZWZhdWx0czogUGFydGlhbDxVdGlscy5VcmlQYXJhbXNTY2hlbWE+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBIZXJvYmFja1Byb3ZpZGVyT3B0aW9ucykge1xuICB9XG5cbiAgZ2V0IHVyaSgpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnVyaURlZmF1bHRzLCAuLi50aGlzLm9wdGlvbnMudXJpIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWJzdHJhY3QgZHVtcChvcHRpb25zPzogRHVtcE9wdGlvbnMpOiBQcm9taXNlPENoaWxkUHJvY2Vzcz47XG5cbiAgcHVibGljIGFzeW5jIGFic3RyYWN0IHJlc3RvcmUoZHVtcDogSGVyb2JhY2tEdW1wKTogUHJvbWlzZTxib29sZWFuPjtcblxufSJdfQ==