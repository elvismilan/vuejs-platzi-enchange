const url = "https://api.coincap.io/v2";

async function getAssets() {
  const res = await fetch(`${url}/assets?limit=10`);
  const res_1 = await res.json();
  return res_1.data;
}

async function getAsset(coin) {
  const res = await fetch(`${url}/assets/${coin}`);
  const res_1 = await res.json();
  return res_1.data;
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const res_1 = await res.json();
  return res_1.data;
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
