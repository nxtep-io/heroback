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
const aws_sdk_1 = require("aws-sdk");
const base_1 = require("../base");
// Configure AWS credentials
// http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
// 
// process.env.AWS_ACCESS_KEY_ID = s3AccessKeyId;
// process.env.AWS_SECRET_ACCESS_KEY = s3SecretAccessKey;
//
class AmazonS3Exporter extends base_1.HerobackExporter {
    constructor(options) {
        super();
        this.options = options;
        // Define our S3 connection
        // https://aws.amazon.com/sdk-for-node-js/
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
        this.s3 = new aws_sdk_1.S3();
    }
    export(dump, options) {
        return __awaiter(this, void 0, void 0, function* () {
            // Upload our gzip stream into S3
            // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
            yield this.s3.putObject({
                Bucket: this.options.bucketName,
                Key: options.fileName,
                ACL: 'private',
                ContentType: 'text/plain',
                ContentEncoding: 'gzip',
                Body: dump.stdout,
            });
            return true;
        });
    }
}
exports.default = AmazonS3Exporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uLXMzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3RoaXJkLXBhcnR5L2FtYXpvbi1zMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQTZCO0FBRTdCLGtDQUEwRDtBQU0xRCw0QkFBNEI7QUFDNUIsNkdBQTZHO0FBQzdHLEdBQUc7QUFDSCxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELEVBQUU7QUFDRixNQUFxQixnQkFBaUIsU0FBUSx1QkFBZ0I7SUFHNUQsWUFBbUIsT0FBZ0M7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUdqRCwyQkFBMkI7UUFDM0IsMENBQTBDO1FBQzFDLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVZLE1BQU0sQ0FBQyxJQUFrQixFQUFFLE9BQXNCOztZQUM1RCxpQ0FBaUM7WUFDakMsb0ZBQW9GO1lBQ3BGLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQy9CLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDckIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbEIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQTFCRCxtQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTMyB9IGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBFeHBvcnRPcHRpb25zLCBIZXJvYmFja0V4cG9ydGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1hem9uUzNFeHBvcnRlck9wdGlvbnMgZXh0ZW5kcyBFeHBvcnRPcHRpb25zIHtcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xufVxuXG4vLyBDb25maWd1cmUgQVdTIGNyZWRlbnRpYWxzXG4vLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9zZGstZm9yLWphdmFzY3JpcHQvdjIvZGV2ZWxvcGVyLWd1aWRlL2xvYWRpbmctbm9kZS1jcmVkZW50aWFscy1lbnZpcm9ubWVudC5odG1sXG4vLyBcbi8vIHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEID0gczNBY2Nlc3NLZXlJZDtcbi8vIHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSA9IHMzU2VjcmV0QWNjZXNzS2V5O1xuLy9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtYXpvblMzRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHMzOiBBV1MuUzM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEFtYXpvblMzRXhwb3J0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIERlZmluZSBvdXIgUzMgY29ubmVjdGlvblxuICAgIC8vIGh0dHBzOi8vYXdzLmFtYXpvbi5jb20vc2RrLWZvci1ub2RlLWpzL1xuICAgIC8vIGh0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0phdmFTY3JpcHRTREsvbGF0ZXN0L0FXUy9TMy5odG1sXG4gICAgdGhpcy5zMyA9IG5ldyBTMygpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGV4cG9ydChkdW1wOiBDaGlsZFByb2Nlc3MsIG9wdGlvbnM6IEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyBVcGxvYWQgb3VyIGd6aXAgc3RyZWFtIGludG8gUzNcbiAgICAvLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NKYXZhU2NyaXB0U0RLL2xhdGVzdC9BV1MvUzMuaHRtbCNwdXRPYmplY3QtcHJvcGVydHlcbiAgICBhd2FpdCB0aGlzLnMzLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IHRoaXMub3B0aW9ucy5idWNrZXROYW1lLFxuICAgICAgS2V5OiBvcHRpb25zLmZpbGVOYW1lLFxuICAgICAgQUNMOiAncHJpdmF0ZScsXG4gICAgICBDb250ZW50VHlwZTogJ3RleHQvcGxhaW4nLFxuICAgICAgQ29udGVudEVuY29kaW5nOiAnZ3ppcCcsXG4gICAgICBCb2R5OiBkdW1wLnN0ZG91dCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19