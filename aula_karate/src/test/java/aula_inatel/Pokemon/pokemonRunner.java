package aula_inatel.Pokemon;

import com.intuit.karate.junit5.Karate;

public class pokemonRunner {
      @Karate.Test
    Karate testUsers() {
        return Karate.run("Pokemon").relativeTo(getClass());
    }    

}
