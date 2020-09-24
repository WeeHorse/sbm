Feature: Buy an insurance

  Scenario: As a customer i would like to buy Väghjälp bil insurance
    Given that i am on the SBM home page
    And i click on vi tar dig hela vagen fram picture i'll be redirected to vägassistansförsäkringar page
    When i am on the vagassistansforsakringar page
    And i click väghjälp bil picture
    And i click the BESTALL NU button i will be redirected to DIN BESTALLNING page
    And i fill my cars reg nr
    And i fill my person nr
    And i click hamta uppgifter
    And the page should show personal information
    And i write the email adress
    And i write the mobil Nr
    And i click on the BankID button
    Then i will get a popup
    And i enter my person nr
    And i click fortsatt
    And i will get a confirmation message and sed the order
