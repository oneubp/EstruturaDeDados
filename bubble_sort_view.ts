
import {Sort} from './bubble_sort'

let sort = new Sort<number>();
let sort_s = new Sort<string>();
let my_array:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
let my_array_1:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
let my_array_2:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
let my_array_3: string[] = ["aa", "ab", "bc", "aa", "ac", "abc"];

console.log("Naive bubble sort: ");
sort.bubble_naive_view(my_array);
console.log("\n\n");
console.log("Bubble sort:");
sort.bubble_view(my_array_1);
console.log("\n\n");
console.log("Bubble sort optimized: ");
sort.bubble_opt_view(my_array_2);

console.log ("aa">"ab");
console.log ("ab">"aa");

sort_s.bubble(my_array_3);
console.log(...my_array_3);

const generateRandomArray = (size: number): number[] => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

const runAndMeasure = (sortFunction: (v: number[]) => void, arraySize: number, sortName: string) => {
    const array = generateRandomArray(arraySize);
    console.time(`${sortName} - ${arraySize} elementos`);
    sortFunction(array);
    console.timeEnd(`${sortName} - ${arraySize} elementos`);
}

const sortInstance = new Sort<number>();

// Comparar diferentes algoritmos para 1.000, 10.000 e 100.000 elementos
[1000, 10000, 100000].forEach(size => {
    console.log(`\nComparando para ${size} elementos:\n`);

    runAndMeasure(sortInstance.bubble_naive.bind(sortInstance), size, 'Bubble Naive');
    runAndMeasure(sortInstance.bubble.bind(sortInstance), size, 'Bubble');
    runAndMeasure(sortInstance.bubble_opt.bind(sortInstance), size, 'Bubble Optimized');
});