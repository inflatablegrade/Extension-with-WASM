	var importObject = {
  imports: {
      imported_func: function(arg) {
        console.log(arg);
      }
    }
  };
  
  var response = null;
  var bytes = null;
  var results = null;
  
  
  var wasmPath = chrome.runtime.getURL("simple.wasm");
  fetch(wasmPath).then(response =>
	response.arrayBuffer()
	).then(bytes =>
		WebAssembly.instantiate(bytes, importObject)
		).then(results => {
		results.instance.exports.exported_func();
});