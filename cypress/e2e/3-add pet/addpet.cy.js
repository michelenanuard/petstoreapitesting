describe('Añadir una Mascota a la Tienda', () => {
    it('Debería agregar una mascota a la tienda', () => {
      const petData = {
        id: 20230609,
        category: {
          id: 0,
          name: 'string'
        },
        name: 'doggie testing',
        photoUrls: [
          'string'
        ],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'available'
      };
  
      cy.request('POST', 'https://petstore.swagger.io/v2/pet', petData)
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.equal(petData);
        });
    });
  });
  