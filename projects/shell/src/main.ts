import { loadRemoteEntry } from '@angular-architects/module-federation';

// Falling back to loading scripts
// loadRemoteEntry({ type: 'script', remoteEntry: 'http://localhost:3000/remoteEntry.js', remoteName: 'mfe1'})

// Legacy version
// loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')

// New version for loading modules
// loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
// 	.then(_ => import('./bootstrap').catch(err => console.error(err)))


Promise.all([
	loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'}),
	loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:3001/remoteEntry.js'}),
 ])
 .catch(err => console.error('Error loading remote entries', err))
 .then(() => import('./bootstrap'))
 .catch(err => console.error(err));
 