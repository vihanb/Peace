// JavaScript source code
const brain = require("brain.js");

var net = new brain.NeuralNetwork();
var avg = (summary + aggression + sarcasm)/3
var data = [{input: {summary: 1.0, aggression: 1.0, sarcasm: 1.0}, output: {output: 1.0}},
{input: {summary: 1.0, aggression: 1.0, sarcasm: 1.0}, output: {output: avg}},
{input: {summary: 0.8, aggression: 0.75, sarcasm: 0.58}, output: {output: avg}},
{input: {summary: 0.4, aggression: 0.3, sarcasm: 0.1}, output: {output: avg}},
{input: {summary: 0.7, aggression: 0.1, sarcasm: 0.9}, output: {output: avg}},
{input: {summary: 0.1, aggression: 0.9, sarcasm: 0.5} output: {output: avg}},
{input: {summary: 0.9, aggression: 0.1, sarcasm: 0.7}, output: {output: avg}},
{input: {summary: 0.5, aggression: 0.5, sarcasm: 0.5}, output: {output: avg}},
{input: {summary: 0.7, aggression: 0.1, sarcasm: 0.4}, output: {output: avg}},

]

net.train(data, {log: true});

console.log(net.run({summary: 0.6, aggression: 0.4, sarcasm: 1.0}))
