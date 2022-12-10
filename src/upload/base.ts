export abstract class UploadHelper {
    constructor(){}

    abstract uploadFile(): Promise<boolean>
}