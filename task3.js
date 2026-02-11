function sayHello(text){
    return "Hello "+text;
}
function sayGoodbye(text){
    return "Goodbye "+text;
}
function transformMessage(message="friend ",transformer=sayHello){
    return transformer(message);
}



console.log(transformMessage());
console. log(transformMessage("Ahmad", sayGoodbye));
console. log(transformMessage("Yara", sayHello));