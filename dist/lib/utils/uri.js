"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URI = require("urijs");
;
class UriUtils {
    static parse(input, defaults = {}) {
        if (!input || toString.call(input) !== toString.call('str')) {
            throw new Error(`Invalid database URL, expecting string but got ${toString.call(input)}`);
        }
        const uri = new URI(input);
        const results = {
            raw: uri.toString(),
            host: uri.host() || defaults.host,
            port: uri.port() || defaults.port,
            protocol: uri.protocol() || defaults.protocol,
            username: uri.username() || defaults.username,
            password: uri.password() || defaults.password,
            database: uri.path().replace('/', ''),
        };
        return results;
    }
}
exports.default = UriUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWxzL3VyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQVU1QixDQUFDO0FBRUYsTUFBcUIsUUFBUTtJQUVwQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWEsRUFBRSxXQUFxQyxFQUFFO1FBQ3hFLElBQUcsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNGO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNuQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJO1lBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUk7WUFDakMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxRQUFRLENBQUMsUUFBUTtZQUM3QyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLFFBQVEsQ0FBQyxRQUFRO1lBQzdDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxDQUFDLFFBQVE7WUFDN0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUN0QyxDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBcEJELDJCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFVSSSBmcm9tICd1cmlqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJpUGFyYW1zU2NoZW1hIHtcbiAgaG9zdDogc3RyaW5nLFxuICBwb3J0OiBzdHJpbmcsXG4gIGRhdGFiYXNlOiBzdHJpbmcsXG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIHByb3RvY29sOiBzdHJpbmcsXG4gIHJhdzogc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJpVXRpbHMge1xuXG4gIHB1YmxpYyBzdGF0aWMgcGFyc2UoaW5wdXQ6IHN0cmluZywgZGVmYXVsdHM6IFBhcnRpYWw8VXJpUGFyYW1zU2NoZW1hPiA9IHt9KTogVXJpUGFyYW1zU2NoZW1hIHtcbiAgICBpZighaW5wdXQgfHwgdG9TdHJpbmcuY2FsbChpbnB1dCkgIT09IHRvU3RyaW5nLmNhbGwoJ3N0cicpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0YWJhc2UgVVJMLCBleHBlY3Rpbmcgc3RyaW5nIGJ1dCBnb3QgJHt0b1N0cmluZy5jYWxsKGlucHV0KX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmkgPSBuZXcgVVJJKGlucHV0KTtcbiAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgcmF3OiB1cmkudG9TdHJpbmcoKSxcbiAgICAgIGhvc3Q6IHVyaS5ob3N0KCkgfHwgZGVmYXVsdHMuaG9zdCxcbiAgICAgIHBvcnQ6IHVyaS5wb3J0KCkgfHwgZGVmYXVsdHMucG9ydCxcbiAgICAgIHByb3RvY29sOiB1cmkucHJvdG9jb2woKSB8fCBkZWZhdWx0cy5wcm90b2NvbCxcbiAgICAgIHVzZXJuYW1lOiB1cmkudXNlcm5hbWUoKSB8fCBkZWZhdWx0cy51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB1cmkucGFzc3dvcmQoKSB8fCBkZWZhdWx0cy5wYXNzd29yZCxcbiAgICAgIGRhdGFiYXNlOiB1cmkucGF0aCgpLnJlcGxhY2UoJy8nLCAnJyksXG4gICAgfTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iXX0=