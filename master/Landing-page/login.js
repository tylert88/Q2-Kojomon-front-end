$(() => {
  var webAuth = new auth0.WebAuth({
    domain: 'kojomon.auth0.com',
    clientID: 'bUL7zF8NH51FQ10GSR7dA59361gL57zk',
    responseType: 'token id_token',
    audience: 'https://kojomon.auth0.com/userinfo',
    scope: 'openid profile email',
    redirectUri: window.location.href
  });
window.webAuth = webAuth;

  var loginBtn = document.getElementById('signin-btn');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });


  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        setSession(authResult);
        loginBtn.style.display = 'none';
        homeView.style.display = 'inline-block';
      } else if (err) {
        homeView.style.display = 'inline-block';
        console.log(err);
        alert(
          'Error: ' + err.error + '. Check the console for further details.'
        );
      }
      displayButtons();
    });
  }
window.webAuth = webAuth;

  function setSession(authResult) {
    // Set the time that the access token will expire at
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  function displayButtons() {
    if (isAuthenticated()) {
      console.log('Auth Success', localStorage);
      loginBtn.style.display = 'none';
      //logoutBtn.style.display = 'inline-block';
      loginStatus.innerHTML = 'You are logged in!';
    } else {
      loginBtn.style.display = 'inline-block';
      // logoutBtn.style.display = 'none';
      //loginStatus.innerHTML =
      //  'You are not logged in! Please log in to continue.';
    }
  }

  function getProfile() {
    if (!userProfile) {
      var accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        console.log('Access token must exist to fetch profile');
      }

      webAuth.client.userInfo(accessToken, function(err, profile) {
        if (profile) {
          userProfile = profile;
          console.log('Great Success!!', userProfile);
          displayProfile();
        }
      });
    } else {
       displayProfile();
    }
  }

  window.getProfile = getProfile;
});
