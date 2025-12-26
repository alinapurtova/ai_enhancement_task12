describe("Cart Tests", () => {
  beforeEach(() => {
    cy.prompt([
      "Open https://demoblaze.com",
      "Wait until homepage loads and header is visible"
    ])
  })

  it("Verify adding same product 3 times and deleting one item from cart", () => {
    cy.prompt([
      "Click on the 'Nexus 6' product in the product list",
      "Verify the product details page is displayed",
      "Click on the 'Add to cart' button 3 times, waiting a few seconds after each click to ensure the action completes",
      "Navigate to the Cart page using the navbar link",
      "Verify that the 'Nexus 6' product appears 3 times in the cart table body",
      "Verify that the 'Place Order' button is visible",
      "Click on the delete button of one 'Nexus 6' product",
      "Wait a few seconds for the cart to update",
      "Verify that 'Nexus 6' now appears 2 times in the cart list",
    ])
  })

  it("Verify empty cart behavior", () => {
    cy.prompt([
      "Click on the 'Cart' link in the navbar",
      "Verify that the Cart page is displayed",
      "Verify that the Cart table body (<tbody>) has not got child elements (<tr>)",
      "Verify that the 'Place Order' button is visible",
      "Verify that the total price field in the cart is empty or not visible"
    ])
  })
})