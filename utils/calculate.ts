

// slide to the top of the screen
export const calculateTransform = (scrollPos : number, start : number, end : number, idle : number) : number => {
    const calculated = scrollPos < (start + idle) ? 0 : scrollPos > end ? 100 : ((scrollPos - (start + idle)) / (end - (start + idle))) * 100;
    return calculated;
}

// slide from bottom to the top of the screen
export const calculateTransform2x = (scrollPos : number, start : number, end : number, pageSize : number) : number => {
    const startPoint = 100 / (pageSize - 2)
    const range = end - start;
    const percentage = ((scrollPos - start) / range) * (100 + startPoint) - startPoint;
    const calculated = Math.min(100, Math.max((-1 * startPoint), percentage));
    return calculated;
}

// calculate opacity from not visible to visible
export const calculateOpacity = (scrollPos : number, start : number, end : number, idle : number) : number => {
    const calculated = scrollPos < (start + idle) ? 0 : scrollPos > end ? 100 : ((scrollPos - (start + idle)) / (end - (start + idle))) * 100;
    return calculated / 100;
}

// calculate opacity from visible to not visible
export const reverseCalculateOpacity = (scrollPos : number, start : number, end : number, idle : number) : number => {
    const calculated = scrollPos < (start + idle) ? 100 : scrollPos > end ? 0 : 100 - ((scrollPos - (start + idle)) / (end - (start + idle))) * 100;
    return calculated / 100;
}