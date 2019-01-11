/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if(height.length<3){
    return 0
  }
  return find(height,0,height.length-1)
};

var find = function(height, start, end) {
  if(end-start < 2){
    return 0
  }
  let max=-1, tmp=-1, min_two = Math.min(height[start], height[end]), sum=0;
  for(let i = start+1; i<end; i++){
    sum = sum+(min_two-height[i]);
    if(height[i]> max){
      max=height[i];
      tmp=i;
    }
  }
  if(max<min_two){
    return sum
  }else{
    return find(height, start, tmp)+find(height,tmp,end)
  }
}