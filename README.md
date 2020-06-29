# VSCode Extension Localisation
**vscode-ext-localisation**

This packages is for VSCode extension developers to aid in translating their extensions.

VSCode already localises an extension's package.json file using package.nls.json files, this package also lets you use the same files to localise your extension as well. VSCode localises using key/values in the package.nls.json files but these are flat - you can't structure the translations. 

With this extension you can structure your translations for your extension anyway you want to any depth. Anything though intended for package.json will still need to be unnested.

# Installation

`yarn add vscode-ext-localisation`

After installing the package, create a new JS file and add the following lines of code inside it.

```
import {borderpack} from 'borderpack';

borderpack({
    border_type: 'dashed',
});

```