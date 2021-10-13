import { backgroundColors, effects, fontColors, Reset } from './model';
function addColor(text:string, color:string, isBackground:boolean= false):string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList:["bright"|"dim"|"italic"|"underscore"|"blink"]) {
    return effectList.map(effect => effects[effect]).join('');
}

type colorOptions = {
    font?: "black"|"red"|"green"|"yellow"|"blue"|"magenta"|"cyan"|"white";
    effects?: ["bright"|"dim"|"italic"|"underscore"|"blink"];
    background?: "black"|"red"|"green"|"yellow"|"blue"|"magenta"|"cyan"|"white";  
}

export function color(text:string, options?:colorOptions) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
