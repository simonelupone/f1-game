// lap generation and lap time format
export const lap = (baseTime = 90000, variance = 3000) => {
    return baseTime +(Math.random() * variance * 2 - variance);
}

export const formatLapTime = (timeMs) => {
    if (!timeMs) return '';

    const minutes = Math.floor(timeMs / 60000);
    const seconds = Math.floor((timeMs % 60000) / 1000);
    const milliseconds = Math.floor(timeMs % 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}