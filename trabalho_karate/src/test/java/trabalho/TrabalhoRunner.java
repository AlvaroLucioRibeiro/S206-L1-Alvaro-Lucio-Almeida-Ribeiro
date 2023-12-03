package trabalho;
import com.intuit.karate.junit5.Karate;

public class TrabalhoRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("trabalho").relativeTo(getClass());
    }    
}
