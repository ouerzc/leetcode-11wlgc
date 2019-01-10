/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = []
  var left = ['(', '{', '[']
  var right = [')', '}', ']']
  var result = true
  for (var index = 0; index < s.length; index++) {
    const char = s[index];
    if(left.indexOf(char) ===-1 && right.indexOf(char) ===-1){
      return false
    }
    if(0 === stack.length){
      stack.push(char)
    }else{
      var stackLast = stack[stack.length-1]
      if(right.indexOf(stackLast) > -1){
        result = false
        return false;
      }else if(right.indexOf(char) > -1){
        if(left.indexOf(stackLast) === right.indexOf(char)){
          // 移除最后一项
          stack.pop()
        }else{
          result = false
          return false
        }
      }else{
        stack.push(char)
      }
    }
  }
  if(result && stack.length ===0 ){
    return true
  }else{
    return false
  }
};