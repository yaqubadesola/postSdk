"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdkdemo_1 = __importDefault(require("@yaqubadesola/sdkdemo"));
const client = new sdkdemo_1.default({
    apiKey: "123",
});
client.getPosts().then((p) => console.log("posts = ", p));
