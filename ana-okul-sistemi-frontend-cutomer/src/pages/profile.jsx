import { useEffect, useState } from "react";
import HeaderForPages from "../components/header-for-pages";
import { getParentDataService } from "../services/auth/get-parent-data";
import { removeTokenService } from "../services/auth/remove-token";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/isAuthenticatedSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const profileData = {
  //     name: "firass",
  //     surName: "hossreh",
  //     email: "firass.hus@gmail.com",
  //     number: "05354209309",
  //     address: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
  //               quas. Porro, voluptatem cum adipisci delectus tempore eaque
  //               corrupti reprehenderit vero dolore possimus at modi, fuga
  //               exercitationem neque magnam facere autem.`,
  //     parentType: "father",
  //     child: "firass-child",
  //   };
  const [profilData, setProfilData] = useState({});
  useEffect(() => {
    async function getParentData() {
      const result = await getParentDataService();
      setProfilData(result.data);
    }
    getParentData();
  }, []);
  const handleLogout = async () => {
    await removeTokenService();
    navigate("/");
    dispatch(logout());
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">Profil</h1>
      </HeaderForPages>
      <div className="my-10 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-2xl border-2 border-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-lg">
            <div>
              <p className="text-gray-500 font-medium">Ad</p>
              <p className="font-semibold">{profilData.name}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Soyad</p>
              <p className="font-semibold">{profilData.surName}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">E-mail</p>
              <p className="font-semibold">{profilData.email}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Telefon</p>
              <p className="font-semibold">{profilData.number}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Ebeveyn Tipi</p>
              <p className="font-semibold capitalize">
                {profilData.parentType}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Çocuk</p>
              <p className="font-semibold">{profilData.child}</p>
            </div>

            {/* 🟦 Adres en sonda ve tüm satırı kapsar */}
            <div className="sm:col-span-2">
              <p className="text-gray-500 font-medium">Adres</p>
              <p className="font-semibold capitalize">{profilData.address}</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Çıkış Yap
            </button>
          </div>
        </div>

        {/* Onay Popup */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-red-600 text-center mb-4">
                Emin misiniz?
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Oturumunuzu kapatmak istediğinize emin misiniz?
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
                >
                  İptal
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
                >
                  Evet, Çıkış Yap
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
