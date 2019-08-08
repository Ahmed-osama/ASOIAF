import _get from "lodash/get";

export class House {
  id: any;
  seat?: string[];
  allegiance?: string[];
  region?: string[];
  religion?: string[];
  name?: string;
  words?: string;
  sigil?: string;
  logoURL?: string;
  constructor(house: object) {
    this.id = _get(house, "id", "");
    this.seat = _get(house, "seat", []);
    this.allegiance = _get(house, "allegiance", []);
    this.region = _get(house, "region", []);
    this.religion = _get(house, "religion", []);
    this.name = _get(house, "name", "");
    this.words = _get(house, "words", "");
    this.sigil = _get(house, "sigil", "");
    this.logoURL = _get(house, "logoURL", "/static/house-placeholder.png");
  }
}
