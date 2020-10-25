package converter;

public abstract class Converter {
  public float convert(float amountOfUAH) {
    return amountOfUAH / getCourse();
  }

  abstract float getCourse();
}
