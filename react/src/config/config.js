let config={
    APIhost: 'localhost',
    APIprotocol: 'http',
    APIport:'3002',  
}

config = {
    ...config,
    APIhostUrl: `${config.APIprotocol}://${config.APIhost}:${config.APIport}`
}

export default config;