# Blood donor project

This the main API for [donor app](https://github.com/gaperaltav/donor-app).

## Requirements
* NodeJS v12.13.1 or later.
* npm v6.13.1 or later.
* MongoDB v4.2.1 or later.

## Running the project

After you cloned the project, first rename the *.env.example* file to *.env* and fill it with your mongo server's configurations data. 

Second, open the terminal in the project's  directory and write the following commands:

```sh
# installing dependencies

npm install

# Run the API

npm start

# Run the API in development mode 

npm run dev
```

## Seeding the project

If you want to fill the app with an example data, you should run the following command:

```terminal
  npm run seed
```

If you want add more seed data you can check the seeders folder in the project.

## Project structure

These are the main basics models of the projects:

```js
//Types of blood
let bloodType = {
  id: 1,
  name: 'A+'  
}

// Types of Users:
// Blood Donor (Who gives), Blood Donee (Who receives)
// locationLat: user's latitude
// locationLong: user's Longitude
let user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
  password: '********',
  bloodType: 1,
  active: true,
  locationLat: 13.312312, 
  locationlong: 18.12332, 
  created_at: Date.now(),
  updated_at: Date.now(), 
}

// 24 hours expiration time for the DonationRequest
let donationRequest = {
  bloodDonorId: 1, 
  bloodDoneeId: 2, 
  reason: 'She is a vampire!',
  bloodType: 1,
  accepted: true || false,
  created_at: Date.now(),
  updated_at: Date.now()
}
```
