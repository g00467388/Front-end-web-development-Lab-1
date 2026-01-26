// return length of string
function GetLength(str :string) :number
{
    return str.length
}
// return length of string excluding white spaces
function GetLengthWithoutSpace(str :string) :number
{
    return str.trim().length;
}
// return length based off of boolean CountSpaces parameter
function GetLengthWithOrWithoutSpace(str :string, CountSpaces? :boolean) :number
{
    return CountSpaces ? GetLength(str) : GetLengthWithoutSpace(str)
}
// Print usage of methods 
console.log("Counting spaces: " + GetLength(" dog "))
console.log("Not counting spaces: " + GetLengthWithoutSpace(" dog "))
console.log("Counting spaces: " + GetLengthWithOrWithoutSpace(" dog ", true))
console.log("Not counting spaces: " + GetLengthWithOrWithoutSpace(" dog ", false))