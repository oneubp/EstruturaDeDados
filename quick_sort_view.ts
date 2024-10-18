import {Quick} from './quick_sort'

// Função para gerar vetores aleatórios
const generateRandomArray = (size: number): number[] => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

// Função para rodar o Quick Sort e medir o tempo de execução
const runAndMeasure = (sortFunction: (v: number[]) => number[], arraySize: number, sortName: string) => {
    const array = generateRandomArray(arraySize);
    console.time(`${sortName} - ${arraySize} elementos`);
    sortFunction(array);
    console.timeEnd(`${sortName} - ${arraySize} elementos`);
}

let quick_sort = new Quick<number>();

// Comparando Quick Sort para 1.000, 10.000 e 100.000 elementos
[1000, 10000, 100000].forEach(size => {
    console.log(`\nComparando para ${size} elementos:\n`);

    runAndMeasure(quick_sort.sort.bind(quick_sort), size, 'Quick Sort');
});
