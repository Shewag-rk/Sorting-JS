1.

var arr=[29 , -10 , 30 , 10 , 1 , 54 , 3];
var temp="";
for(var outer=0; outer<arr.length; ++outer){
        for(var inner=outer+1; inner<arr.length; ++inner)
        if(arr[outer]>arr[inner]){
            temp=arr[outer]
            arr[outer]=arr[inner];
            arr[inner]=temp;
        }
}
console.log(arr);
    


2.

var arr=[1,2,3,4,5,67,8];
var temp="";
for(var outer=0; outer<arr.length; ++outer){
        for(var inner=outer+1; inner<arr.length; ++inner)
        if(arr[outer]<arr[inner] || arr[outer]<arr[inner]){
            temp=arr[outer]
            arr[outer]=arr[inner];
            arr[inner]=temp;
        }else{
            console.log("Invaild input")
        }
}
console.log(arr);