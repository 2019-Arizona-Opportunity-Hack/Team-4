import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

import * as sgMail from "@sendgrid/mail";
// bring in our function config variables
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
// register api key with sendgrid
sgMail.setApiKey(API_KEY);

// function that runs when a new victim is added to the db
export const newVictim = functions.firestore
  .document("victims/{victimId}/")
  .onCreate(async (change, context) => {
    // gets the victim from the db
    const victimSnap = await db
      .collection("victim")
      .doc(context.params.victimId)
      .get();
    // parse victim
    const victim = victimSnap.data() || {};

    const providers: string[] = victim.providers;

    const providerEmails: string[] = [];
    // const providerNames: string[] = [];

    // get providers emails
    providers.forEach(providerId => {
      db.collection("providers")
        .doc(providerId)
        .get()
        .then(providerSnap => {
          const provider = providerSnap.data() || {};
          providerEmails.push(provider.email);
          // providerNames.push(provider.name);
        });
    });
    // create mail template
    const msg = {
      to: [...providerEmails],
      from: "help@dvcontrolaltdelete.org",
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: "Someone is in need of help!"
      }
    };
    // send mail
    return sgMail.send(msg);
  });
