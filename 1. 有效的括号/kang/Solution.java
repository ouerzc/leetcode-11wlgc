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
				} else if ((stack.peek() == '[' && str.charAt(i) == ']')//ƥ��ջ���͵�ǰ���Ƿ���ͬ
						|| (stack.peek() == '(' && str.charAt(i) == ')') 
                        || (stack.peek() == '{' && str.charAt(i) == '}')){
					stack.pop(); //����ջ����Ԫ��,���ҽ���ջ��Ԫ�س�ջ
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