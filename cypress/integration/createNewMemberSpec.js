describe('Create Member Form', () => {

  beforeEach(() => {
    
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
    cy.task('dropMembers');
  });

  it('Creates a new member', () => {

    //we will need to add DB drop helper function

    cy.visit('/')
    cy.get("#contact-tab").click();
    cy.get('#new-member-form').find('[id=new-member-name]').type('Himithy')
    cy.get('#new-member-form').find('[id=new-member-address]').type('S3 4KY')
    cy.get('#new-member-form').find('[id=new-member-role]').type('driver')
    cy.get('#new-member-form').submit();

    cy.visit('/')  // this forces a refresh which loads the new member
    cy.get("#contact-tab").click();
    cy.get('.driver-list').should('contain', 'Himithy');
    cy.get('.driver-list').should('contain', 'S3 4KY');
    cy.get('.guest-list').should('not.contain', 'Himithy');
    cy.get('.guest-list').should('not.contain', 'S3 4KY');
  });

  afterEach(() => {
    cy.visit('/')
    cy.get("#logout").click();
  });
});