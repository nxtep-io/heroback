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
const exporters_1 = require("../exporters");
// Configure AWS credentials
// http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
// 
// process.env.AWS_ACCESS_KEY_ID = s3AccessKeyId;
// process.env.AWS_SECRET_ACCESS_KEY = s3SecretAccessKey;
//
class AmazonS3Exporter extends exporters_1.HerobackExporter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uLXMzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3RoaXJkLXBhcnR5L2FtYXpvbi1zMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQTZCO0FBRTdCLDRDQUErRDtBQU0vRCw0QkFBNEI7QUFDNUIsNkdBQTZHO0FBQzdHLEdBQUc7QUFDSCxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELEVBQUU7QUFDRixNQUFxQixnQkFBaUIsU0FBUSw0QkFBZ0I7SUFHNUQsWUFBbUIsT0FBZ0M7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUdqRCwyQkFBMkI7UUFDM0IsMENBQTBDO1FBQzFDLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVZLE1BQU0sQ0FBQyxJQUFrQixFQUFFLE9BQXNCOztZQUM1RCxpQ0FBaUM7WUFDakMsb0ZBQW9GO1lBQ3BGLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQy9CLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDckIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbEIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQTFCRCxtQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTMyB9IGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBIZXJvYmFja0V4cG9ydGVyLCBFeHBvcnRPcHRpb25zIH0gZnJvbSBcIi4uL2V4cG9ydGVyc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtYXpvblMzRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgRXhwb3J0T3B0aW9ucyB7XG4gIGJ1Y2tldE5hbWU6IHN0cmluZztcbn1cblxuLy8gQ29uZmlndXJlIEFXUyBjcmVkZW50aWFsc1xuLy8gaHR0cDovL2RvY3MuYXdzLmFtYXpvbi5jb20vc2RrLWZvci1qYXZhc2NyaXB0L3YyL2RldmVsb3Blci1ndWlkZS9sb2FkaW5nLW5vZGUtY3JlZGVudGlhbHMtZW52aXJvbm1lbnQuaHRtbFxuLy8gXG4vLyBwcm9jZXNzLmVudi5BV1NfQUNDRVNTX0tFWV9JRCA9IHMzQWNjZXNzS2V5SWQ7XG4vLyBwcm9jZXNzLmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgPSBzM1NlY3JldEFjY2Vzc0tleTtcbi8vXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWF6b25TM0V4cG9ydGVyIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBzMzogQVdTLlMzO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBBbWF6b25TM0V4cG9ydGVyT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBEZWZpbmUgb3VyIFMzIGNvbm5lY3Rpb25cbiAgICAvLyBodHRwczovL2F3cy5hbWF6b24uY29tL3Nkay1mb3Itbm9kZS1qcy9cbiAgICAvLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NKYXZhU2NyaXB0U0RLL2xhdGVzdC9BV1MvUzMuaHRtbFxuICAgIHRoaXMuczMgPSBuZXcgUzMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHBvcnQoZHVtcDogQ2hpbGRQcm9jZXNzLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gVXBsb2FkIG91ciBnemlwIHN0cmVhbSBpbnRvIFMzXG4gICAgLy8gaHR0cDovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTSmF2YVNjcmlwdFNESy9sYXRlc3QvQVdTL1MzLmh0bWwjcHV0T2JqZWN0LXByb3BlcnR5XG4gICAgYXdhaXQgdGhpcy5zMy5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiB0aGlzLm9wdGlvbnMuYnVja2V0TmFtZSxcbiAgICAgIEtleTogb3B0aW9ucy5maWxlTmFtZSxcbiAgICAgIEFDTDogJ3ByaXZhdGUnLFxuICAgICAgQ29udGVudFR5cGU6ICd0ZXh0L3BsYWluJyxcbiAgICAgIENvbnRlbnRFbmNvZGluZzogJ2d6aXAnLFxuICAgICAgQm9keTogZHVtcC5zdGRvdXQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdfQ==