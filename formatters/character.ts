import _get from "lodash/get";

export class Character {
  id: any;
  gender?: string;
  titles?: string[];
  name?: string;
  allegiance?: string[];
  slug?: string;
  image?: string;
  alive?: string;
  spouse?: string[];
  placeOfDeath?: string;
  culture?: string;
  death?: number;
  birth?: number;
  children?: string[];
  pagerank?: string[];
  house?: string[];
  constructor(char: object) {
    this.id = _get(char, "id", "");
    this.gender = _get(char, "gender", "");
    this.titles = _get(char, "titles", []);
    this.name = _get(char, "name", "");
    this.allegiance = _get(char, "allegiance", []);
    this.slug = _get(char, "slug", "");
    this.image = _get(char, "image", undefined);
    this.alive = _get(char, "alive", "");
    this.spouse = _get(char, "spouse", "");
    this.placeOfDeath = _get(char, "placeOfDeath", "");
    this.culture = _get(char, "culture", "");
    this.death = _get(char, "death", "");
    this.birth = _get(char, "birth", "");
    this.children = _get(char, "children", []);
    this.pagerank = _get(char, "pagerank.rank", []);
    this.house = _get(char, "house", []);
  }
}
