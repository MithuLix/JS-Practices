//color testing
const text = '#2A2A2A', 
    regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g,
    matches = text.match(regex), index = text.search(regex), 
    replaced = text.replace(regex, '#000000'),
    testing = regex.test(text);

console.log(matches, index, replaced, testing);




//number testing 2
const text2 = '01723452345', //+88-01723452345
    regex2 = /(\+88)?-?[01][1-9]\d{8}/g,
    matches2 = text2.match(regex2), index2 = text2.search(regex2), 
    replaced2 = text2.replace(regex2, 'phone'),
    testing2 = regex2.test(text2);

console.log(matches2, index2, replaced2, testing2);