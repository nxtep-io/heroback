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
            const response = yield this.s3.putObject({
                Bucket: this.options.bucketName,
                Key: options.fileName,
                ACL: 'private',
                ContentType: 'text/plain',
                ContentEncoding: 'gzip',
                Body: dump.stdout,
            });
            return response.createReadStream();
        });
    }
}
exports.default = AmazonS3Exporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uLXMzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3RoaXJkLXBhcnR5L2FtYXpvbi1zMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQTZCO0FBRTdCLGtDQUEwRDtBQU8xRCw0QkFBNEI7QUFDNUIsNkdBQTZHO0FBQzdHLEdBQUc7QUFDSCxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELEVBQUU7QUFDRixNQUFxQixnQkFBaUIsU0FBUSx1QkFBZ0I7SUFHNUQsWUFBbUIsT0FBZ0M7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUdqRCwyQkFBMkI7UUFDM0IsMENBQTBDO1FBQzFDLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVZLE1BQU0sQ0FBQyxJQUFrQixFQUFFLE9BQXNCOztZQUM1RCxpQ0FBaUM7WUFDakMsb0ZBQW9GO1lBQ3BGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQy9CLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDckIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbEIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7Q0FDRjtBQTFCRCxtQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTMyB9IGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBFeHBvcnRPcHRpb25zLCBIZXJvYmFja0V4cG9ydGVyIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbWF6b25TM0V4cG9ydGVyT3B0aW9ucyBleHRlbmRzIEV4cG9ydE9wdGlvbnMge1xuICBidWNrZXROYW1lOiBzdHJpbmc7XG59XG5cbi8vIENvbmZpZ3VyZSBBV1MgY3JlZGVudGlhbHNcbi8vIGh0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3Nkay1mb3ItamF2YXNjcmlwdC92Mi9kZXZlbG9wZXItZ3VpZGUvbG9hZGluZy1ub2RlLWNyZWRlbnRpYWxzLWVudmlyb25tZW50Lmh0bWxcbi8vIFxuLy8gcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQgPSBzM0FjY2Vzc0tleUlkO1xuLy8gcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZID0gczNTZWNyZXRBY2Nlc3NLZXk7XG4vL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW1hem9uUzNFeHBvcnRlciBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgczM6IEFXUy5TMztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQW1hem9uUzNFeHBvcnRlck9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gRGVmaW5lIG91ciBTMyBjb25uZWN0aW9uXG4gICAgLy8gaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9zZGstZm9yLW5vZGUtanMvXG4gICAgLy8gaHR0cDovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTSmF2YVNjcmlwdFNESy9sYXRlc3QvQVdTL1MzLmh0bWxcbiAgICB0aGlzLnMzID0gbmV3IFMzKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhwb3J0KGR1bXA6IENoaWxkUHJvY2Vzcywgb3B0aW9uczogRXhwb3J0T3B0aW9ucyk6IFByb21pc2U8SW5wdXRTdHJlYW0+IHtcbiAgICAvLyBVcGxvYWQgb3VyIGd6aXAgc3RyZWFtIGludG8gUzNcbiAgICAvLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NKYXZhU2NyaXB0U0RLL2xhdGVzdC9BV1MvUzMuaHRtbCNwdXRPYmplY3QtcHJvcGVydHlcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuczMucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogdGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUsXG4gICAgICBLZXk6IG9wdGlvbnMuZmlsZU5hbWUsXG4gICAgICBBQ0w6ICdwcml2YXRlJyxcbiAgICAgIENvbnRlbnRUeXBlOiAndGV4dC9wbGFpbicsXG4gICAgICBDb250ZW50RW5jb2Rpbmc6ICdnemlwJyxcbiAgICAgIEJvZHk6IGR1bXAuc3Rkb3V0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmNyZWF0ZVJlYWRTdHJlYW0oKTtcbiAgfVxufSJdfQ==