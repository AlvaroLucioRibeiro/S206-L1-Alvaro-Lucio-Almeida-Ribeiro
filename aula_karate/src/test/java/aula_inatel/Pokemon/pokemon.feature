Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno .
  Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
  When method get
  Then status 200

Scenario: Testando retorno people/1/ com informações inválidas.
  Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
  When method get
  Then status 404

Scenario: Testando retorno Pikachu e verificando o JSON.
    Given url url_base 
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25

Scenario: Testing API response for Pikachu and verifying JSON
    Given url url_base
    And path 'pokemon/ditto'
    When method get
    Then status 200
    And match response.name == "ditto"
    And match response.base_experience == 101
    And def abilityName = response.abilities[1].name
    And print abilityName

Scenario: Testando retorno Pokemom Rede e um dos elementos do array de idiomas e testando o retorno JSON.
    Given url url_base 
    And path '/version/1/'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7
    