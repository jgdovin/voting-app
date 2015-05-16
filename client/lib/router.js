function redirectAfterLogin(path, next) {
  var redirectPath = (Meteor.userId()) ? "/polls" : null;
  next(redirectPath);
}

function requiredLogin(path, next) {
  var redirectPath = (!Meteor.userId())? "/" : null;
  next(redirectPath);
}

Accounts.onLogin(function () {
  FlowRouter.go('polls');
});

FlowRouter.route('/', {
  name: 'home',
  middlewares: [redirectAfterLogin],
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Home', footer: 'footer' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  middlewares: [redirectAfterLogin],
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Login', footer: 'footer' });
  }
});

FlowRouter.route('/polls', {
  name: 'polls',
  middlewares: [requiredLogin],
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Polls', footer: 'footer' });
  }
});

FlowRouter.route('/submit', {
  name: 'submit',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Submit', footer: 'footer' });
  }
});

FlowRouter.route('/polls/:id', {
  name: 'poll',
  middlewares: [requiredLogin],
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Poll', footer: 'footer' });
  }
});
