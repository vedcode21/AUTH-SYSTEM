module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('/users/login');
    },
    ensureRole: function(role) {
      return function(req, res, next) {
        if (req.isAuthenticated() && req.user.role === role) {
          return next();
        }
        req.flash('error_msg', 'You do not have permission to view that resource');
        res.redirect('/');
      };
    }
  };
  