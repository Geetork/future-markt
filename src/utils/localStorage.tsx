export const clearLocalStorageAfter24Hours = () => {
    const keys = ['isRequestSent', 'gbp'];
    keys.map((key) => {
        const item = localStorage.getItem(key);

        if (item) {
            const { timestamp } = JSON.parse(item);
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - timestamp;
            const hoursDifference = timeDifference / (1000 * 60 * 60);
            if (hoursDifference >= 24) {
                localStorage.removeItem(key);
            }
        }
    });
}