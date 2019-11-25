
module.exports = {
    getHelloFromImport:function(user)
    {
        if (user)
        {
            return 'Hello, from imported js function user = ' + user;
        }
        return 'Hello, from imported js function.';
    }
}
