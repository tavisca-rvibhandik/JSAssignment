function stringOperation() {

    this.string1;
    this.string2;
    this.char1;
    this.char2;
    this.index1;
    this.index2;
    this.len;
    this.flag;
    this.concat = concat;
    this.length = length;
    this.chatAt = chatAt;
    this.subString = subString;
    this.indexOf=indexOf;
    this.lastIndexOf = lastIndexOf;
    this.replace = replace;
}



function concat(conString1, conString2) 
{

    this.string1=document.getElementById('conString1').value;
    this.string2=document.getElementById('conString2').value;
    
    this.string1 = this.string1 + this.string2;
    document.getElementById("finalOutput").value = this.string1;
    
}

function length(lenString1) 
{
    
    this.string1=document.getElementById('lenString1').value;
    
    for (var i = 0; this.string1[i] !== undefined; i++) 
    {
        this.len=i+1;
    }
    if(this.len===undefined)
    {
	this.len=0; 
    }
    document.getElementById("finalOutput").value = this.len;
}

function chatAt(charString, charIndex) 
{

	this.string1=document.getElementById('charString').value;
	this.index=document.getElementById('charIndex').value;
	if(this.index1<0)
	{
		throw "Incorrect index";
	}
	else
	{
	document.getElementById("finalOutput").value = this.string1[this.index];
	}
}


function subString(subString1, subString2, subIndex1, subIndex2) 
{

	this.string1=document.getElementById('subString1').value;
	this.string2=document.getElementById('subString2').value;
	this.index1=document.getElementById('subIndex1').value;
	this.index2=document.getElementById('subIndex2').value;
	var j=0;
	if(this.index1<0 || this.index2<0 || this.index1>this.index2)
	{
		throw "Incorrect index";
	}
	else if(this.index2>=subString1.length)
	{
		this.index2=subString1.length;
	}
	
	else
	{
	for (var i = this.index1; i <= this.index2; i++) 
	{
		
		if(this.string1[i]===this.string2[j])
		{
			
			this.flag='Is a SubString';
			j++;
			continue;
		}
		else
		{
			
			this.flag='Is Not a SubString';
			break;
		}
		
	}
	}
	document.getElementById("finalOutput").value = this.flag;

}


function indexOf(iString, iChar) {

	var j=0;
	this.string1=document.getElementById('iString').value;
	this.char1=document.getElementById('iChar').value;
	
	for (var i = 0; this.string1[i] !== undefined; i++) 
	{
	     if(this.string1[i]===this.char1[j])
	     {
	     	  this.index=i;
		  j++;
		  if(j===this.char1.length)
		  {
		     break;
		  }
	     }
	}
	console.log(this.index);
	if(this.char1.length>1)
	{
		this.index=this.index-(this.char1.length-1);
		console.log(this.index);
	}
	
	document.getElementById("finalOutput").value = this.index;	

}




function lastIndexOf(linString, linChar) 
{

	
	this.string1=document.getElementById('linString').value;
	this.char1=document.getElementById('linChar').value;
	var j=(this.char1.length-1);
	for (var i = (this.string1.length-1);i>=0; i--) 
	{
	     if(this.string1[i]===this.char1[j])
	     {
	     	  this.index=i;
		  j--;
		  if(j===this.char1.length)
		  {
		     break;
		  }
	     }
	}
	
	
	
	document.getElementById("finalOutput").value = this.index;	

}

function replace(repString, repChar1, repChar2)
{
	var result="";
	var j=0;
	this.string1=document.getElementById('repString').value;
	this.char1=document.getElementById('repChar1').value;
	this.char2=document.getElementById('repChar2').value;
	var charArr= new Array();
	for (var i = 0; this.string1[i] !== undefined; i++) 
	{
		charArr[i]=this.string1[i];
	}	
	for (var i = 0; charArr[i] !== undefined; i++) 
	{
		if(charArr[i]===this.char1[j])
		{
			charArr[i]=this.char2[j];
			
			result = result + charArr[i];
			j++;
			if (j === this.char2.length)
			    j = 0;
		}
		else
		{
			result=result+charArr[i];
		}
	}
	document.getElementById("finalOutput").value = result;	
}


construct = function()
{
	console.log("hey");
        testString = new stringOperation;
}