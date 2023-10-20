;((g) => {
  var h,
    a,
    k,
    p = 'The Google Maps JavaScript API',
    c = 'google',
    l = 'importLibrary',
    q = '__ib__',
    m = document,
    b = window
  b = b[c] || (b[c] = {})
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement('script'))
        e.set('libraries', [...r] + '')
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
            g[k],
          )
        e.set('callback', c + '.maps.' + q)
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e
        d[q] = f
        a.onerror = () => (h = n(Error(p + ' could not load.')))
        a.nonce = m.querySelector('script[nonce]')?.nonce || ''
        m.head.append(a)
      }))
  d[l]
    ? console.warn(p + ' only loads once. Ignoring:', g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)))
})({
  key: 'AIzaSyDQZDKJBwh9Z3JDV5dVTzUgFx3Ok-Oeysk',
  v: 'weekly',
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
})

function onRecaptchaLoadCallback() {
  const clientId = grecaptcha.render('inline-badge', {
    sitekey: '6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q',
    badge: 'inline',
    size: 'invisible',
  })
}

/**
POST https://recaptchaenterprise.googleapis.com/v1/projects/PROJECT_ID/assessments?key=API_KEY

{
  "event": {
    "token": "TOKEN",
    "siteKey": "6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q",
    "expectedAction": "SUBMIT_EMAIL"
  }
}

  curl -X POST \
    -H "Content-Type: application/json; charset=utf-8" \
    -d @request.json \
    "https://recaptchaenterprise.googleapis.com/v1/projects/PROJECT_ID/assessments?key=API_KEY"

 **/
