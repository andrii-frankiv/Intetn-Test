package ConsumerProducer;

import java.util.Stack;

public class Consumer {
    private Stack<Element> elements;

    public Consumer(Stack<Element> elements) {
        this.elements = elements;
    }

    public boolean consume(){
        if (elements.size() > 0){
            System.out.println("-\tConsumed - " + elements.lastElement() + "\tStack size: " + (elements.size() - 1));
            elements.pop();
            return true;
        } else{
            return false;
        }
    }
}