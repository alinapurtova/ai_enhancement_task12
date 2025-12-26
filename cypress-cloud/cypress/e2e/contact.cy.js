import { faker } from '@faker-js/faker';

describe("Contact Us Form Test", () => {
  it("Verify user can send message via Contact form", () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.person.firstName();
    const randomMessage = faker.lorem.sentence();

    cy.prompt(
      [
        "Open https://demoblaze.com",
        "Wait until homepage loads and header is visible",
        "Click on the 'Contact' option in the navbar",
        `Enter "${randomEmail}" in the Contact Email field`,
        `Enter "${randomName}" in the Contact Name field`,
        `Enter "${randomMessage}" into the Message field`,
        "Click on the Send Message button",
        "Verify that the Contact modal is closed or hidden"
      ]
    );
  });
});