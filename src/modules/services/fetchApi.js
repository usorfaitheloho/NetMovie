export const get = async (url) => {
  try {
    const res = await fetch(url);
    const datas = await res.json();
    return datas;
  } catch (error) {
    return error;
  }
};

export const post = async (url, data) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch(url, config);
	  return res.text;
  } catch (error) {
    return error;
  }
};
