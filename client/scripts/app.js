// YOUR CODE HERE:
// var app = {
//   server: "https://api.parse.com/1/classes/chatterbox",
//   init: function() {},
//   send: function(message) {
//     $.ajax({
//       // always use this url
//       url: 'https://api.parse.com/1/classes/chatterbox',
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: function (data) {
//         console.log('chatterbox: Message sent');
//       },
//       error: function (data) {
//         // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//         console.error('chatterbox: Failed to send message');
//       }
//     });
//   },
//   fetch: function(){
//     $.ajax({
//       url: app.server,
//       type: 'GET',
//       dataType: 'application/json',
//       success: function(data){
//         console.log('chatterbox: message received');
//       },
//       error: function(data){
//         console.error('chatterbox: failed to receive message');
//       }
//     });
//   },
//   clearMessages: function() {
//     $.ajax({
//       url: app.server,
//       type: 'DELETE',
//       data: message,
//       contentType: 'application/json',
//       success: function(data){
//         console.log('chatterbox: message deleted');
//       },
//       error: function(data){
//         console.error('chatterbox: failed to delete message');
//       }
//     });
//   }
// };

var App = function() { 
  this.server = 'https://api.parse.com/1/classes/chatterbox';
};

App.prototype.init = function() {

};

App.prototype.fetch = function(objectID) {
  $.ajax({
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function(data){
      console.log('chatterbox: message received');
      console.log(data);
      // $('#main').append('<div>' + JSON.stringify(data) + '</div>');
      _.each(data.results, function(message){
        $('#main').append('<div>' + message.username + ': ' + message.text +'. In room: ' + message.roomname+'</div>');
      });
      //iterate through all results
      //assign to div
      //more readable texts
    },
    error: function(data){
      console.error('chatterbox: failed to receive message');
    },
    // $('#main').append('div')
  });
};

App.prototype.send = function(message) {
  $.ajax({
    // always use this url
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent. Data: ');
      console.log(data);
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

App.prototype.clearMessages = function() {

};

var app = new App();

app.send({"username":1337,"text":"Jack Peterson","room": "asd"});
app.fetch('69AdwZU98l');