import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
name:'replaceBySpaces'
})
export class ReplaceBySpacesPipe implements PipeTransform{
    transform(value:string, character:string):string{
        return value.replace(character, ' ');
    }
}