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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWxzL3VyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQVM1QixDQUFDO0FBRUYsTUFBcUIsUUFBUTtJQUVwQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWEsRUFBRSxXQUFxQyxFQUFFO1FBQ3hFLElBQUcsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNGO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJO1lBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUk7WUFDakMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxRQUFRLENBQUMsUUFBUTtZQUM3QyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLFFBQVEsQ0FBQyxRQUFRO1lBQzdDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxDQUFDLFFBQVE7WUFDN0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUN0QyxDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBbkJELDJCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFVSSSBmcm9tICd1cmlqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJpUGFyYW1zU2NoZW1hIHtcbiAgaG9zdDogc3RyaW5nLFxuICBwb3J0OiBzdHJpbmcsXG4gIGRhdGFiYXNlOiBzdHJpbmcsXG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIHByb3RvY29sOiBzdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmlVdGlscyB7XG5cbiAgcHVibGljIHN0YXRpYyBwYXJzZShpbnB1dDogc3RyaW5nLCBkZWZhdWx0czogUGFydGlhbDxVcmlQYXJhbXNTY2hlbWE+ID0ge30pOiBVcmlQYXJhbXNTY2hlbWEge1xuICAgIGlmKCFpbnB1dCB8fCB0b1N0cmluZy5jYWxsKGlucHV0KSAhPT0gdG9TdHJpbmcuY2FsbCgnc3RyJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRhYmFzZSBVUkwsIGV4cGVjdGluZyBzdHJpbmcgYnV0IGdvdCAke3RvU3RyaW5nLmNhbGwoaW5wdXQpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IG5ldyBVUkkoaW5wdXQpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICBob3N0OiB1cmkuaG9zdCgpIHx8IGRlZmF1bHRzLmhvc3QsXG4gICAgICBwb3J0OiB1cmkucG9ydCgpIHx8IGRlZmF1bHRzLnBvcnQsXG4gICAgICBwcm90b2NvbDogdXJpLnByb3RvY29sKCkgfHwgZGVmYXVsdHMucHJvdG9jb2wsXG4gICAgICB1c2VybmFtZTogdXJpLnVzZXJuYW1lKCkgfHwgZGVmYXVsdHMudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdXJpLnBhc3N3b3JkKCkgfHwgZGVmYXVsdHMucGFzc3dvcmQsXG4gICAgICBkYXRhYmFzZTogdXJpLnBhdGgoKS5yZXBsYWNlKCcvJywgJycpLFxuICAgIH07XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIl19