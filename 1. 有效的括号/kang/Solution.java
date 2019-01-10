class Solution {
    public boolean isValid(String str) {
		
       Stack<Character> stack = null;
		
		
		if (str.length() % 2 == 1) {
			return false;
		} else {
			stack = new Stack<Character>();
 
			for (int i = 0; i < str.length(); i++) {
				if (stack.isEmpty()) {
					stack.push(str.charAt(i)); 
				} else if ((stack.peek() == '[' && str.charAt(i) == ']')//匹配栈顶和当前项是否相同
						|| (stack.peek() == '(' && str.charAt(i) == ')') 
                        || (stack.peek() == '{' && str.charAt(i) == '}')){
					stack.pop(); //返回栈顶的元素,并且将该栈顶元素出栈
				} else {
					stack.push(str.charAt(i));
				}
			}
 
			if (stack.isEmpty()) {
				return true;
			} else {
				return false;
			}
		}

    }
}