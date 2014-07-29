function stringOperation() {

    this.string1;
    this.string2;
    this.char1;
    this.char2;
    this.index1;
    this.index2;
    this.len;
    this.flag;
    this.concat = function concat(conString1, conString2) {

        this.string1 = conString1;
        this.string2 = conString2;
        this.string1 = this.string1 + this.string2;
       return(this.string1);

    };

    this.length = function length(lenString1) {

        this.string1 = lenString1;

        for (var i = 0; this.string1[i] !== undefined; i++) {
            this.len = i + 1;
        }
        if (this.len === undefined) {
            this.len = 0;
        }
       return(this.len);
    };

    this.charAt = function charAt(charString, charIndex) {

        this.string1 = charString;
        this.index1 = charIndex;
       
        if (this.index1 < 0) {
            throw "Incorrect index";
        }
        else if (this.index1 > this.string1.length) {
            return("");
        }
        else {
            return(this.string1[this.index1]);
        }
    };

    this.subString = function subString(subString1, subIndex1, subIndex2) {

        this.string1 = subString1;
        this.string2 = "";
        this.index1 = subIndex1;
        this.index2 = subIndex2;
        var j = 0;



        if (this.index1 < 0 || this.index2 < 0 || this.index1 > this.index2 || this.index2 >= this.string1.length) {
            console.log(this.index2);
            this.index2 = ((this.string1).length - 1);
            console.log(this.index2);
        }

        for (var i = this.index1; i <= this.index2; i++) {
            this.string2 = this.string2 + this.string1[i];
        }

       return(this.string2);

    };


    this.indexOf = function indexOf(iString, iChar) {

        var j = 0;
        this.string1 = iString;
        this.char1 = iChar;

        for (var i = 0; this.string1[i] !== undefined; i++) {
            if (this.string1[i] === this.char1[j]) {
                this.index1 = i;
                j++;
                if (j === this.char1.length) {
                    break;
                }
            }
        }
        console.log(this.index1);
        if (this.char1.length > 1) {
            this.index1 = this.index1 - (this.char1.length - 1);
           
        }
        if (this.index1 === undefined) {
            this.index1 = -1;
        }
        return(this.index1);

    };


    this.lastIndexOf = function lastIndexOf(linString, linChar) {


        this.string1 = linString;
        this.char1 = linChar;
        var j = (this.char1.length - 1);
        for (var i = (this.string1.length - 1) ; i >= 0; i--) {
            if (this.string1[i] === this.char1[j]) {
                this.index1 = i;
                j--;
                if (j === this.char1.length) {
                    break;
                }
            }
        }

        if (this.index1 === undefined) {
            this.index1 = -1;
        }

        return(this.index1);

    };


    this.replace = function replace(repString, repChar1, repChar2) {
        var result = "";
        var j = 0;
        this.string1 = repString;
        this.char1 = repChar1;
        this.char2 = repChar2;
        var charArr = new Array();
        for (var i = 0; this.string1[i] !== undefined; i++) {
            charArr[i] = this.string1[i];
        }
        for (var i = 0; charArr[i] !== undefined; i++) {
            if (charArr[i] === this.char1[j]) {
                charArr[i] = this.char2[j];

                result = result + charArr[i];
                j++;

            }
            else {
                result = result + charArr[i];
            }
        }
        return(result);
    };
}


construct = function () {
    console.log("hey");
    testString = new stringOperation();



    document.getElementById('concat').onclick = function () {

        testString.string1 = document.getElementById('conString1').value;
        testString.string2 = document.getElementById('conString2').value;
       var result= testString.concat(testString.string1, testString.string2);
       document.getElementById("finalOutput").innerHTML = result;
    }
    
    document.getElementById('CharacterAt').onclick = function () {
        this.string1 = document.getElementById('charString').value;
        this.index1 = document.getElementById('charIndex').value;
        var result = testString.charAt(this.string1, this.index1);
        document.getElementById("finalOutput").innerHTML = result;
    }

   
    document.getElementById('Length').onclick = function () {
        this.string1 = document.getElementById('lenString1').value;
        
        var result = testString.length(this.string1);
        document.getElementById("finalOutput").innerHTML = result;
    }

    document.getElementById('Substring').onclick = function () {
        this.string1 = document.getElementById('subString1').value;
        this.index1 = document.getElementById('subIndex1').value;
        this.index2 = document.getElementById('subIndex2').value;
        var result=testString.subString(this.string1, this.index1, this.index2);
        document.getElementById("finalOutput").innerHTML = result;
    }

    document.getElementById('LastIndexOf').onclick = function () {
        this.string1 = document.getElementById('linString').value;
        this.char1 = document.getElementById('linChar').value;
        var result = testString.lastIndexOf(this.string1, this.char1);
        document.getElementById("finalOutput").innerHTML = result;
    }
    document.getElementById('FindIndex').onclick = function () {
        this.string1 = document.getElementById('iString').value;
        this.char1 = document.getElementById('iChar').value;
        var result = testString.indexOf(this.string1, this.char1);
        document.getElementById("finalOutput").innerHTML = result;
    }
    document.getElementById('Replace').onclick = function () {
        this.string1 = document.getElementById('repString').value;
        this.char1 = document.getElementById('repChar1').value;
        this.char2 = document.getElementById('repChar2').value;
        var result = testString.replace(this.string1, this.char1, this.char2);
        document.getElementById("finalOutput").innerHTML = result;
    }
}