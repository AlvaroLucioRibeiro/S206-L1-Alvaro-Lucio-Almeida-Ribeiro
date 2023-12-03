Feature: Testando API

Background: Executa uma vez antes de cada teste
    * def url_base = "https://digimon-api.vercel.app/api/digimon/"

Scenario: Testando retorno .
    Given url url_base
    When method get
    Then status 200
  
Scenario: Testando retorno name/Patemon/ com informações inválidas.
    Given url url_base
    And path '/name/Patemon/'
    When method get
    Then status 400
  
Scenario: Testando retorno name/Patamon
    Given url url_base 
    And path '/name/patamon/'
    When method get
    Then status 200
    And match response[0].name == "Patamon"
    And match response[0].level == "Rookie"

Scenario: Testando retorno level/Mega
    Given url url_base
    And path '/level/mega/'
    When method get
    Then status 200
    And match each response[*].level == "Mega"

Scenario: Testando retorno com atributo de tipo errado
    Given url url_base
    And path '/type/nonexistenttype/'
    When method get
    Then status 404

Scenario: Testando retorno de informações detalhadas do Digimon Agumon
    Given url url_base
    And path '/name/agumon/'
    When method get
    Then status 200
    And match response[0].name == "Agumon"
    And match response[0].level == "Rookie"
    And match response[0].img contains 'agumon.jpg'
