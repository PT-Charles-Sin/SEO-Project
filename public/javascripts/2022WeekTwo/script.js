import{initializeApp}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{doc,setDoc,collection,getFirestore}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";const firebaseConfig={apiKey:"AIzaSyAUyUXit_cf7HTxTJAtZPt1ywUIjhdbb-c",authDomain:"eugene-fingerprint.firebaseapp.com",projectId:"eugene-fingerprint",storageBucket:"eugene-fingerprint.appspot.com",messagingSenderId:"471916759323",appId:"1:471916759323:web:5ac4337f3e3c803fa9abbe",measurementId:"G-491BP86Y6C"},app=initializeApp(firebaseConfig),firestore=getFirestore(app);async function getVisitorData(){return(await FingerprintJS.load({debug:!0})).get()}function getLocation(e){return fetch(""+e).then(e=>e.json()).then(e=>JSON.stringify(e.data))}async function startPlayground(){try{var t=(await getVisitorData())["visitorId"],i=(i=new URL(window.location.href)).hostname;let e=collection(firestore,"prd-user-log");(i.startsWith("127")||i.startsWith("localhost"))&&(e=collection(firestore,"dev-user-log"));var o=doc(e,`${t}@${(new Date).getTime()}@`+Math.floor(100*Math.random())),a=await getLocation("https://eugene-fcm.vercel.app/geolocation");await setDoc(o,{fingerprintID:""+t,createAt:new Date,website:window.location.href,location:""+a})}catch(e){i=collection(firestore,"error-log"),o=doc(i,(new Date).getTime()+"@"+Math.floor(100*Math.random()));await setDoc(o,{error:""+JSON.stringify(e),createAt:new Date,website:window.location.href})}}startPlayground();