import { Sort } from './bubble_sort';  
import { Quick } from './quick_sort';  

// gerando vetores aleatórios
const generateRandomArray = (size: number): number[] => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

// rodando o algoritmo de ordenação e medir o tempo de execução
const runAndMeasure = (sortFunction: (v: number[]) => void, arraySize: number, sortName: string) => {
    const array = generateRandomArray(arraySize);
    console.time(`${sortName} - ${arraySize} elementos`);
    sortFunction(array);
    console.timeEnd(`${sortName} - ${arraySize} elementos`);
}

const bubbleSortInstance = new Sort<number>();  
const quickSortInstance = new Quick<number>();  


const sizes = [1000, 10000, 100000];


sizes.forEach(size => {
    console.log(`\nComparando para ${size} elementos:\n`);

    
    runAndMeasure(bubbleSortInstance.bubble_naive.bind(bubbleSortInstance), size, 'Bubble Naive');

    
    runAndMeasure(bubbleSortInstance.bubble_opt.bind(bubbleSortInstance), size, 'Bubble Optimized');

    
    runAndMeasure(quickSortInstance.sort.bind(quickSortInstance), size, 'Quick Sort');
});
