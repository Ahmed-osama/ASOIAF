import fetch from "isomorphic-unfetch";
import { Character } from "../formatters/character";
import { House } from "../formatters/House";
const apiUrl = "https://api.got.show/api/";

export const getAllCharacters = async function() {
  var url = apiUrl + "map/characters";
  const res = await fetch(url);
  const { data } = await res.json();
  const formattedData = await data.map(char => new Character(char));
  return formattedData;
};
export const getCharacterBySlug = async function(slug: string) {
  var url = apiUrl + "book/characters/bySlug/" + slug;
  const res = await fetch(url);
  const data = await res.json();
  return new Character(data);
};
export const getAllHouses = async function() {
  var url = apiUrl + "show/houses";
  const res = await fetch(url);
  const data = await res.json();
  const formattedData = await data.map(house => new House(house));
  return formattedData;
};
export const getHouseByName = async function(name) {
  var url = apiUrl + "show/houses/" + name;
  const res = await fetch(url);
  const data = await res.json();
  const formattedData = await data.map(house => new House(house));
  return formattedData[0];
};
export const getHouseCharacters = async function(name) {
  var url = apiUrl + "book/characters/byHouse/" + name;
  const res = await fetch(url);
  const data = await res.json();
  const formattedData = await data.map(char => new Character(char));
  return formattedData;
};
