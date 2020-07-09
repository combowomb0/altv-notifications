import * as alt from 'alt-client';

const notify = {
  isLoaded: false,
  view: null
};

alt.on('connectionComplete', () => {
  notify.view = new alt.WebView('http://resource/client/view/index.html');
  notify.view.on('notify:loaded', () => notify.isLoaded = true);
});

// usage example
alt.on('consoleCommand', (command, ...args) => {
  if (command === 'notify' && notify.isLoaded) {
    const text = args.join(' ');

    notify.view.emit('notify:send', {
      text: text,
      timeout: 5000,
      textColor: '#000000',
      backgroundColor: 'rgba(236,236,255,0.85)',
      lineColor: '#6c7ae0'
    });
  }
});
