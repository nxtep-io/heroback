"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URI = require("urijs");
;
exports.UriDefaults = ({
    host: 'localhost',
    port: '5432',
});
class UriUtils {
    static parse(input, defaults = {}) {
        if (!input || toString.call(input) !== toString.call('str')) {
            throw new Error(`Invalid database URL, expecting string but got ${toString.call(input)}`);
        }
        const uri = new URI(input);
        const defs = Object.assign({}, exports.UriDefaults, defaults);
        const results = {
            host: uri.host() || defs.host,
            port: uri.port() || defs.port,
            database: uri.path().replace('/', ''),
            username: uri.username(),
            password: uri.password(),
        };
        if (!results.host || !results.host.length) {
            throw new Error('Invalid database URL, host is not defined');
        }
        if (!results.port || !results.port.length) {
            throw new Error('Invalid database URL, port is not defined');
        }
        if (!results.database || !results.database.length) {
            throw new Error('Invalid database URL, database name is not defined');
        }
        return results;
    }
}
exports.default = UriUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWxzL3VyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQVE1QixDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQTZCLENBQUM7SUFDcEQsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDLENBQUM7QUFFSCxNQUFxQixRQUFRO0lBRXBCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBYSxFQUFFLFdBQXFDLEVBQUU7UUFDeEUsSUFBRyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixNQUFNLElBQUkscUJBQVEsbUJBQVcsRUFBSyxRQUFRLENBQUUsQ0FBQztRQUU3QyxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUk7WUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUM3QixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1NBQ3pCLENBQUM7UUFFRixJQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDdkU7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7QUFoQ0QsMkJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVVJJIGZyb20gJ3VyaWpzJztcblxuZXhwb3J0IGludGVyZmFjZSBVcmlQYXJhbXNTY2hlbWEge1xuICBob3N0OiBzdHJpbmcsXG4gIHBvcnQ6IHN0cmluZyxcbiAgZGF0YWJhc2U6IHN0cmluZyxcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZyxcbn07XG5cbmV4cG9ydCBjb25zdCBVcmlEZWZhdWx0czogUGFydGlhbDxVcmlQYXJhbXNTY2hlbWE+ID0gKHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIHBvcnQ6ICc1NDMyJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmlVdGlscyB7XG5cbiAgcHVibGljIHN0YXRpYyBwYXJzZShpbnB1dDogc3RyaW5nLCBkZWZhdWx0czogUGFydGlhbDxVcmlQYXJhbXNTY2hlbWE+ID0ge30pOiBVcmlQYXJhbXNTY2hlbWEge1xuICAgIGlmKCFpbnB1dCB8fCB0b1N0cmluZy5jYWxsKGlucHV0KSAhPT0gdG9TdHJpbmcuY2FsbCgnc3RyJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRhYmFzZSBVUkwsIGV4cGVjdGluZyBzdHJpbmcgYnV0IGdvdCAke3RvU3RyaW5nLmNhbGwoaW5wdXQpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IG5ldyBVUkkoaW5wdXQpO1xuICAgIGNvbnN0IGRlZnMgPSB7IC4uLlVyaURlZmF1bHRzLCAuLi5kZWZhdWx0cyB9O1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgIGhvc3Q6IHVyaS5ob3N0KCkgfHwgZGVmcy5ob3N0LFxuICAgICAgcG9ydDogdXJpLnBvcnQoKSB8fCBkZWZzLnBvcnQsXG4gICAgICBkYXRhYmFzZTogdXJpLnBhdGgoKS5yZXBsYWNlKCcvJywgJycpLFxuICAgICAgdXNlcm5hbWU6IHVyaS51c2VybmFtZSgpLFxuICAgICAgcGFzc3dvcmQ6IHVyaS5wYXNzd29yZCgpLFxuICAgIH07XG5cbiAgICBpZighcmVzdWx0cy5ob3N0IHx8ICFyZXN1bHRzLmhvc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGF0YWJhc2UgVVJMLCBob3N0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgaWYoIXJlc3VsdHMucG9ydCB8fCAhcmVzdWx0cy5wb3J0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGFiYXNlIFVSTCwgcG9ydCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGlmKCFyZXN1bHRzLmRhdGFiYXNlIHx8ICFyZXN1bHRzLmRhdGFiYXNlLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGFiYXNlIFVSTCwgZGF0YWJhc2UgbmFtZSBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iXX0=