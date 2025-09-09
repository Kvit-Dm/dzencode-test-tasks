console.log('test text')

import admin from "firebase-admin";
import key from "./serviceAccountKey.json" with {type: "json"};
import products from "./json.json" with {type: "json"};

console.log('products', products);

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(admin.credential.cert(key)),
    })
    ;
}
const db = admin.firestore();

function chooseId(p) {
    if (p.id) return String(p.id);
    return db.collection("products").doc().id;
}

function normalizeProduct(p) {
    const copy = {...p};
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
            batch.set(ref, normalizeProduct(product), {merge: true});
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
