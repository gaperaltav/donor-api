import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
});

// GET methods
const fetchDonations = () => api.get('/donations');


// POST methods
const createDonation = (donation) => api.post('/donations', {
  bloodDoneeId: donation.bloodDoneeId,
  reason: donation.reason,
  bloodType: donation.bloodType,
});

export default {
  fetchDonations,
  createDonation,
};