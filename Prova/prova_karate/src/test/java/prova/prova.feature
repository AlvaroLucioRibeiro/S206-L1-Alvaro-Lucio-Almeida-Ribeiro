Feature: Testando API GORe

Background: Executa uma vez antes de cada teste
    * def url_base = "https://gorest.co.in/"

Scenario: Testando retorno de tudo
    Given url url_base
    When method get
    Then status 200

Scenario: Testando retorno de posts
    Given url url_base
    And path '/public/v2/posts'
    When method get
    Then status 200

Scenario: Testando retorno de usuário com ID inexistente (Negative case)
    Given url url_base
    And path '/public/v2/users/9999' 
    When method get
    Then status 404

Scenario: Testando retorno de usuário com ID existente 
    Given url url_base
    And path '/public/v2/users/5808961' 
    When method get
    Then status 200

Scenario: Criandp um novo usuario
    Given url url_base
    And path '/public/v2/users'
    And request { "name": "Alvaro", "email": "alvaro@inatel.br", "gender": "masculino", "status": "ativado" }
    When method post
    Then status 401