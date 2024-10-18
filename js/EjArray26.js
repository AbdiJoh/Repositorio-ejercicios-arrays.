function combinarYOrdenar(...arreglos) {
    return arreglos.flat().sort((a, b) => a - b);
}

const arr1 = [39, 16];
const arr2 = [479, 23];
console.log(combinarYOrdenar(arr1, arr2));