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
    if (uri.protocol === 'mongo') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iYXNlL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBZ0Q7QUFFaEQsNENBQWlGO0FBQ2pGLGtDQUFrQztBQUdyQixRQUFBLGVBQWUsR0FBRyxDQUFDLE9BQXdCLEVBQUUsU0FBYyxFQUFvQixFQUFFO0lBQzVGLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUM1QixPQUFPLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDN0M7SUFFRCxNQUFNLElBQUksK0JBQVMsQ0FBQywrQkFBK0IsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDNUYsQ0FBQyxDQUFBO0FBRVksUUFBQSxlQUFlLEdBQUcsQ0FBQyxJQUFZLEVBQW9CLEVBQUU7SUFDaEUsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25CLE9BQU8sSUFBSSx3QkFBWSxFQUFFLENBQUM7S0FDM0I7SUFDRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckIsT0FBTyxJQUFJLDZCQUFpQixFQUFFLENBQUM7S0FDaEM7SUFDRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckIsT0FBTyxJQUFJLDRCQUFnQixFQUFFLENBQUM7S0FDL0I7SUFDRCxNQUFNLElBQUksK0JBQVMsQ0FBQyxzQkFBc0IsSUFBSSxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tIFwidHMtZnJhbWV3b3JrLWNvbW1vblwiO1xuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciB9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgeyBBbWF6b25TM0V4cG9ydGVyLCBGaWxlRXhwb3J0ZXIsIEdvb2dsZUdDU0V4cG9ydGVyIH0gZnJvbSBcIi4uL2V4cG9ydGVyc1wiO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgSGVyb2JhY2tFeHBvcnRlciBmcm9tIFwiLi9leHBvcnRlclwiO1xuXG5leHBvcnQgY29uc3QgcHJvdmlkZXJGYWN0b3J5ID0gKG9wdGlvbnM6IHsgdXJpOiBzdHJpbmcgfSwgcHJvdmlkZXJzOiBhbnkpOiBIZXJvYmFja1Byb3ZpZGVyID0+IHtcbiAgY29uc3QgdXJpID0gVXRpbHMuVXJpLnBhcnNlKG9wdGlvbnMudXJpKTtcblxuICBpZiAodXJpLnByb3RvY29sID09PSAncG9zdGdyZXNxbCcpIHtcbiAgICByZXR1cm4gbmV3IHByb3ZpZGVycy5Qb3N0Z3Jlc1Byb3ZpZGVyKHsgdXJpIH0pO1xuICB9XG5cbiAgaWYgKHVyaS5wcm90b2NvbCA9PT0gJ21vbmdvJykge1xuICAgIHJldHVybiBuZXcgcHJvdmlkZXJzLk1vbmdvUHJvdmlkZXIoeyB1cmkgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgQmFzZUVycm9yKGBVbmtub3duIGRhdGFiYXNlIHByb3ZpZGVyOiBcIiR7dXJpLnByb3RvY29sIHx8IHVuZGVmaW5lZH1cImAsIHsgdXJpIH0pO1xufVxuXG5leHBvcnQgY29uc3QgZXhwb3J0ZXJGYWN0b3J5ID0gKG5hbWU6IHN0cmluZyk6IEhlcm9iYWNrRXhwb3J0ZXIgPT4ge1xuICBpZiAobmFtZSA9PT0gJ2ZpbGUnKSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlRXhwb3J0ZXIoKTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ2dvb2dsZScpIHtcbiAgICByZXR1cm4gbmV3IEdvb2dsZUdDU0V4cG9ydGVyKCk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdhbWF6b24nKSB7XG4gICAgcmV0dXJuIG5ldyBBbWF6b25TM0V4cG9ydGVyKCk7XG4gIH1cbiAgdGhyb3cgbmV3IEJhc2VFcnJvcihgVW5rbm93biBleHBvcnRlcjogXCIke25hbWV9XCJgLCB7IGV4cG9ydGVyOiBuYW1lIH0pO1xufSJdfQ==