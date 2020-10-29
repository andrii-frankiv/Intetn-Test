package ConsumerProducer;

public class ProducerThread extends Thread {

    public ProducerThread(Producer producer) {
        super(new Thread(() -> {
            while (true){
                if (!producer.produce()) {
                    Thread.yield();
                    try {
                        sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }));
    }
}