import heroes from './characters.json';
import episodes from './episode.json';
import locations from './location.json';

export const CATEGORIES = {
    heroes,
    episodes,
    locations
}

export const CATEGORIES_NAME = {
    heroes: 'Heroes',
    episodes: 'Episodes',
    locations: 'Locations'
}

export const CATEGORIES_API = {
    heroes: 'character',
    episodes: 'episode',
    locations: 'location'
}
