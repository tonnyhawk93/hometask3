import { color } from './colors';
import { markdown } from './md';
export function style(text: string, options: optionsType) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}

type optionsType = {
    font?: "black"|"red"|"green"|"yellow"|"blue"|"magenta"|"cyan"|"white";
    effects?: ["bright"|"dim"|"italic"|"underscore"|"blink"];
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?:string;
    background?:"black"|"red"|"green"|"yellow"|"blue"|"magenta"|"cyan"|"white";
}