var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

var wasmPath = chrome.runtime.getURL("simple.wasm");

WebAssembly.instantiateStreaming(fetch(wasmPath), importObject).then(
    (obj) => {
	obj.instance.exports.exported_func()
	},
);