/**
 * require.resolve() does not execute the required module - it simply checks for its existence. It throws an error if the module is not found.
 * 
 * 
 * Instructions:
 * 1. Execute require.resolve on './04-require-a'. Also change it to a usual require statement and verify that the "require"d module runs.
 * 2. Try to execute require.resolve on './04-require-c' (or any non-existent module) - it will throw an error
 * 3. Print the main module, i.e. require.main
 * 4. Print the cached of modules, i.e. require.cache
 */