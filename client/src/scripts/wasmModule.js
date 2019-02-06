import Wasm from "Cpp/primeNumbers.cpp";
// import { sub } from "Scripts/wasmImports";

export default Wasm.init((imports) => {
    // custom javascript function that can be called from C;
    // imports._sub = sub;
    return imports;
}).then((module) => {
    // console.log(module.exports.add(1, 2)); // 3
    console.log('asd');
    console.log(module.memory) // Raw ArrayBuffer Memory object
    console.log(module.memoryManager) // Memory Manager Class
    console.log(module.raw) // The complete unmodified return value of the webassembly init promise.
    return {
        getPrimes: module.exports.getPrimes,
        getPrimesWithThreads: module.exports.getPrimesWithThreads
    };
}).catch((err) => {
    console.log('weqw');
    console.error(err);
});