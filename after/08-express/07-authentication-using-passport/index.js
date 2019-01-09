/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );
const fs = require( 'fs' );

const config = require( './config.json' );

require( './init/01-deseed' );
require( './init/02-db' );

const app = express();

require( './init/03-middleware' )( app );
require( './init/04-template' )( app );
require( './init/05-passport' )( app );
require( './init/06-routes' )( app );
require( './init/07-seed' );
require( './init/08-start-server')( app );