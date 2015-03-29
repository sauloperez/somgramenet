var errors  = require('../errors'),
    storage;

function getStorage(storageChoice) {
    // TODO: this is where the check for storage apps should go
    // Local file system is the default.  Fow now that is all we support.
    storageChoice = 's3';

    if (storage) {
        return storage;
    }

    try {
        // TODO: determine if storage has all the necessary methods.
       storage = require('./' + storageChoice);
    } catch (e) {
        errors.logError(e);
    }
    return storage;
}

module.exports.getStorage = getStorage;
