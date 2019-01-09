/**
 * The path module provides utilities for working with file and directory paths.
 * 
 * It takes care of OS differences in file names and paths and works consistently across different platforms - so make sure to use it when working with file paths (instead of performing string operations like substring extraction, concatenation etc.)
 * 
 * It also manages adding path delimiters as and when required and supports use of ./ and ../ too
 * 
 * Instructions:
 * 1. Require 'path' module
 * 2. Use path.dirname() to find directory of a file given the file path.
 * 3. Use path.basename() to find the last path part of a file (name of file)
 * 4. Use path.extname() for finding extension
 * 5. path.parse() breaks file path into paths (includes all what was done by the methods above)
 * 6. path.join() joins passed file path portions - accepts even ./ and ../ and resolves the path correctly.
 */