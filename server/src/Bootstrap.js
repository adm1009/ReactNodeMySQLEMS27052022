module.exports = async () => {
  const Users = require("./models/Users");

  const errHandler = (err) => {
    console.error("Error:", err);
  };

  const user = await Users.create({
    username: "Abhi",
    password: "12345",
    question: "what is your Town name?",
    answer: "Kallam",
  }).catch(errHandler);

  const users=await Users.findAll({where:{username:"Abhi"}}).catch(errHandler);

  console.log("abhi",users);
};
