import { Application, ReflectionKind } from "typedoc";
import { Converter } from "typedoc/dist/lib/converter";

function load({ application }: { application: Application }): void
{
    application.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context: any) => 
    {
        for (let reflection of context.project.getReflectionsByKind(ReflectionKind.Reference))
            context.project.removeReflection(reflection)
    });
}
export = load;