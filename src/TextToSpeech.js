// var googleTTS = require('google-tts-api');
// var Player = require('player');

// class TextToSpeech {
//   function() {
//     googleTTS('你好', 'zh-cn', 1) // speed normal = 1 (default), slow = 0.24
//       .then(function(url) {
//         console.log(url); // https://translate.google.com/translate_tts?...
//         var player = new Player(url);
//         player.play();
//         player.on('error', function(err) {
//           // when error occurs
//           player.stop();
//         });
//       })
//       .catch(function(err) {
//         console.log(err.stack);
//       });
//   }
// }
// export default TextToSpeech;
