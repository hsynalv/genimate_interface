export function middleware(req) {
  const authHeader = req.headers.get('authorization');

  // Kullanıcı adı ve şifre
  const username = 'genimate';
  const password = 'secure123';

  const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

  if (authHeader === basicAuth) {
    return new Response(null, { status: 200 });
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: '/(.*)', // Tüm sayfalar için geçerli
};
