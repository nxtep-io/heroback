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
const base_1 = require("../../base");
// Configure AWS credentials
// http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
// 
// process.env.AWS_ACCESS_KEY_ID = s3AccessKeyId;
// process.env.AWS_SECRET_ACCESS_KEY = s3SecretAccessKey;
//
class AmazonS3Exporter extends base_1.HerobackExporter {
    constructor(options = {}) {
        super('amazon', options);
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
                Bucket: process.env.AMAZON_BUCKET_NAME || this.options.bucketName,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uLXMzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2V4cG9ydGVycy90aGlyZC1wYXJ0eS9hbWF6b24tczMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUE2QjtBQUU3QixxQ0FBc0Y7QUFPdEYsNEJBQTRCO0FBQzVCLDZHQUE2RztBQUM3RyxHQUFHO0FBQ0gsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCxFQUFFO0FBQ0YsTUFBcUIsZ0JBQWlCLFNBQVEsdUJBQWdCO0lBRzVELFlBQW1CLFVBQW1DLEVBQUU7UUFDdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBR3RELDJCQUEyQjtRQUMzQiwwQ0FBMEM7UUFDMUMsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVksTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBc0I7O1lBQzVELGlDQUFpQztZQUNqQyxvRkFBb0Y7WUFDcEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDdkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNqRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFFBQVE7Z0JBQ3JCLEdBQUcsRUFBRSxTQUFTO2dCQUNkLFdBQVcsRUFBRSxZQUFZO2dCQUN6QixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ2xCLENBQUMsQ0FBQztZQUVILE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckMsQ0FBQztLQUFBO0NBQ0Y7QUExQkQsbUNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUzMgfSBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IENoaWxkUHJvY2VzcyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgRXhwb3J0T3B0aW9ucywgSGVyb2JhY2tFeHBvcnRlciwgSGVyb2JhY2tFeHBvcnRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtYXpvblMzRXhwb3J0ZXJPcHRpb25zIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlck9wdGlvbnMge1xuICBidWNrZXROYW1lPzogc3RyaW5nO1xufVxuXG4vLyBDb25maWd1cmUgQVdTIGNyZWRlbnRpYWxzXG4vLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9zZGstZm9yLWphdmFzY3JpcHQvdjIvZGV2ZWxvcGVyLWd1aWRlL2xvYWRpbmctbm9kZS1jcmVkZW50aWFscy1lbnZpcm9ubWVudC5odG1sXG4vLyBcbi8vIHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEID0gczNBY2Nlc3NLZXlJZDtcbi8vIHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSA9IHMzU2VjcmV0QWNjZXNzS2V5O1xuLy9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtYXpvblMzRXhwb3J0ZXIgZXh0ZW5kcyBIZXJvYmFja0V4cG9ydGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHMzOiBBV1MuUzM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEFtYXpvblMzRXhwb3J0ZXJPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcignYW1hem9uJywgb3B0aW9ucyk7XG5cbiAgICAvLyBEZWZpbmUgb3VyIFMzIGNvbm5lY3Rpb25cbiAgICAvLyBodHRwczovL2F3cy5hbWF6b24uY29tL3Nkay1mb3Itbm9kZS1qcy9cbiAgICAvLyBodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NKYXZhU2NyaXB0U0RLL2xhdGVzdC9BV1MvUzMuaHRtbFxuICAgIHRoaXMuczMgPSBuZXcgUzMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBleHBvcnQoZHVtcDogQ2hpbGRQcm9jZXNzLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxJbnB1dFN0cmVhbT4ge1xuICAgIC8vIFVwbG9hZCBvdXIgZ3ppcCBzdHJlYW0gaW50byBTM1xuICAgIC8vIGh0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0phdmFTY3JpcHRTREsvbGF0ZXN0L0FXUy9TMy5odG1sI3B1dE9iamVjdC1wcm9wZXJ0eVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zMy5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBwcm9jZXNzLmVudi5BTUFaT05fQlVDS0VUX05BTUUgfHwgdGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUsXG4gICAgICBLZXk6IG9wdGlvbnMuZmlsZU5hbWUsXG4gICAgICBBQ0w6ICdwcml2YXRlJyxcbiAgICAgIENvbnRlbnRUeXBlOiAndGV4dC9wbGFpbicsXG4gICAgICBDb250ZW50RW5jb2Rpbmc6ICdnemlwJyxcbiAgICAgIEJvZHk6IGR1bXAuc3Rkb3V0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmNyZWF0ZVJlYWRTdHJlYW0oKTtcbiAgfVxufSJdfQ==