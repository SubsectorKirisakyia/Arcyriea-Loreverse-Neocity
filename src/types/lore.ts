// Enums matching backend entities
export type Gender = 'MALE' | 'FEMALE' | 'BINARY' | 'UNKNOWN';
export type Relationship = 'FRIENDS' | 'COLLABS' | 'PARTNERS';
export type Affiliation = 'CORPORATE' | 'INDEPENDENT' | 'GRADUATED';
export type BrandCompany = 'NONE' | 'HOLOLIVE' | 'PHASE_CONNECT' | 'VSHOJO' | 'NIJISANJI' | 'OTHER';

// Race Types
export interface Race {
  id: number;
  name: string;
  lore?: string;
}

export interface RaceSubmit {
  name: string;
  lore?: string;
}

// Faction Types
export interface Faction {
  id: number;
  name: string;
  lore?: string;
  foundingDate?: string; // ISO date string from LocalDate
  symbol?: string;
  raceId?: number;
  raceName?: string;
}

export interface FactionSubmit {
  name: string;
  lore?: string;
  foundingDate?: string;
  symbol?: string;
  raceId?: number;
}

// Character Types
export interface Character {
  id: number;
  firstName: string;
  maidenName?: string;
  lastName?: string;
  fullName: string;
  nameOrder?: string;
  portrait?: string;
  references?: string[];
  factionId?: number;
  factionName?: string;
  raceId?: number;
  raceName?: string;
}

export interface CharacterSubmit {
  firstName: string;
  maidenName?: string;
  lastName?: string;
  nameOrder?: string;
  portrait?: string;
  references?: string[];
  factionId?: number;
  raceId?: number;
}

// Partner Types
export interface Partner {
  id: number;
  userName: string;
  avatarUrl?: string;
  youtubeName?: string;
  youtubeUrl?: string;
  youtubeAvatar?: string;
  twitchName?: string;
  twitchUrl?: string;
  twitchAvatar?: string;
  description?: string;
  gender?: Gender;
  relation?: Relationship;
  status?: Affiliation;
  tuberBrand?: BrandCompany;
}

export interface PartnerSubmit {
  userName: string;
  avatarUrl?: string;
  youtubeName?: string;
  youtubeUrl?: string;
  youtubeAvatar?: string;
  twitchName?: string;
  twitchUrl?: string;
  twitchAvatar?: string;
  description?: string;
  gender?: Gender;
  relation?: Relationship;
  status?: Affiliation;
  tuberBrand?: BrandCompany;
}
