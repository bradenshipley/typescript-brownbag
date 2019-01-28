"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
/**
 * users is an array of user information from your database.
 * Create a new array called greetings that is the result
 * of mapping over users and returning a string with
 * the user's first name and the number of
 * unread messages they have. If they have 0 unread messages,
 * only return a string saying hi and their first name.
 *
 * Ex. ["Hi Jonathan! You have 3 unread messages.",
 *      "Hi James! You have 837 unread messages.",
 *      "Hi Tim!",
 *      "Hi Logan! You have 1 unread message.",
 *      "Hi Garrett! You have 834672 unread messages."]
 *
 * Errors do not keep TS from creating a build file.
 *
 *
 *
 *
 */
const makeGreeting = (user) => {
    `Hi ${user.first_name}! You have ${user.messages.unread} unread messages!`;
};
const greetings = users_1.users.map(makeGreeting);
