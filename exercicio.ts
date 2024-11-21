import { Sort } from './bubble_sort';
import { Quick } from './quick_sort';

const generateRandomArray = (size: number): number[] => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
};

const generateDescendingArray = (size: number): number[] => {
    return Array.from({ length: size }, (_, i) => size - i);
};

const generateSortedArray = (size: number): number[] => {
    return Array.from({ length: size }, (_, i) => i + 1);
};

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

    console.log(`\nCaso Médio:`);
    const randomArray = generateRandomArray(size);
    runAndMeasure(bubbleSortInstance.bubble_naive.bind(bubbleSortInstance), [...randomArray], 'Bubble Naive');
    runAndMeasure(bubbleSortInstance.bubble_opt.bind(bubbleSortInstance), [...randomArray], 'Bubble Optimized');
    runAndMeasure(quickSortInstance.sort.bind(quickSortInstance), [...randomArray], 'Quick Sort');

    console.log(`\nPior Caso (Bubble Sort):`);
    const descendingArray = generateDescendingArray(size);
    runAndMeasure(bubbleSortInstance.bubble_naive.bind(bubbleSortInstance), [...descendingArray], 'Bubble Naive');
    runAndMeasure(bubbleSortInstance.bubble_opt.bind(bubbleSortInstance), [...descendingArray], 'Bubble Optimized');
 
    console.log(`\nPior Caso (Quick Sort):`);
    const sortedArray = generateSortedArray(size);
    runAndMeasure(quickSortInstance.sort.bind(quickSortInstance), [...sortedArray], 'Quick Sort');
});
