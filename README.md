<h1>simple-storage</h1>

<p>This simple JavaScript library makes using Local and Session storage easier.</p>

<p>It has no dependencies and is only 2kb minified. Local storage has no expiration, but this package has functions that allow you to set
	an expiration. <a href="http://www.html5rocks.com/en/features/storage" target="_blank">Web storage is supported in Internet Explorer 8+, 
		Firefox, Opera, Chrome, and Safari.</a></p>

<h2>Available Functions</h2>
<ul>
	<li><strong>saveLocalStorage(key, content, expiration) -</strong> saves to the local storage.
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key for content</li>
			<li><strong>content: </strong> the content to save</li>
			<li><strong>expiration: (OPTIONAL)</strong> if set, the seconds until the storage should expire</li>
		</ul>
	</li>
	<li><strong>saveSessionStorage(key, content) -</strong> saves to the session storage. Session storage expires with the browser window.
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key for content</li>
			<li><strong>content: </strong> the content to save</li>
		</ul>
	</li>
	<li><strong>getLocalStorage(key) -</strong> gets an item from local storage
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key to find the content</li>
		</ul>
	</li>
	<li><strong>getSessionStorage(key) -</strong> gets an item from session storage
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key to find the content</li>
		</ul>
	</li>
	<li><strong>deleteLocalStorageValue(key) -</strong> removes the content stored for this key
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key to find and remove content for</li>
		</ul>
	</li>
	<li><strong>deleteSessionStorageValue(key) -</strong> removes the content stored for this key
		<br>Parameters
		<ul>
			<li><strong>key: </strong> the unique key to find and remove content for</li>
		</ul>
	</li>
	<li><strong>clearLocalStorage() -</strong> clears ALL content in local storage for this domain</li>
	<li><strong>clearSessionStorage() -</strong> clears ALL content in session storage for this domain</li>
</ul>