
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return text1+text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase()
}
const toLowerCase = (text) => {
    return text.toLowerCase()
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == "string");
}

const getExtension = (text) => {
    return text.split(".").pop();
}
const countSpaces = (text) => {
    return text.split(" ").length-1;
}
const InverseString = (text) => {
    var temp ="";
    for (let index = text.length-1; index > -1; index--) {
        temp=temp+text.charAt(index)
        }
        return temp;
    
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    for (let index = 0; index < array.length; index++) {
        array[index]= Math.abs(array[index]);
    }
        return array;
        
}
const circleSurface = (radius) => {
    return Math.round(radius*radius*Math.PI);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight /( height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {
    var array = [];
    for (var i = 0; i < 6; i++){
        array[i] = i;
    }
    return array;
}

const replaceElement = (languages) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    return array;

}

const addElement = (languages) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    array.push("Ruby");
    array.push("Python");
    return array
}

const addNumberElement = (numbers) => {
    var array = createNumbersArray();
    array.unshift(-1);
    array.unshift(-2);
    return array;
}

const removeFirst = (languages) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    array.push("Ruby");
    array.push("Python");
    array.shift();
    return array;
}

const removeLast = (languages) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    array.push("Ruby");
    array.push("Python");
    array.shift();
    array.pop();
    return array;
}

const convertStrToArr = (social_arr) => {
    var social = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    var array = social.split(',');
    return array;
}

const convertArrToStr = (languages) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    array.push("Ruby");
    array.push("Python");
    array.shift();
    array.pop();
    var string = array.join();
    return string;
}

const sortArr = (social_arr) => {
    var social = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    var array = social.split(',');
    array.sort();
    return array;
}

const invertArr = (social_arr) => {
    var array = createLanguagesArray();
    array[2] = "Javascript";
    array.push("Ruby");
    array.push("Python");
    array.shift();
    array.pop();
    array.reverse();
    return array;
}