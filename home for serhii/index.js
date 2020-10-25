const firstObject = {
    firstKey: 1,
    objectKeyFirst: {
        string: 'hello',
        oddArray: [1, 3, 5],
        anotherObj: {
            key: 'Wat?'
        }
    },
    methodKey: function () {
        return this.objectKeyFirst.oddArray.length;
    }
}
const secondObject = {
    weirdArray: ['x'],
    objectKeyFirst: {
        oddArray: [5, 1, , 3]
    },
    methodKey: function () {
        return 3;
    }
    }
   delete secondObject.weirdArray;
const {oddArray, string} = firstObject.objectKeyFirst;
const {key} = firstObject.objectKeyFirst.anotherObj;
const {methodKey} = firstObject;
const {firstKey} = firstObject;

secondObject.objectKeyFirst =  {oddArray, string};
secondObject.objectKeyFirst.anotherObj = {key};
secondObject.methodKey = {methodKey};
secondObject.firstKey = {firstKey};

function isObjectEqual(obj1,obj2){
 	const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
    return isEqual; 
 }

 isObjectEqual(secondObject,firstObject);
 console.log(isObjectEqual());
