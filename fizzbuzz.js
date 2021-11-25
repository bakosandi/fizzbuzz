function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) { // then a függvény törzsére vonatkozik //
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}

function write(message) {
    let msg = document.createElement("div");
    msg.innerText = message;
    document.body.append(msg);
}

function main() {
    for (let i = 0; i < 100; i++) {  // a for ciklus = számláló ciklus, 3 részből áll; i++ azt jelenti, hogy 1-el növeli (i = i +1 )// 
        let result = fizzbuzz(i);
        write(result);
    } 
}

window.addEventListener("load", main);