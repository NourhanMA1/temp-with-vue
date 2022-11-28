var finalResponse = {
    submitData: function(_object, _code, par2, par3) {
        if (_code != null || _code != undefined) {
            console.log(_code)
            window.parent.postMessage({ code: _code }, '*');
        }

        if (_object != null || _object != undefined) {
            console.log(_object)
            window.parent.postMessage({ object: _object }, '*');
        }
        //console.log(object)
        //console.log(par2)
        //console.log(par3)
    }
}