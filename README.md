# VSCode Extension Localisation

**vscode-ext-localisation**

This packages is for VSCode extension developers to aid in translating their extensions.

VSCode already localises an extension's package.json file using nls files, this package also lets you use the same files to localise the rest of your extension as well.

VSCode localises package.json using key/values in nls files but these are flat - you can't structure the translations. If you want to scope the translations they have to still be one key:

```
    {
        "some-scope.my-key": "A translation"
    }
```

With this extension you can structure your translations **for the rest** of your extension anyway you want (basically anywhere where you use the t() function to access translations).

```
    {
        "some-scope": {
            "my-key": "A translation"
        }
    }
```

This was created for my own extensions but maybe you will find it useful for your own.

# Installation

```
    yarn add vscode-ext-localisation
```

# How to use

In your extension's activate() function, call loadTranslations() with the current vscode interface language and the extension path:

```
    import { getVscodeLang, loadTranslations } from 'vscode-ext-localisation';

    export const activate = (context: vscode.ExtensionContext): void => {
        loadTranslations(getVscodeLang(process.env.VSCODE_NLS_CONFIG), context.extensionPath);
    };
```

This will load the translations for the active language. If the vscode langauge ever changes, vscode will restart and call the activate() function again, loading the correct language. If the language has no translation the default english translation will be used instead.

Then, to use a translation, import the t() function and uses it in your code:

```
    import { t } from 'vscode-ext-localisation';

    const anExampleFunction = (): string => {
        // Do stuff...
        return t('some-scope.an.example.function');
    }
```

If the english nls translation file does not exist loadTranslations() will throw an error - it is the minimum required translation file in order to use this package.

## Placeholders

You can use placeholders, first define a placeholder in a translation by surrounding it with double curly brackets:

```
    {
        "currentCount": "Count: {{count}}"
    }
```

Then pass in an object with the placeholders and their values:

```
    t('currentCount', { count: 10 })
```

## NLS Files

The nls files need to be in the root of your extension, they are just json files.

**package.nls.json** is the **en** translation file (vscode defaults to english - you can't make another language the default).

Other language files are in the same location but are suffixed with their language code:

**package.nls.de.json**, **package.nls.it.json** etc.

A list of supported language codes can be found here: https://code.visualstudio.com/docs/getstarted/locales

## Examples Usage

See any of my VSCode extensions: https://github.com/sketchbuch?tab=repositories&q=vsc&type=&language

**vsc-packages** has the most comprehensive usage of this package.

## Latest Version

#### [1.0.1](https://github.com/sketchbuch/vscode-ext-localisation/compare/v1.0.0...v1.0.1) (2020-07-01)

- Clean up
