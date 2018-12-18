"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_framework_common_1 = require("ts-framework-common");
const exporters_1 = require("../exporters");
const Utils = require("../utils");
exports.providerFactory = (options, providers) => {
    const uri = Utils.Uri.parse(options.uri);
    if (uri.protocol === 'postgresql') {
        return new providers.PostgresProvider({ uri });
    }
    if (uri.protocol === 'mysql') {
        return new providers.MySQLProvider({ uri });
    }
    if (uri.protocol === 'mongo' || uri.protocol === 'mongodb') {
        return new providers.MongoProvider({ uri });
    }
    throw new ts_framework_common_1.BaseError(`Unknown database provider: "${uri.protocol || undefined}"`, { uri });
};
exports.exporterFactory = (name) => {
    if (name === 'file') {
        return new exporters_1.FileExporter();
    }
    if (name === 'google') {
        return new exporters_1.GoogleGCSExporter();
    }
    if (name === 'amazon') {
        return new exporters_1.AmazonS3Exporter();
    }
    throw new ts_framework_common_1.BaseError(`Unknown exporter: "${name}"`, { exporter: name });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iYXNlL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBZ0Q7QUFFaEQsNENBQWlGO0FBQ2pGLGtDQUFrQztBQUdyQixRQUFBLGVBQWUsR0FBRyxDQUFDLE9BQXdCLEVBQUUsU0FBYyxFQUFvQixFQUFFO0lBQzVGLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUM1QixPQUFPLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDN0M7SUFFRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFELE9BQU8sSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUM3QztJQUVELE1BQU0sSUFBSSwrQkFBUyxDQUFDLCtCQUErQixHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1RixDQUFDLENBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRyxDQUFDLElBQVksRUFBb0IsRUFBRTtJQUNoRSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkIsT0FBTyxJQUFJLHdCQUFZLEVBQUUsQ0FBQztLQUMzQjtJQUNELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNyQixPQUFPLElBQUksNkJBQWlCLEVBQUUsQ0FBQztLQUNoQztJQUNELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNyQixPQUFPLElBQUksNEJBQWdCLEVBQUUsQ0FBQztLQUMvQjtJQUNELE1BQU0sSUFBSSwrQkFBUyxDQUFDLHNCQUFzQixJQUFJLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gXCJ0cy1mcmFtZXdvcmstY29tbW9uXCI7XG5pbXBvcnQgeyBIZXJvYmFja1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IEFtYXpvblMzRXhwb3J0ZXIsIEZpbGVFeHBvcnRlciwgR29vZ2xlR0NTRXhwb3J0ZXIgfSBmcm9tIFwiLi4vZXhwb3J0ZXJzXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBIZXJvYmFja0V4cG9ydGVyIGZyb20gXCIuL2V4cG9ydGVyXCI7XG5cbmV4cG9ydCBjb25zdCBwcm92aWRlckZhY3RvcnkgPSAob3B0aW9uczogeyB1cmk6IHN0cmluZyB9LCBwcm92aWRlcnM6IGFueSk6IEhlcm9iYWNrUHJvdmlkZXIgPT4ge1xuICBjb25zdCB1cmkgPSBVdGlscy5VcmkucGFyc2Uob3B0aW9ucy51cmkpO1xuXG4gIGlmICh1cmkucHJvdG9jb2wgPT09ICdwb3N0Z3Jlc3FsJykge1xuICAgIHJldHVybiBuZXcgcHJvdmlkZXJzLlBvc3RncmVzUHJvdmlkZXIoeyB1cmkgfSk7XG4gIH1cblxuICBpZiAodXJpLnByb3RvY29sID09PSAnbXlzcWwnKSB7XG4gICAgcmV0dXJuIG5ldyBwcm92aWRlcnMuTXlTUUxQcm92aWRlcih7IHVyaSB9KTtcbiAgfVxuXG4gIGlmICh1cmkucHJvdG9jb2wgPT09ICdtb25nbycgfHwgdXJpLnByb3RvY29sID09PSAnbW9uZ29kYicpIHtcbiAgICByZXR1cm4gbmV3IHByb3ZpZGVycy5Nb25nb1Byb3ZpZGVyKHsgdXJpIH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IEJhc2VFcnJvcihgVW5rbm93biBkYXRhYmFzZSBwcm92aWRlcjogXCIke3VyaS5wcm90b2NvbCB8fCB1bmRlZmluZWR9XCJgLCB7IHVyaSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGV4cG9ydGVyRmFjdG9yeSA9IChuYW1lOiBzdHJpbmcpOiBIZXJvYmFja0V4cG9ydGVyID0+IHtcbiAgaWYgKG5hbWUgPT09ICdmaWxlJykge1xuICAgIHJldHVybiBuZXcgRmlsZUV4cG9ydGVyKCk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdnb29nbGUnKSB7XG4gICAgcmV0dXJuIG5ldyBHb29nbGVHQ1NFeHBvcnRlcigpO1xuICB9XG4gIGlmIChuYW1lID09PSAnYW1hem9uJykge1xuICAgIHJldHVybiBuZXcgQW1hem9uUzNFeHBvcnRlcigpO1xuICB9XG4gIHRocm93IG5ldyBCYXNlRXJyb3IoYFVua25vd24gZXhwb3J0ZXI6IFwiJHtuYW1lfVwiYCwgeyBleHBvcnRlcjogbmFtZSB9KTtcbn0iXX0=