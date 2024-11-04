import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const PaymentSect = ({ setProfileState, investData }) => {
  const [copystate, setCopystate] = useState("Copy");

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRef = collection(db, "investments");

  const removeErr = () => {
    setTimeout(() => {
      setCopystate("Copy");
    }, 2500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopystate("Copied");
        removeErr();
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  const handleTransacConfirmation = () => {
    addDoc(colRef, {
      ...investData,
      bonus:
        investData.plan === "Silver"
          ? investData.capital * 5
          : investData.plan === "Gold"
          ? investData.capital * 8
          : investData.capital * 10,
    });
    setProfileState("Investments");
  };

  return (
    <div className="paymentSect">
      <h2>Confirm Payment</h2>
      <div className="mainPaymentSect">
        <h3>
          Send exactly <span>€{investData.capital.toLocaleString()}</span> to
        </h3>
        <p>
          Bitcoin address: bc1q4d5rfgeuq0su78agvermq3fpqtxjczlzhnttty{" "}
          <span
            onClick={() => {
              copyToClipboard("bc1q4d5rfgeuq0su78agvermq3fpqtxjczlzhnttty");
            }}
          >
            {copystate} <i className="icofont-ui-copy"></i>
          </span>
        </p>
      </div>
      <p>
        Confirm the transaction after the amount has been transferred while we
        complete the process. This may take a few minutes to several hours.
      </p>
      <p>
        If you have any issues or don’t understand how to transfer using
        cryptocurrency, alternative options like bank transfer are available.
        Contact the finance department to assist you.
      </p>
      <button
        className="financeBtn"
        onClick={() => {
          window.open("https://wa.me/yourFinanceDeptNumber", "_blank");
        }}
      >
        Finance Dept
      </button>
      <button type="button" onClick={handleTransacConfirmation}>
        Confirm Transaction
      </button>
    </div>
  );
};

export default PaymentSect;
