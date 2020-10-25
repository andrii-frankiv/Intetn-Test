import converter.ConvertDollar;
import converter.ConvertEuro;
import converter.ConvertFrank;
import converter.ConvertZlt;
import converter.Converter;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ConverterService {
  private final BufferedReader reader =new BufferedReader(new InputStreamReader(System.in));

  private final Converter convertDollar = new ConvertDollar();
  private final Converter convertEuro = new ConvertEuro();
  private final Converter convertFrank = new ConvertFrank();
  private final Converter convertZlt= new ConvertZlt();

  public void convert() throws IOException {
    System.out.print("Enter amount of UAH to convert: ");
    float amountOfUAH = Float.parseFloat(reader.readLine());

    System.out.printf("USD: %.4f\n", convertDollar.convert(amountOfUAH));
    System.out.printf("EUR: %.4f\n", convertEuro.convert(amountOfUAH));
    System.out.printf("FR: %.4f\n", convertFrank.convert(amountOfUAH));
    System.out.printf("ZLT: %.4f\n", convertZlt.convert(amountOfUAH));
  }
}
