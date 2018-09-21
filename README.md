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
let User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'ásdasdasd@gmail.com',
  password: 'dfdfdfd',
  bloodType: 1,
  active: true,
  locationLat: 13.312312, 
  locationlong: 18.12332, 
  created_at: '',
  updated_at: '', 
}

// 24 hours expiration time for the DonationRequest
let DonationRequest = {
  BloodDonorId: 1, 
  BloodDoneeId: 2, 
  reason: 'I aunt is sick',
  bloodType: 'AB+',
  accepted: true || false,
  created_at: '',
  updated_at: ''
}
```