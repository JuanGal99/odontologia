console.log('Starting debug script');
try {
    import('vite').then(vite => {
        console.log('Vite loaded');
        vite.createServer().then(server => {
            console.log('Server created');
            server.close();
        }).catch(err => {
            console.error('Error creating server:', err);
        });
    }).catch(e => {
        console.error('Error loading vite:', e);
    });
} catch (e) {
    console.error('Error in script:', e);
}
