const RESPONSE_STATUS = require("../util/res.constant");
const Auth = require("../models/user.model");
const { failedResponse, successResponse } = require("../util/response.helper");
const { sendJwtToken } = require("../config/jwt.helper");

const register = async (req, res) => {
  try {
    let { body } = req;
    let { email, password } = body;
    if(!email) throw new Error("Email is missing");
    if(!password) throw new Error("Password is missing");

    const data = await Auth.findOne({ email }).then((res) => res);
    if (data) {
      throw new Error("A user with this email already exist please login.");
    }
    await Auth.create({ email, password });
    return successResponse(res, "Registered successfully");
  } catch (e) {
    return failedResponse(res, e.toString());
  }
};

const login = async (req, res) => {
  try {
    let { body } = req;
    let { email, password } = body;
    if(!email) throw new Error("Email is missing");
    if(!password) throw new Error("Password is missing");
    const data = await Auth.findOne({ email, password }).lean();
    if (!data) {
      throw new Error("Login failed,Please try with correct email/password");
    }
    if(data.password) delete data.password;
    console.log(data)
    let user = {user:data,userId:data._id.toString()}
    return successResponse(res, {token:sendJwtToken(user),message:'Logged in succesfully'});
  } catch (e) {
    return failedResponse(res, e.toString());
  }
};

const AuthController = { register, login };

module.exports = AuthController;

/*
app.get('/p/:tagId', function(req, res) {
  res.send("tagId is set to " + req.params.tagId);
});

// GET /p/5
// tagId is set to 5


app.get('/p', function(req, res) {
  res.send("tagId is set to " + req.query.tagId);
});

// GET /p?tagId=5
// tagId is set to 5
*/
