import { ImageOptions } from './types';

export default class Image {
    /**
     * The source of the image
     */
    public src: string;

    /**
     * Image width
     */
    public width: number;

    /**
     * Image height
     */
    public height: number;

    /**
     * Image file format
     */
    public format: string;

    public constructor(options: ImageOptions) {
        this.src = options.src;
        this.width = options.width;
        this.height = options.height;
        this.format = options.format;
    }
}
