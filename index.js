function receivesAFunction(name){
    return name();
}

receivesAFunction(function(){return `Name` });

function returnsANamedFunction(){
    return function aNamedFunction(){
    console.log(`named function`);
}
}
function returnsAnAnonymousFunction(){
    return () => console.log("this is an anonymous function");
}
