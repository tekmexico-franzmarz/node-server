"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var user_1 = require("../schemas/user");
//use q promises
global.Promise = require("q").Promise;
//import mongoose
var mongoose = require("mongoose");
//use q library for mongoose promise
mongoose.Promise = global.Promise;
//connect to mongoose and create model
var MONGODB_CONNECTION = "mongodb://localhost:27017/heroes";
var connection = mongoose.createConnection(MONGODB_CONNECTION);
var User = connection.model("User", user_1.userSchema);
var chai = require("chai");
chai.should();
describe("User", function () {
    describe("create()", function () {
        it("should create a new User", function () {
            //user object
            var user = {
                email: "foo@bar.com",
                firstName: "Brian",
                lastName: "Love"
            };
            //create user and return promise
            return new User(user).save().then(function (result) {
                //verify _id property exists
                result._id.should.exist;
                //verify email
                result.email.should.equal(user.email);
                //verify firstName
                result.firstName.should.equal(user.firstName);
                //verify lastName
                result.lastName.should.equal(user.lastName);
            });
        });
    });
});
/*import { suite, test } from "mocha-typescript";
import { IUser } from "../interfaces/user";
import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";
import mongoose = require("mongoose");

@suite
class UserTest {

    //store test data
    private data: IUser;

    //the User model
    public static User: mongoose.Model<IUserModel>;

    public static before() {
        //use q promises
        global.Promise = require("q").Promise;

        //use q library for mongoose promise
        mongoose.Promise = global.Promise;

        //connect to mongoose and create model
        const MONGODB_CONNECTION: string = "mongodb://localhost:27017/heroes";
        let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
        UserTest.User = connection.model<IUserModel>("User", userSchema);

        //require chai and use should() assertions
        let chai = require("chai");
        chai.should();
    }

    constructor() {
        this.data = {
            email: "foo@bar.com",
            firstName: "Brian",
            lastName: "Love"
        };
    }

    @test("should create a new User")
    public create() {
        //create user and return promise
        return new UserTest.User(this.data).save().then(result => {
            //verify _id property exists
            result._id.should.exist;

            //verify email
            result.email.should.equal(this.data.email);

            //verify firstName
            result.firstName.should.equal(this.data.firstName);

            //verify lastName
            result.lastName.should.equal(this.data.lastName);
        });
    }
}*/ 
