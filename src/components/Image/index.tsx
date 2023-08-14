import { ImageProps } from './types';

export default function Image({ imageSrc, ...props }: ImageProps) {
    return (
        <picture>
            <source srcSet={imageSrc + '.webp'} type='image/webp' />
            <img src={imageSrc + '.png'} {...props} />
        </picture>
    );
}
