console.log('Importing CLI...');
import('./node_modules/vite/dist/node/cli.js').then(() => {
    console.log('CLI imported');
}).catch(err => {
    console.error('Error importing CLI:', err);
});
