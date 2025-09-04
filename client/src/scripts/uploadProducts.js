"use strict";
// import admin from "firebase-admin";
// import { readFileSync } from "node:fs";
// import path from "node:path";
//
// // ---- 1) Load JSON manually for Node scripts
// const serviceAccountPath = path.resolve("serviceAccountKey.json");
// const key = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
//
// const productsPath = path.resolve("_data/csvjson.json");
// const products: Array<Record<string, any>> = JSON.parse(readFileSync(productsPath, "utf8"));
//
// // ---- 2) Initialize Firebase Admin
// if (admin.apps.length === 0) {
//     admin.initializeApp({
//         credential: admin.credential.cert(key as admin.ServiceAccount),
//     });
// }
// const db = admin.firestore();
//
// // ---- 3) Helper: choose document ID
// function chooseId(p: Record<string, any>) {
//     if (p.id) return String(p.id);
//     return db.collection("products").doc().id;
// }
//
// // ---- 4) Normalize product data
// function normalizeProduct(p: Record<string, any>) {
//     const copy = { ...p };
//     copy.price_USD = copy.price_USD === "" ? null : Number(copy.price_USD);
//     copy.price_UAH = copy.price_UAH === "" ? null : Number(copy.price_UAH);
//     if (copy.guarantee_start) copy.guarantee_start = new Date(copy.guarantee_start);
//     if (copy.guarantee_end) copy.guarantee_end = new Date(copy.guarantee_end);
//     if (copy.date_pablished) copy.date_pablished = new Date(copy.date_pablished);
//     return copy;
// }
//
// // ---- 5) Upload in batches (500 max per batch)
// async function uploadProducts() {
//     if (!Array.isArray(products) || products.length === 0) {
//         console.log("Nothing to upload. Check your JSON file.");
//         return;
//     }
//
//     let total = 0;
//     const chunkSize = 500;
//
//     for (let i = 0; i < products.length; i += chunkSize) {
//         const batch = db.batch();
//         const group = products.slice(i, i + chunkSize);
//         for (const product of group) {
//             const id = chooseId(product);
//             const ref = db.collection("products").doc(id);
//             batch.set(ref, normalizeProduct(product), { merge: true });
//         }
//         await batch.commit();
//         total += group.length;
//         console.log(`Committed ${group.length} products (running total: ${total})`);
//     }
//
//     console.log(`✅ Done. Uploaded/merged ${total} products.`);
// }
//
// // ---- 6) Run script
// uploadProducts()
//     .then(() => process.exit(0))
//     .catch((err) => {
//         console.error("❌ Upload failed:", err);
//         process.exit(1);
//     });
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_admin_1 = require("firebase-admin");
var serviceAccountKey_json_1 = require("../../serviceAccountKey.json");
var csvjson_json_1 = require("../../../_data/csvjson.json");
if (firebase_admin_1.default.apps.length === 0) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccountKey_json_1.default),
    });
}
var db = firebase_admin_1.default.firestore();
function chooseId(p) {
    if (p.id)
        return String(p.id);
    return db.collection("products").doc().id;
}
function normalizeProduct(p) {
    var copy = __assign({}, p);
    copy.price_USD = copy.price_USD === "" ? null : Number(copy.price_USD);
    copy.price_UAH = copy.price_UAH === "" ? null : Number(copy.price_UAH);
    if (copy.guarantee_start)
        copy.guarantee_start = new Date(copy.guarantee_start);
    if (copy.guarantee_end)
        copy.guarantee_end = new Date(copy.guarantee_end);
    if (copy.date_pablished)
        copy.date_pablished = new Date(copy.date_pablished);
    return copy;
}
function uploadProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var total, chunkSize, i, batch, group, _i, group_1, product, id, ref;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    total = 0;
                    chunkSize = 500;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < csvjson_json_1.default.length)) return [3 /*break*/, 4];
                    batch = db.batch();
                    group = csvjson_json_1.default.slice(i, i + chunkSize);
                    for (_i = 0, group_1 = group; _i < group_1.length; _i++) {
                        product = group_1[_i];
                        id = chooseId(product);
                        ref = db.collection("products").doc(id);
                        batch.set(ref, normalizeProduct(product), { merge: true });
                    }
                    return [4 /*yield*/, batch.commit()];
                case 2:
                    _a.sent();
                    total += group.length;
                    console.log("Committed ".concat(group.length, " (running total: ").concat(total, ")"));
                    _a.label = 3;
                case 3:
                    i += chunkSize;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("\u2705 Done. Uploaded/merged ".concat(total, " products."));
                    return [2 /*return*/];
            }
        });
    });
}
uploadProducts()
    .then(function () { return process.exit(0); })
    .catch(function (err) {
    console.error(err);
    process.exit(1);
});
