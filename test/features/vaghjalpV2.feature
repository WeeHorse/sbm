Feature: Våra vägassistansförsäkringar

	Scenario: As a customer i would like to buy the Väghjälp bil insurance
    Given that i am on the SBM home page
	And i go to vagassistansforsakringar
	When i click väghjälp bil insurance
	And i click the order button BESTÄLL NU
	And i fill regnr
	And i fill ssn
	And i click hämta uppgifter
	And the page should show personal information
	And i fill the email field
	And i fill the mobil field
    And i click BankID
    Then i should get a popup  
    And i enter my ssn
	And i click fortsatt
	And i should get confirmation on my order

		
	
