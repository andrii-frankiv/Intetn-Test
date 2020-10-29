package ConsumerProducer;

import java.util.Stack;

public class Producer {
    private long sizeOf;
    private Stack<Element> elements;
    private long counter = 0;


    public Producer(Stack<Element> elements, long sizeOf) {
        this.elements = elements;
        this.sizeOf = sizeOf;
    }

    public boolean produce(){
        if (elements.size() < sizeOf){
            elements.push(new Element(Long.toString(counter)));
            counter++;
            System.out.println("\tProduced - " + elements.lastElement() + "\tStack size: " + elements.size());
            return true;
        } else {
            return false;
        }
    }
}