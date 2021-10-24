/*
 * @Description:
 * @Date: 2021-10-19 20:17:01
 * @LastEditTime: 2021-10-24 22:33:14
 */
import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
const SpotifyApi = new SpotifyWebApi({
  clientId: 'c556bb28600f4253818453f363c54602',
  clientSecret: '99f3a40e7b994194922dc7e90aba0732',
  redirectUri: 'https://github.com/Tubring25/Vue3.0-typescript-music'
})

SpotifyApi.setAccessToken('BQAb8oO89aaqyEtUYryckKL9a10Uxc-FhQi5t8kjzuFzfVzDHjLzb6xki-moBOOd4SR3HG50NaxPtgBxdDuLsYoGUSQ2IaujtpMRAeL6cKQ1xWFBEFj3xsrqcwiYl2GQxphTLZltssPDJV3sHgFAs6WpyEX8Z-1xZpsX3dKTtL2J0A0jRzCEkjLGYRIV0l6u9HGQiwEjW0V0wg1dGxOvYxSbBTDY9sdiMH6BOmNpolPKY2WUUReoG5oEXubLI1gwObpdbQd1uHIyRG5Y6VZC3MzMouvk3ZXOm5JngKGtTp8')

export default SpotifyApi
