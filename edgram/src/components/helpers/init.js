import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC8XKR-K_BvoWsH22dyNyFh5ilVUAQk8Z8",
  authDomain: "proyectos-edteam.firebaseapp.com",
  databaseURL: "https://proyectos-edteam.firebaseio.com",
  projectId: "proyectos-edteam",
  storageBucket: "proyectos-edteam.appspot.com",
  messagingSenderId: "543182255429"
},
  d = document,
  w = window,
  n = navigator,
  c = console.log

export const init = () => firebase.initializeApp(config)

export const pwa = () => {
  //Registro de SW
  if ('serviceWorker' in n) {
    n.serviceWorker.register('./sw.js')
      .then(registration => {
        c(registration)
        c(
          'Service Worker registrado con éxito',
          registration.scope
        )
      })
      .catch(err => c(`Registro de Service Worker fallido`, err))
  }

  //Activar Notificaciones
  if (w.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(status => {
      console.log(status)
      let n = new Notification('EDgram', {
        body: 'Bienvenid@ :)',
        icon: './icon_192x192.png'
      })
    })
  }

  //Activar Sincronización de Fondo
  if ('serviceWorker' in n && 'SyncManager' in w) {
    function registerBGSync() {
      n.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('github')
            .then(() => c('Sincronización de Fondo Registrada'))
            .catch(err => c('Fallo la Sincronización de Fondo', err))
        })
    }

    registerBGSync()
  }
}

export const isOnLine = () => {
  //Detección del Estado de la Conexión
  const header = d.querySelector('.Header'),
    footer = d.querySelector('.Footer'),
    metaTagTheme = d.querySelector('meta[name=theme-color]')

  function networkStatus(e) {
    c(e, e.type)

    if (n.onLine) {
      metaTagTheme.setAttribute('content', '#F7DF1E')
      header.classList.remove('u-offline')
      footer.classList.remove('u-offline')
      alert('Conexión Recuperada :)')
    } else {
      metaTagTheme.setAttribute('content', '#666')
      header.classList.add('u-offline')
      footer.classList.add('u-offline')
      alert('Conexión Perdida :(')
    }
  }

  w.addEventListener('online', networkStatus)
  w.addEventListener('offline', networkStatus)
}

export const ga = () => {
  const _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
  _gaq.push(['_setDomainName', 'jonmircha.github.io/edgram']);
  _gaq.push(['_trackPageview']);
  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}
