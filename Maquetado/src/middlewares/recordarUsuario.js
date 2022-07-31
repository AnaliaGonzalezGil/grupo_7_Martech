function recuerdameMiddleware (req, res, next){
    next();
    
    if(req.cookie.recordame === undefined && req.session.userLogged == undefined) {
    let usersJSON = fs.readFileSync('users.json', { encoding: 'utf-8'});
    let users;
    if (usersJSON == '') {
      users = [];
    } else {
    users = JSON.parse(usersJSON);
    }
    let usuarioALoguearse;
    for (let i =0; i< users.length; i++){
      if (users[i].email == req.cookies.recordame) {
           usuarioALoguearse = users[i];
             break;
           }
        }
          req.session.userLogged = usuarioALoguearse;
      }}

    module.exports = recuerdameMiddleware;