// Devuelve el país del visitante según la geolocalización de Vercel.
// La página lo usa para elegir la zona de precios. Nunca se cachea: cada país ve su respuesta.
module.exports = function handler(req, res) {
  var country = req.headers['x-vercel-ip-country'] || null;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('CDN-Cache-Control', 'no-store');
  res.setHeader('Vercel-CDN-Cache-Control', 'no-store');
  res.statusCode = 200;
  res.end(JSON.stringify({ country: country }));
};
