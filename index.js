function receivesAFunction(spy) {
    return spy();
}

receivesAFunction(function() {return chai.spy()});

function returnsANamedFunction() {
    var fn = returnsANamedFunction
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        var fn = returnsAnAnonymousFunction;
        return fn;
    }
}
