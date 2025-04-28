// lap generation and lap time format
export const lap = (baseTime = 90000, variance = 3000) => {
    return baseTime +(Math.random() * variance * 2 - variance);
}

export const formatLapTime = (timeMs) => {
    if(!timeMs) return '';
    // use Math.abs to ensure input time is positive (to avoid format like 0,-014)
    const absTime = Math.abs(timeMs);
    const minutes = Math.floor(absTime / 60000);
    const seconds = Math.floor((absTime % 60000) / 1000);
    const milliseconds = Math.floor(absTime % 1000);
    if(absTime >= 60000) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    } else {
        return `${seconds.toString().padStart(1, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }
}