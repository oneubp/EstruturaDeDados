import { Sort } from './bubble_sort';
import { Quick } from './quick_sort';

// Gera um array com números aleatórios (caso médio)
const generateRandomArray = (size: number): number[] => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
};

// Gera um array em ordem decrescente (pior caso para Bubble Sort)
const generateDescendingArray = (size: number): number[] => {
    return Array.from({ length: size }, (_, i) => size - i);
};

// Gera um array já ordenado (pior caso para Quick Sort com pivô inicial/final)
const generateSortedArray = (size: number): number[] => {
    return Array.from({ length: size }, (_, i) => i + 1);
};

// Mede o tempo de execução para diferentes casos
const runAndMeasure = (
    sortFunction: (v: number[]) => void,
    array: number[],
    sortName: string
) => {
    console.time(sortName);
    sortFunction(array);
    console.timeEnd(sortName);
};

const bubbleSortInstance = new Sort<number>();
const quickSortInstance = new Quick<number>();

const sizes = [1000, 10000, 100000];

sizes.forEach((size) => {
    console.log(`\nTestando com ${size} elementos:`);

    // Caso médio (aleatório)
    console.log(`\nCaso Médio:`);
    const randomArray = generateRandomArray(size);
    runAndMeasure(bubbleSortInstance.bubble_naive.bind(bubbleSortInstance), [...randomArray], 'Bubble Naive');
    runAndMeasure(bubbleSortInstance.bubble_opt.bind(bubbleSortInstance), [...randomArray], 'Bubble Optimized');
    runAndMeasure(quickSortInstance.sort.bind(quickSortInstance), [...randomArray], 'Quick Sort');

    // Pior caso (Bubble Sort - decrescente)
    console.log(`\nPior Caso (Bubble Sort):`);
    const descendingArray = generateDescendingArray(size);
    runAndMeasure(bubbleSortInstance.bubble_naive.bind(bubbleSortInstance), [...descendingArray], 'Bubble Naive');
    runAndMeasure(bubbleSortInstance.bubble_opt.bind(bubbleSortInstance), [...descendingArray], 'Bubble Optimized');

    // Pior caso (Quick Sort - array ordenado)
    console.log(`\nPior Caso (Quick Sort):`);
    const sortedArray = generateSortedArray(size);
    runAndMeasure(quickSortInstance.sort.bind(quickSortInstance), [...sortedArray], 'Quick Sort');
});
