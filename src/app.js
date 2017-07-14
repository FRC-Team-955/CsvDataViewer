// Here is the starting point for your application code.

// Small helpers you might want to keep

// All stuff below is just to show you how it works. You can delete all of it.
import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import env from './env';

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());
