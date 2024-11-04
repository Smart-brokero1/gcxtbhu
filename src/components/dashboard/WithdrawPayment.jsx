import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const WithdrawalPayment = ({
  setProfileState,
  withdrawData,

  currentUser,
}) => {
  const [copystate, setCopystate] = useState("Copy");

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "withdrawals");

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
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

const handleTransacConfirmation = () => {
  addDoc(colRef, {
    ...withdrawData,
    date: new Date().toISOString(),
    widthrawalFee: `${Number(withdrawData?.amount / 10 )} €`,
    idnum: currentUser?.idnum,
  });
  setProfileState("Withdrawals");
};

return (
  <div className="paymentSect">
    <h2>Confirm Payment</h2>
    <div className="mainPaymentSect">
      <h3>
        Send exactly{" "}
        <span>
          {`${Number(withdrawData?.amount / 10 )} €`}
        </span>{" "}
        to
      </h3>
      <p>
        bc1q4d5rfgeuq0su78agvermq3fpqtxjczlzhnttty
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
      <strong>I you choose to withdraw using Bank Transfer,
      You contact the PROFIT/ROI department and continue your transaction there, thank you</strong>
      </p>
      <button
        className="financeBtn"
        onClick={() => {
          window.open("https://wa.me/yourFinanceDeptNumber", "_blank");
        }}
      >
        Profit/ROI Dept
      </button>
      <button type="button" onClick={handleTransacConfirmation}>
        Confirm Transaction
      </button>
  </div>
);

};

export default WithdrawalPayment;
