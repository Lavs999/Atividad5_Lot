var particle = new Particle();
var token;

// Iniciar sesión en Particle
particle.login({username: 'lvirgen7@ucol.mx', password: '1Ferrero991*'}).then(
  function(data) {
     token = data.body.access_token;
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);

// Manejar el cambio de estado del interruptor
document.getElementById('theme').addEventListener('change', function() {
    var ledState = this.checked ? '1' : '0'; // '1' para encender el LED, '0' para apagarlo
    particle.callFunction({
        deviceId: '360025001547313036303933',
        name: 'led',
        argument: ledState,
        auth: token
    }).then(
        function(data) {
            console.log('Function called successfully:', data);
        },
        function(err) {
            console.log('Error calling function:', err);
        }
    );
});
