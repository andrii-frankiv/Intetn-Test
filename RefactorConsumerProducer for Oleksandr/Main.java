package ConsumerProducer;

import java.util.Stack;

public class Main {
    static Stack<Element> elements = new Stack<>();
    static Producer producer = new Producer(elements, 10);
    static Consumer consumer = new Consumer(elements);

    public static void main(String[] args) {
        new ProducerThread(producer).start();
        new ConsumerThread(consumer).start();
    }
}