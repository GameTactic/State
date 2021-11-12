export interface ImageOptions {
    src: string;
    width: number;
    height: number;
    format: string;
}

export enum ImageFormat {
    PNG = 'png',
    JPG = 'jpg',
    JPEG = 'jpeg',
    GIF = 'gif',
}

export enum ImageFormatExtended {
    SVG = 'svg',
    WEBP = 'webp'
}
