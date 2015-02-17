var App = function() { 
  this.server = 'https://api.parse.com/1/classes/chatterbox';
};

App.prototype.init = function() {
  $('#send .submit').on('submit', this.handleSubmit());
  $('.username').on('click', this.addFriend());
};

App.prototype.fetch = function() {
  $.ajax({
    url: this.server + '?order=-updatedAt',
    type: 'GET',
    //order: 'updatedAt',
    contentType: 'application/json',
    success: function(data){
      console.log('chatterbox: message received');
      console.log(data);
      _.each(data.results, function(message){
        $('#main').append('<div><p>' + message.username + ': ' + message.text +'. In room: ' + message.roomname+'</p><p>' + message.createdAt + '</p></div>');
      });
      //iterate through all results
      //assign to div
      //more readable texts
    },
    error: function(data){
      console.error('chatterbox: failed to receive message');
    },
  });
};

App.prototype.send = function(message) {
  $.ajax({
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
  $('blink').remove();
};

App.prototype.addMessage = function(message) {
  $('#chats').append('<div><p><a class="username">' + message.username + '</a>: ' + message.text +'. In room: ' + message.roomname+'</p><p>' + message.createdAt + '</p></div>');
};

App.prototype.addRoom = function(room) {
  $('#roomSelect').append('<'+ room + '>' + '</' + room + '>');
};

App.prototype.addFriend = function(){
  
};

App.prototype.handleSubmit = function(){

};

var app = new App();

app.send({"username":'Jack and John',"text":"yo","roomname": "asd"});
app.fetch();