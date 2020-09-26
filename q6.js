a = {
    x: true
};
a.x = undefined;
a.hasOwnProperty('x'); //true
delete a.x;
a.hasOwnProperty('x'); //false