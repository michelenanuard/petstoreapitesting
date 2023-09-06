describe('Actualizar el Nombre y el Estado de la Mascota', () => {
    it('Debería actualizar el nombre y el estado de una mascota a "sold"', () => {
      const petId = 20230609;
      const updatedPetData = {
        id: petId,
        category: {
          id: 0,
          name: 'string'
        },
        name: 'doggie nuevo',
        photoUrls: [
          'string'
        ],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'sold'
      };
  
      cy.request('PUT', `https://petstore.swagger.io/v2/pet`, updatedPetData)
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.equal(updatedPetData);
        });
    });
  });
  