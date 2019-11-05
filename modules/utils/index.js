let support;

/**
 * Check browser webp support
 * @returns {boolean}
 */
export const isWebpSupported = () => {

    if (typeof support !== "undefined")
        return support;

    const elem = typeof document === 'object' ? document.createElement('canvas') : {};
    
    support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    
    return support;
}
