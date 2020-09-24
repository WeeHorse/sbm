Feature: Ordering roadside assistance

As a user
I would like to order roadside assistance insurance

Scenario: Goto Road assistance order page
        Given that I am on the SBM homepage
        When I click on the väghjälp picture
        Then I should be directed to the vägassitansförsäkring page
        When I click on väghjälp bil picture
        Then I should be directed to the ordering page
        When I click on the Beställ nu button 
        Then I should be directed to the checkout page

        
