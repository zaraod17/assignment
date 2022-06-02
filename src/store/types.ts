export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  address: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  registered: string;
  pictureUrl: string;
}
