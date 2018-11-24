export default class FileUtils {
    static delete(options: {
        fileName: string;
        baseDir?: string;
    }): Promise<void>;
}
