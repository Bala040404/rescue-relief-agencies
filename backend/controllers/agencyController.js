const { Agency } = require("../models/agency");
const express = require("express");
const app = express();

const passport = require("passport");
const passportlocal = require("passport-local").Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportlocal(Agency.authenticate()));

passport.serializeUser(Agency.serializeUser());
passport.deserializeUser(Agency.deserializeUser());

async function registerAgency(req, res) {
  const { email, username, password, location, contact, expertise } = req.body;
  const newAgency = new Agency({
    username: username,
    email: email,
    location: location,
    contact: contact,
    expertise: expertise,
  });
  await Agency.register(newAgency, password);
  res.status(200).json({ user: newAgency });
}
async function loginAgency(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ mes: "Login failed" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      console.log(req.user); // You can access the authenticated user here.
      return res.status(200).json({ user: req.user });
    });
  })(req, res, next);
}

async function logoutAgency(req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).json({ mes: "Logout failed" });
    }
    res.status(200).json({ mes: "agency logged out" });
  });
}

async function getAgency(req, res) {
  const allAgencies = await Agency.find();
  res.status(200).json(allAgencies);
}

async function getAgencyById(req, res) {
  const { id } = req.params;
  const agency = await Agency.findById({ _id: id });
  res.status(200).json({ agency: agency })


}

// async function addAgency(req, res) {
//     const { name, location } = req.body
//     await Agency.create({ name, location })

//     res.status(200).json({ mes: "agency added to database" })

// }

// async function editAgency(req, res) {
//     const { id, name, location } = req.body

//     await Agency.findByIdAndUpdate(id, { name, location })
//     res.status(200).json({ mes: "updated" });
// }

// async function deleteAgency(req, res) {
//     const { id } = req.body
//     await Agency.findByIdAndDelete(id)
//     res.status(200).json({ mes: "deleted" });
// }

module.exports = { getAgencyById, getAgency, registerAgency, loginAgency, logoutAgency };
