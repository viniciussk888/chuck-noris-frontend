type Joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

type SearchJokeModel = {
  total: number;
  result: JokeModel[];
};
