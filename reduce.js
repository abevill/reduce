function extractValue(arr, key){
    return arr.reduce(function(acc, next){
        acc.push(next[key]);
        return acc;
    }, []);
}

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc, next){
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            acc[lowerCased] = (acc[lowerCased] || 0) + 1;
        }
        return acc;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next){
        next[key] = value;
        return acc;
    }, arr);
}

function partition(arr, cb){
    return arr.reduce(function(acc, next){
        acc[cb(next) ? 0 : 1].push(next);
        return acc;
    }, [[], []]);
}
