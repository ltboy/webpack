export default function detectPlatform(userAgent = '') {
  return /(Mobile|Android|iPhone|iPad|iPod|iOS|BlackBerry)/ig.test(userAgent) ? 'mobile' : 'pc'
}

