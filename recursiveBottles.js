var happy = {
    hi: function sing(n, result){
        result = typeof result !== 'undefined' ? result : [];
        if(n ==0 ){
            result.push("No more bottles");
            return result;
        }
        var str = n + " bottles";
        return sing(n -1, result);
    }
}

console.log(happy.hi(3));