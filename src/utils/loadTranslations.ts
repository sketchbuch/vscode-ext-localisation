import * as fs from 'fs';
import * as path from 'path';
import { DEFAULT_LANG } from '../constants';
import { Translations } from '../localisation.interface';
import { getLangFileName } from './getLangFileName';

export let translations: Translations = {};

export const loadTranslations = (lang: string, extensionPath: string): void => {
  const defaultLangFile = path.join(extensionPath, getLangFileName(DEFAULT_LANG));
  const langFile = path.join(extensionPath, getLangFileName(lang));
  let fileToLoad = defaultLangFile;

  try {
    fs.lstatSync(defaultLangFile).isFile();
  } catch {
    throw Error(`Default translations could not be read (${defaultLangFile})`);
  }

  try {
    if (fs.lstatSync(langFile).isFile()) {
      fileToLoad = langFile;
    }
  } catch {}

  try {
    translations = JSON.parse(fs.readFileSync(fileToLoad, 'utf-8'));
  } catch {
    throw Error(`Unable to read translation file (${fileToLoad})`);
  }
};
