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



import admin from "firebase-admin";
import key from "../../serviceAccountKey.json";
import products from "../../../_data/csvjson.json";

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(key as admin.ServiceAccount),
    });
}
const db = admin.firestore();

function chooseId(p: Record<string, any>) {
    if (p.id) return String(p.id);
    return db.collection("products").doc().id;
}

function normalizeProduct(p: Record<string, any>) {
    const copy = { ...p };
    copy.price_USD = copy.price_USD === "" ? null : Number(copy.price_USD);
    copy.price_UAH = copy.price_UAH === "" ? null : Number(copy.price_UAH);
    if (copy.guarantee_start) copy.guarantee_start = new Date(copy.guarantee_start);
    if (copy.guarantee_end) copy.guarantee_end = new Date(copy.guarantee_end);
    if (copy.date_pablished) copy.date_pablished = new Date(copy.date_pablished);
    return copy;
}

async function uploadProducts() {
    let total = 0;
    const chunkSize = 500;

    for (let i = 0; i < products.length; i += chunkSize) {
        const batch = db.batch();
        const group = products.slice(i, i + chunkSize);
        for (const product of group) {
            const id = chooseId(product);
            const ref = db.collection("products").doc(id);
            batch.set(ref, normalizeProduct(product), { merge: true });
        }
        await batch.commit();
        total += group.length;
        console.log(`Committed ${group.length} (running total: ${total})`);
    }

    console.log(`✅ Done. Uploaded/merged ${total} products.`);
}

uploadProducts()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
