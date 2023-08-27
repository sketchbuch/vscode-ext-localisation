export type TranslationType = string | string[];
export type PlaceholderType = string | number;

export interface Placeholders {
  [key: string]: PlaceholderType;
}

export interface Translations {
  [key: string]: TranslationType | Translations;
}

export interface TranslationCache {
  [key: string]: TranslationType;
}
