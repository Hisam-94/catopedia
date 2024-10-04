export interface Cat {
  id: string;
  name: string;
  origin: string;
  description: string;
  life_span: string;
  temperament: string;
  image?: {
    url: string;
  };
}
