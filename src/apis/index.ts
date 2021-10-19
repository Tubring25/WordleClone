/*
 * @Description:
 * @Date: 2021-10-19 20:17:01
 * @LastEditTime: 2021-10-19 20:44:39
 */
import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
const SpotifyApi = new SpotifyWebApi({
  clientId: 'c556bb28600f4253818453f363c54602',
  clientSecret: '99f3a40e7b994194922dc7e90aba0732',
  redirectUri: 'https://github.com/Tubring25/Vue3.0-typescript-music'
})

SpotifyApi.setAccessToken(process.env.ACESS_TOKEN)

export default SpotifyApi
