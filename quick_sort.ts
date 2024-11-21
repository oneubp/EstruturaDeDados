class Quick<T> {
    sort(array: T[], low: number = 0, high: number = array.length - 1): void {
        if (low < high) {
            const pivotIndex = this.partition(array, low, high);
            this.sort(array, low, pivotIndex - 1); // Subarray à esquerda do pivô
            this.sort(array, pivotIndex + 1, high); // Subarray à direita do pivô
        }
    }

    private partition(array: T[], low: number, high: number): number {
        // Escolhe um pivô aleatório
        const randomPivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        [array[high], array[randomPivotIndex]] = [array[randomPivotIndex], array[high]];

        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] <= pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        return i + 1;
    }
}


export {
    Quick
}