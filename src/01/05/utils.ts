export function getImageUrl(imageId: string): string {
    return (
        'https://i.imgur.com/' +
        imageId +
        's' +
        '.jpg'
    );
}

export function getImageUrl02({imageId, imageType}: {imageId: string; imageType: 's' | 'b'}): string {

    return (
        'https://i.imgur.com/' +
        imageId +
        imageType +
        '.jpg'
    );
}