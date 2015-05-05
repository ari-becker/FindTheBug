package problems;

import java.time.LocalDateTime;

@SuppressWarnings("unused")
public class Problem1 {
  public static Integer computeAge(LocalDateTime birthday) throws IllegalArgumentException {
    if(birthday.isAfter(LocalDateTime.now())) {
      throw new IllegalArgumentException("Not born yet!");
    }
    return LocalDateTime.now().getYear() - birthday.getYear();
  }
}
