Feature: Våra vägassistansförsäkringar 

Scenario Outline: As a customer i would like to buy the Väghjälp bil insurance
    Given that i’m on the SBM home page
	And i click the Väghjälp bil picture
	When i’m on the vägassistansförsäkringar page 
	And i click the väghjälp bil picture
	And i click the order button “BESTÄLL NU”
	And i fill <regnr>
	And i fill <ssn>
	And i click hämta uppgifter
	And the page should show personal information
	And i fill the <email> field
	And i fill the <mobil> field
    And i click BankID
    Then i should get a popup  
    And i press YesOrNo

Examples:

|regnr   |ssn           |email               |mobil      	  |
| ABC123 | 195705047263 | Hej123@hej.se      | 345465465 	  |
| JOA112 | 195808175250 | Hejda123@hejda.se  | 545345365	  |
| XXS007 | 199909218175 | Hadet@hotmail.com  | 654434345	  |
		
	
