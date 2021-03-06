export interface Placeholders {
  [key: string]: string;
}

export interface Translations {
  [key: string]: string;
}

export interface DeepTranslations {
  [key: string]: string | DeepTranslations;
}
