/** 
 * When "require"ing modules, Node searches node_module/ folders starting from current level and going up the filesystem path
 * 
 * Instructions:
 * 1. Include '02-required-module-a', '02-required-module-b'.
 * 2. Also try to require '02-required-module-c' - it will throw an error as it is not found anywhere.
 * 3. An absolute or relative path can also be used when "require"ing. Include './02-required-module-a'.
 * Log all the "require"d modules
 */