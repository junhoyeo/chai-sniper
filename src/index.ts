import axios from 'axios';
import { promises as fs } from 'fs';
import parseCurl from 'parse-curl';
import path from 'path';

import { Boost } from './types';

const omit = (prop: string, { [prop]: _, ...rest }) => rest;

type Config = {
  headers: Record<string, string>;
};

const getConfig = async (): Promise<Config> => {
  const raw = await fs.readFile(path.join(__dirname, 'curl.raw'));

  let headers = parseCurl(raw.toString()).header;
  headers['Cookie'] = headers['Set-Cookie'];
  headers = omit('Set-Cookie', headers);

  return { headers };
};

const getAvailableCards = async (config: Config) => {
  const { data: cardData } = await axios.get<{
    total: number;
    list: Boost.Card[];
  }>('https://api-mobile.chai.finance/v1/boost/promotion/available', config);
  const cards = cardData.list.filter((v) => v.status === 'enabled');
  return cards;
};

const snipeCard = async (card: Boost.Card, config: Config) => {
  const buyURL = `https://api-mobile.chai.finance/v1/boost/campaign/${card.campaignId}/buy`;
  const { data: buyData } = await axios.post(buyURL, {}, config);
  return buyData;
};

const main = async () => {
  const config = await getConfig();
  const cards = await getAvailableCards(config);

  const card = cards.find((v) => v.brand.name.includes('Flow'));
  if (!card) {
    return;
  }
  const result = await snipeCard(card, config);
  console.log(result);
};

main();
