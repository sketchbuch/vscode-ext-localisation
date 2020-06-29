export * from './localisation.interface';
export * from './utils/getVscodeLang';
export * from './utils/loadTranslations';
import { Placeholders } from './localisation.interface';
export declare const DEFAULT_LANG = "en";
export declare const t: (key: string, placeholders?: Placeholders | null) => string;
