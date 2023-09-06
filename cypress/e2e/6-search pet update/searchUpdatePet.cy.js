describe('Consultar la Mascota Modificada por Status', () => {
    it('Debería consultar la mascota modificada por estado "sold"', () => {
      const status = 'sold';
  
      cy.request('GET', `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
        .should((response) => {
          expect(response.status).to.eq(200);
          // Seran visualizada todas las mascotas en la respuesta tengan el estado "sold"
          response.body.forEach((pet) => {
            expect(pet.status).to.eq(status);
          });
        });
    });
  });
  