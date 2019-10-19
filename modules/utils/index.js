let support = undefined;

/**
 * Check browser webp support
 * @returns {boolean}
 */
export const isWebpSupported = () => {

    if (support !== undefined)
        return support;

    const elem = typeof document === 'object' ? document.createElement('canvas') : {};

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        return support;
    } else {
        // very old browser like IE 8, canvas not supported
        support = false;
        return support;
    }
}
