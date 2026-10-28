// 버셀이 「/api/memo」 주소에서 이 파일을 돌림 · 주소와 열쇠는 버셀 환경변수에서 읽음
module.exports = async (req, res) => {
  const url = process.env.SUPABASE_URL + '/rest/v1/memo';
  const headers = { apikey: process.env.SUPABASE_KEY, 'Content-Type': 'application/json' };
  if (req.method === 'POST') {
    const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ body: req.body.body }) });
    return res.status(r.status).json({ ok: r.ok });
  }
  const r = await fetch(url + '?select=*&order=id.desc', { headers });
  res.status(r.status).json(await r.json());
};
