

// Inititate the SDK
// IN A PRODUCTION APP YOU SHOULD NOT HARDCODE THESE VALUES BUT INSTEAD LOAD
// THEM FROM THE ENVIRONMENT AT BUILD TIME. SECRETS AND OTHER CREDENTIALS SHOULD
// NOT BE COMMITTED TO THE CODEBASE.

// let redirect_uri = `${window.location.protocol}//${window.location.host}`;
// if (window.location.pathname) {
  // redirect_uri += window.location.pathname;
// }

const spark = ciscospark.init({
  config: {
    credentials: {
		client_id: 'C5e6f6956073e2b9f1e55b4deada6ea21cf82e7e4e7981760697166fcec3d1301',
		
		scope: 'spark:all'
    }
  }
});

spark.once('ready', () => {


  // Now, let's set up the event listener for the Authenticate Button
  document.getElementById('authorization').addEventListener('submit', (event) => {
    // let's make sure we don't reload the page when we submit the form
    event.preventDefault();

    // initiate the login sequence if not authenticated.
    spark.authorization.initiateLogin();
	
	if (spark.canAuthorize) {
	window.location.href = "https://www.google.com";
	
	}
	
	
  });

  // Now, let's set up the event listener for the Authenticate Button
  document.getElementById('logout').addEventListener('submit', (event) => {
    // let's make sure we don't reload the page when we submit the form
    event.preventDefault();

    if (spark.canAuthorize) {
      // if already authenticated, logout on click
      spark.logout();
    }
    else {
      // No user is authenticated
      console.log('cannot logout when no user is authenticated');
    }
  });

  if (spark.canAuthorize) {
    // Authorization is successful

    // your app logic goes here

    // Change Authentication status to `Authenticated`
    const authStatus = document.getElementById('authentication-status');
    authStatus.innerHTML = 'Authenticated';
    authStatus.style = 'color: green';
  }
});