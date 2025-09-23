// hooks.js

// Dummy resolve hook
export async function resolve(specifier, context, defaultResolve) {
  console.log(`Resolving: ${specifier}`);
  
  // Use the default resolver for normal behavior
  const resolved = await defaultResolve(specifier, context);
  
  console.log(`Resolved to: ${resolved.url}`);
  return resolved;
}

// Dummy load hook
export async function load(url, context, defaultLoad) {
  console.log(`Loading: ${url}`);
  
  // Use the default loader for normal behavior
  const loaded = await defaultLoad(url, context);
  
  console.log(`Loaded: ${url}`);
  return loaded;
}
