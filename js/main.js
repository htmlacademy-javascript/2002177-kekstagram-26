import './data.js';
import './full-photo.js';
import './picture.js';
import './util';
import {createPhoto} from './picture.js';
import {createPosts} from './data.js';

const POST_COUNT = 25;
const arrayPosts = createPosts(POST_COUNT);
createPhoto(arrayPosts);


