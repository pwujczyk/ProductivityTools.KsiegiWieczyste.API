(function (homeController) {
    homeController.init = function (app) {
        app.get("/", function (req, res) {
            res.send("<html>oawel</html>");
        });
    };
})(module.exports)