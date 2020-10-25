package TellSpr;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class TelephoneBookApp {
    private List<User> users = new ArrayList<>();
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

    public TelephoneBookApp() throws IOException {
        System.out.println("1: Sign in," + " 2: Sign up");
        int userChoise = Integer.parseInt(reader.readLine());
        if (userChoise == 1) {
            signIn();
        } else if (userChoise == 2) {
            signUp();
        } else {
            System.out.println("Incorrect choise");
        }


    }

    private void signIn() throws IOException {
        System.out.print("Enter your user name:");
        String userName = reader.readLine();
        for (User user : users) {
            if (user.getUserName().equals(userName)) {
                System.out.println("Welcome " + user.getFirstName() + " " + user.getLastName());
                int userChoise = 0;
                while(userChoise != 5) {
                    System.out.println("1:Add " + "2:Remove " + "3:Find " + "4:All contacts " + "5:Sing out");
                    userChoise = Integer.parseInt(reader.readLine());
                    switch (userChoise) {
                        case (1):
                            Contact contact = new Contact();
                            System.out.print("Name:");
                            contact.setName(reader.readLine());
                            System.out.print("Number:");
                            contact.setPhoneNumber(reader.readLine());
                            user.getContacts().add(contact);
                            System.out.println("Succesfuly added!");
                            break;
                        case (2):
                            showAllContacts(user);
                            System.out.print("Whom you want to remove: ");
                            user.getContacts().remove(Integer.parseInt(reader.readLine())-1);
                            break;
                        case (3):
                            for (Contact cont : user.getContacts()) {
                                if (cont.getName().startsWith(reader.readLine())) {
                                    System.out.println(cont.getName() + " " + cont.getPhoneNumber());
                                }
                            }
                            break;
                        case (4):
                            showAllContacts(user);
                            break;
                    }
                }

                break;
            }
        }
    }

    private void showAllContacts(User user) {
        for (int i = 0; i < user.getContacts().size(); i++) {
            System.out.println(i + 1 + " " + user.getContacts().get(i).getName());
        }
    }

    private void signOut() throws IOException {
        new TelephoneBookApp();
    }

    private void signUp() throws IOException {
        User user = new User();
        System.out.print("Enter First name: ");
        user.setFirstName(reader.readLine());
        System.out.print("Enter Second name: ");
        user.setLastName(reader.readLine());
        System.out.print("Enter User name: ");
        user.setUserName(reader.readLine());
        users.add(user);
        System.out.println("Registered: ");
        signIn();
    }
}
