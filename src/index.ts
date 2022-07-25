import axios from 'axios';
import { promises as fs } from 'fs';
import parseCurl from 'parse-curl';
import path from 'path';

const omit = (prop: string, { [prop]: _, ...rest }) => rest;

const getConfig = async () => {
  const raw = await fs.readFile(path.join(__dirname, 'curl.raw'));

  let headers = parseCurl(raw.toString()).header;
  headers['Cookie'] = headers['Set-Cookie'];
  headers = omit('Set-Cookie', headers);

  return { headers };
};

const main = async () => {
  const config = await getConfig();
  const { data } = await axios.get(
    'https://api-mobile.chai.finance/v1/boost/promotion/available',
    config,
  );
  console.log(data.list);
};

main();
