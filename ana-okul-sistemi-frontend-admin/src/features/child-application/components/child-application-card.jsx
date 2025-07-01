import React, { useState } from "react";
import { rejectApplicationService } from "../services/reject-application";
import { approvedApplicationService } from "../services/approved-application";

export default function ChildApplicationCard({ application, handleStatus }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRejectClick = () => setShowConfirm(true);

  const handleConfirmReject = async () => {
    // onReject(application._id);
    setShowConfirm(false);
    const result = await rejectApplicationService(
      { ...application, status: "rejected" },
      application._id
    );
    handleStatus("rejected");
  };
  const handleApprovedApplication = async () => {
    const result = await approvedApplicationService(
      { ...application, status: "approved" },
      application._id
    );
    handleStatus("approved");
  };

  return (
    <>
      <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-blue-800">
              {application.childFirstName} {application.childSurName}
              <span className="ml-2 text-sm font-normal text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {application.gender}
              </span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              #{application._id.slice(-6)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <InfoItem
              icon="🎂"
              label="Doğum Tarihi"
              value={application.birthDate}
            />
            <InfoItem
              icon="👨‍👩‍👧‍👦"
              label="Anne Adı"
              value={application.motherName}
            />
            <InfoItem
              icon="👨‍👩‍👧‍👦"
              label="Baba Adı"
              value={application.fatherName}
            />
          </div>
          <div className="space-y-3">
            <InfoItem icon="🔢" label="Yaş" value={application.age} />
            <InfoItem
              icon="✉️"
              label="E-Posta"
              value={application.parentEmail}
            />
            <InfoItem
              icon="📱"
              label="Telefon"
              value={application.parentPhone}
            />
          </div>
        </div>

        <div className="mb-4">
          <InfoItem
            icon="📍"
            label="Adres"
            value={application.address}
            fullWidth
          />
        </div>

        <div className="flex gap-3 justify-end pt-4">
          <button
            onClick={handleApprovedApplication}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-md transition-all duration-300 transform hover:scale-[1.03]"
          >
            <CheckIcon />
            Kabul Et
          </button>
          <button
            onClick={handleRejectClick}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-md transition-all duration-300 transform hover:scale-[1.03]"
          >
            <XIcon />
            Reddet
          </button>
        </div>
      </div>

      {/* Onay popup modalı */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md border border-red-100 animate-fade-in">
            <div className="text-center mb-5">
              <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <ExclamationIcon className="text-red-600 w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-red-700 mb-2">
                Onay Gerekli
              </h2>
              <p className="text-gray-600">
                Bu başvuruyu reddetmek istediğinize emin misiniz? Bu işlem geri
                alınamaz.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors duration-300 flex-1"
              >
                İptal
              </button>
              <button
                onClick={handleConfirmReject}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-medium shadow-md transition-all duration-300 flex-1"
              >
                Evet, Reddet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper component for info items
const InfoItem = ({ icon, label, value, fullWidth }) => (
  <div className={`flex ${fullWidth ? "md:col-span-2" : ""}`}>
    <span className="w-8 text-lg mr-2 text-blue-600">{icon}</span>
    <div>
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="font-medium text-gray-800 break-words">{value}</p>
    </div>
  </div>
);

// Icons (in real app, use from an icon library)
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ExclamationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
