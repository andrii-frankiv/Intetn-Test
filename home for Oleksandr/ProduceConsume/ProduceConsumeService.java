package main;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ProduceConsumeService {
  private static final int STACK_SIZE = 5;
  private List<Integer> stack = new ArrayList<>(STACK_SIZE);

  public void runApp() {
    new Producer().start();
    new Consumer().start();
  }

  class Producer extends Thread {

    @Override
    public synchronized void run() {
      while (stack.size() == STACK_SIZE) {
        try {
          wait();
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
      for (int i = 0; i < STACK_SIZE; i++) {
        int randomValue = new Random().nextInt(100);
        stack.add(randomValue);
        System.out.println("Producer produced: " + randomValue);
        this.notifyAll();
      }
    }
  }


  class Consumer extends Thread {
    int count = 0;

    @Override
    public synchronized void run() {
      while (stack.size() == 0) {
        try {
          this.wait();
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
      System.out.println("Consumer consumed: " + stack.get(0));
      count++;
      notifyAll();
    }
  }
}
