//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// LIBRARY CODE
//////////////////////////////////////////////////////////////////
/*
	Simple Storage
	Definition 	- Uses plain Jane JavaScript to store values to local storage. 
				- Web storage is supported in Internet Explorer 8+, Firefox, Opera, Chrome, and Safari.
*/

//////////////////////////////////////////////////////////////////
// PRIVATE CONSTANTS
//////////////////////////////////////////////////////////////////

var SESSION_STORAGE = 'session';
var LOCAL_STORAGE = 'local';

//////////////////////////////////////////////////////////////////
// PRIVATE SAVE CODE
//////////////////////////////////////////////////////////////////

function saveToStorage(storage_type, key, content, exp) {
	// Session storage expires with session, cannot set, check first
	if(storage_type === SESSION_STORAGE) {
		sessionStorage.setItem(key, content);
	} else {
		// expiration - save special in local storage, save in session normal
		if(!(typeof exp === 'number' && exp % 1 == 0)) {
			// Not a number, set to false
			exp = false;
		}
		var storage_object = { 'timestamp': (new Date()).getTime(), 'ttl': exp, 'content': content };
		localStorage.setItem(key, JSON.stringify(storage_object));
	}
}

//////////////////////////////////////////////////////////////////
// PRIVATE GET CODE
//////////////////////////////////////////////////////////////////

function getStorage(storage_type, key) {
	var delta = 0;
	var storage;
	var stored_value;
	if(storage_type === SESSION_STORAGE) {
		return stored_value = sessionStorage.getItem(key);
	} else {
		stored_value = localStorage.getItem(key);
		if(stored_value !== "") {
			parsed_value = JSON.parse(stored_value);
			// check if stored value has an expiration
			if(parsed_value.timestamp !== undefined && parsed_value.timestamp !== null) {
				if(!parsed_value.ttl) {
					// ttl is false - no expiration
					return parsed_value.content;
				} else {
					// calculate delta in seconds
					var delta = ((new Date()).getTime() - parsed_value.timestamp) / 1000;
					// check expire
					if(parsed_value.ttl - delta < 0) {
						// expired, return undefined
						return;
					} else {
						return parsed_value.content;
					}
				}
			} else {
				// object stored is not of this earth (or this library) return null
				return;
			}
		} else {
			// returned undefined if not set
			return;
		}
	}
}

//////////////////////////////////////////////////////////////////
// PRIVATE DELETE CODE
//////////////////////////////////////////////////////////////////

function deleteStorageValue(storage_type, key) {
	if(storage_type === SESSION_STORAGE) {
		sessionStorage.setItem(key,"");
	} else {
		localStorage.setItem(key,"");
	}
}

//////////////////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////////////////

// Function to save to local storage (expriration is optional)
function saveLocalStorage(key, content, exp) {
	if(exp !== undefined && exp !== null) {
		saveToStorage(LOCAL_STORAGE, key, content, exp);		
	} else {
		saveToStorage(LOCAL_STORAGE, key, content, false);
	}
}

// Function to save to session storage - expires when browser closed
function saveSessionStorage(key, content) {
	saveToStorage(SESSION_STORAGE, key, content, false);
}

function getLocalStorage(key) {
	return getStorage(LOCAL_STORAGE,key);
}

function getSessionStorage(key) {
	return getStorage(SESSION_STORAGE,key);
}

function deleteLocalStorageValue(key) {
	deleteStorageValue(LOCAL_STORAGE,key);
}

function deleteSessionStorageValue(key) {
	deleteStorageValue(SESSION_STORAGE,key);
}

function clearLocalStorage() {
	localStorage.clear();
}

function clearSessionStorage() {
	sessionStorage.clear();
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////