describe('Consultar Mascota Añadida Previamente por ID', () => {
    it('Debería consultar una mascota por su ID', () => {
      const petId = 20230609;
  
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`)
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(petId);
        });
    });
  });
  