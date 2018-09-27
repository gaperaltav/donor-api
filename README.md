# Blood donor proyect
This is a blood's donations app where you can donate blood and watch who need a donation.

These are the basic data models in the app:

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
