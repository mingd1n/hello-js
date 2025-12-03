let isEmpty = function(funcName) {
    for(let key in funcName) {
        if(key == false)
            return false
    }
        return true
}