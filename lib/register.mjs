import * as Module from "module";
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import * as util from "util";

const hooksUrl = pathToFileURL(resolve(import.meta.dirname, 'hooks.js'));

if (process.argv.some(param => param === ("USE_REGISTER_HOOKS=true"))) {
    console.log("using module.registerHooks")<
    Module.registerHooks({
        resolve(specifier, context, defaultResolve) {
            console.log(`Resolving: ${specifier}`);
            
            // Use the default resolver for normal behavior
            return defaultResolve(specifier, context);
        },
        load(url, context, next) {
            console.log(`Loading: ${url}`);
            
            // Use the default loader for normal behavior
            return next(url, context);
        },
        evaluate(context, nextEvaluate) {
            console.log(`evaluate: ${util.inspect(context.module)}`);
            nextEvaluate();
        }
    });
} else {
    console.log("using module.register")<
    Module.register(hooksUrl);
}
