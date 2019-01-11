/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var start = 0;
    var max = 0;
    for (let i = 0; i < heights.length; i++) {
      var area = heights[i] +getAreaLeft(heights, i)+getAreaRight(heights, i)
      if(area > max) {
        max = area
      }
    }
    return max
};

var getAreaLeft = function(heights, start){
  var index = start - 1
  var sum = 0
  while (index>=0 && heights[index] >= heights[start]) {
    sum += heights[start]
    -- index
  }
  return sum;
}

var getAreaRight = function(heights, start){
  var index = start + 1
  var length = heights.length
  var sum = 0
  while (index<length && heights[index] >= heights[start]) {
    sum += heights[start]
    ++ index 
  }
  return sum;
}