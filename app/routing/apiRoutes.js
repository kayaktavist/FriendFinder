var profiles = require("../data/friends");

module.exports = function (app) {

  app.post("/api/friends", function (req, res) {

    profiles.push(req.body);
    console.log(profiles);
    
    var totalArry = []
    for (let i = 0; i < profiles.length-1; i++) {
      const scoreNum = profiles[i].scores;
      const newScore = req.body.scores;

      console.log(scoreNum);
      console.log(newScore);
      var total = 0;
      for (let i = 0; i < scoreNum.length; i++) {
        var diff = scoreNum[i]-newScore[i];
        var value = Math.abs(diff);

        total += value;
        
      }
      totalArry.push(total);
      console.log(total);
      
    }
    console.log(totalArry);

    var iMV = totalArry.indexOf(Math.min.apply(Math, totalArry))
    var match = profiles[iMV];
    res.json(match);

    console.log(match);
    console.log(iMV)
    
  });


  app.get("/api/friends", function (req, res) {
    res.json(profiles);
  });
};
