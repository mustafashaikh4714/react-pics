import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 290b97b704a91284bf0a76149921d869afafe9d8705934cd9863c24447202a86'
  }
})
