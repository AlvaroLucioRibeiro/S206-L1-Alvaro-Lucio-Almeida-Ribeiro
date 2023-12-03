package aula_inatel.json_placeholder;
import com.intuit.karate.junit5.Karate;

public class JsonRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("json_placeholder").relativeTo(getClass());
    }    

}
