console.log("start ... ");

const colors1 = ["red","blue","yellow"]
const no1 = [21,41,5,81]
const fruits1 = ["orange","banana","pineapple"]

function f1(t) {

        console.log(t[0]);
        console.log(t[1]);
        console.log(t[2]);
        console.log(t[3]);

        return t;
}

function fruits(t,a) {
        let retval;

        switch (a) {
            case 'first':
                retval = t[0];
                break;
            case 'last':
                retval = t[t.length-1];
                break;                
            case 'full':
                retval = t[0];
                for (let i = 1; i < t.length; i++) {
                    retval = retval + ", " + t[i];
                }
                break;
            default:
                retval = " -= ERROR =- ";
        }

        return retval;
}

function getEvenAverage(n) {
        let sum = 0;
        let c = 0;

        for (let i = 0; i < n.length; i++) {

            if (n[i] % 2 === 0) {
                sum = sum + n[i];
                c++;                    
            }
        }
        console.log((sum));
        console.log((c));

        if ( c === 0 ) {
            return null;
        } else {
            return sum / c;
        }

}

/*
console.log(fruits(fruits1,'first'));
console.log(fruits(fruits1,'last'));
console.log(fruits(fruits1,'full'));
console.log(fruits(fruits1,'xll'));
*/

console.log(getEvenAverage(no1));

console.log("... complette");