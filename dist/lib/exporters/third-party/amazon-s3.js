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
                Body: dump,
            });
            return response.createReadStream();
        });
    }
}
exports.default = AmazonS3Exporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uLXMzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2V4cG9ydGVycy90aGlyZC1wYXJ0eS9hbWF6b24tczMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUE2QjtBQUU3QixxQ0FBc0Y7QUFPdEYsNEJBQTRCO0FBQzVCLDZHQUE2RztBQUM3RyxHQUFHO0FBQ0gsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RCxFQUFFO0FBQ0YsTUFBcUIsZ0JBQWlCLFNBQVEsdUJBQWdCO0lBRzVELFlBQW1CLFVBQW1DLEVBQUU7UUFDdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBR3RELDJCQUEyQjtRQUMzQiwwQ0FBMEM7UUFDMUMsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVksTUFBTSxDQUFDLElBQWlCLEVBQUUsT0FBc0I7O1lBQzNELGlDQUFpQztZQUNqQyxvRkFBb0Y7WUFDcEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDdkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNqRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFFBQVE7Z0JBQ3JCLEdBQUcsRUFBRSxTQUFTO2dCQUNkLFdBQVcsRUFBRSxZQUFZO2dCQUN6QixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7WUFFSCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtDQUNGO0FBMUJELG1DQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFMzIH0gZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgeyBDaGlsZFByb2Nlc3MgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IEV4cG9ydE9wdGlvbnMsIEhlcm9iYWNrRXhwb3J0ZXIsIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbWF6b25TM0V4cG9ydGVyT3B0aW9ucyBleHRlbmRzIEhlcm9iYWNrRXhwb3J0ZXJPcHRpb25zIHtcbiAgYnVja2V0TmFtZT86IHN0cmluZztcbn1cblxuLy8gQ29uZmlndXJlIEFXUyBjcmVkZW50aWFsc1xuLy8gaHR0cDovL2RvY3MuYXdzLmFtYXpvbi5jb20vc2RrLWZvci1qYXZhc2NyaXB0L3YyL2RldmVsb3Blci1ndWlkZS9sb2FkaW5nLW5vZGUtY3JlZGVudGlhbHMtZW52aXJvbm1lbnQuaHRtbFxuLy8gXG4vLyBwcm9jZXNzLmVudi5BV1NfQUNDRVNTX0tFWV9JRCA9IHMzQWNjZXNzS2V5SWQ7XG4vLyBwcm9jZXNzLmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgPSBzM1NlY3JldEFjY2Vzc0tleTtcbi8vXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWF6b25TM0V4cG9ydGVyIGV4dGVuZHMgSGVyb2JhY2tFeHBvcnRlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBzMzogQVdTLlMzO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBBbWF6b25TM0V4cG9ydGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoJ2FtYXpvbicsIG9wdGlvbnMpO1xuXG4gICAgLy8gRGVmaW5lIG91ciBTMyBjb25uZWN0aW9uXG4gICAgLy8gaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9zZGstZm9yLW5vZGUtanMvXG4gICAgLy8gaHR0cDovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTSmF2YVNjcmlwdFNESy9sYXRlc3QvQVdTL1MzLmh0bWxcbiAgICB0aGlzLnMzID0gbmV3IFMzKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXhwb3J0KGR1bXA6IElucHV0U3RyZWFtLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxJbnB1dFN0cmVhbT4ge1xuICAgIC8vIFVwbG9hZCBvdXIgZ3ppcCBzdHJlYW0gaW50byBTM1xuICAgIC8vIGh0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0phdmFTY3JpcHRTREsvbGF0ZXN0L0FXUy9TMy5odG1sI3B1dE9iamVjdC1wcm9wZXJ0eVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zMy5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBwcm9jZXNzLmVudi5BTUFaT05fQlVDS0VUX05BTUUgfHwgdGhpcy5vcHRpb25zLmJ1Y2tldE5hbWUsXG4gICAgICBLZXk6IG9wdGlvbnMuZmlsZU5hbWUsXG4gICAgICBBQ0w6ICdwcml2YXRlJyxcbiAgICAgIENvbnRlbnRUeXBlOiAndGV4dC9wbGFpbicsXG4gICAgICBDb250ZW50RW5jb2Rpbmc6ICdnemlwJyxcbiAgICAgIEJvZHk6IGR1bXAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuY3JlYXRlUmVhZFN0cmVhbSgpO1xuICB9XG59Il19