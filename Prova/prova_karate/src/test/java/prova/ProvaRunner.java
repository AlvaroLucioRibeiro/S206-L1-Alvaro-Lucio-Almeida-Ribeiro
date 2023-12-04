package prova;
import com.intuit.karate.junit5.Karate;

public class ProvaRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("prova").relativeTo(getClass());
    }    
}
