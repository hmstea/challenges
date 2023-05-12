export type ImageType = {
    imageId: string;
    imageSize?: string;
    imageDomain?: string;
    imageExtension?: string;

}

export function getImageUrl({imageId, imageSize='s', imageDomain='https://i.imgur.com/', imageExtension='.jpg'}: ImageType): string {
    return (
        imageDomain +
        imageId +
        imageSize +
        imageExtension
    );
}