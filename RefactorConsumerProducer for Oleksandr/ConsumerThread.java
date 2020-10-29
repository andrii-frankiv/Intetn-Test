package ConsumerProducer;

public class ConsumerThread extends Thread {

    public ConsumerThread(Consumer consumer) {
        super(new Thread(() -> {
            while (true){
                if(!consumer.consume()) {
                    Thread.yield();
                    try {
                        sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        })
        );
    }
}