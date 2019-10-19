let support = undefined;

/**
 * Check browser webp support
 * @returns {boolean}
 */
export const isWebpSupported = () => {

    if (support !== undefined)
        return support;

    const elem = typeof document === 'object' ? document.createElement('canvas') : {};

    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}
