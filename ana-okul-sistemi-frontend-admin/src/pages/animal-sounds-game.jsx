import React, { useState, useEffect, useRef } from "react";

// Ses dosyalarını import ediyoruz
import catMeow from "../features/game/sounds/meow-2-367492.mp3";
import dogBarking from "../features/game/sounds/dog-bark-type-04-293288.mp3";
import lionRoar from "../features/game/sounds/lion-roaring-sound-effect-no-copyright-352860.mp3";
import tigerRoar from "../features/game/sounds/weretiger-yarik-roar-5-321201.mp3";
import birdChirping from "../features/game/sounds/cardinal-37075.mp3";
import snakeHissing from "../features/game/sounds/hissing-sound-41717.mp3";
import bearGrowl from "../features/game/sounds/bear-191995.mp3";
import elephantTrumpet from "./../features/game/sounds/the-loud-roar-of-an-elephant.mp3";
import wolfHowling from "../features/game/sounds/wolf-howl-2-359870.mp3";
import monkeySound from "../features/game/sounds/monkey-128368.mp3";
import kaplanImg from "../features/game/img/kaplan.jpeg";
import yilanImg from "../features/game/img/yilan.jpg";
import kurtImg from "../features/game/img/kurt.jpeg";
const AnimalSoundsGame = () => {
  const [animals] = useState([
    {
      name: "kedi",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=300&fit=crop",
      sound: catMeow,
    },
    {
      name: "köpek",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
      sound: dogBarking,
    },
    {
      name: "aslan",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300&h=300&fit=crop",
      sound: lionRoar,
    },
    {
      name: "kaplan",
      image: kaplanImg,
      sound: tigerRoar,
    },
    {
      name: "kuş",
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=300&fit=crop",
      sound: birdChirping,
    },
    {
      name: "yılan",
      image: yilanImg,
      sound: snakeHissing,
    },
    {
      name: "ayı",
      image:
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=300&fit=crop",
      sound: bearGrowl,
    },
    {
      name: "fil",
      image:
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300&h=300&fit=crop",
      sound: elephantTrumpet,
    },
    {
      name: "kurt",
      image: kurtImg,
      sound: wolfHowling,
    },
    {
      name: "maymun",
      image:
        "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=300&h=300&fit=crop",
      sound: monkeySound,
    },
  ]);

  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showPermissionScreen, setShowPermissionScreen] = useState(true);
  const [audioPermissionGranted, setAudioPermissionGranted] = useState(false);

  // Ses oynatma için ref
  const audioRef = useRef(null);

  // Audio elementini oluştur
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // İzin alma fonksiyonu
  const requestAudioPermission = () => {
    // Chrome uyumlu boş ses dosyası kullanma
    const testAudio = new Audio(
      "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
    );
    testAudio.volume = 0;

    testAudio
      .play()
      .then(() => {
        setAudioPermissionGranted(true);
        setShowPermissionScreen(false);
        testAudio.pause();
      })
      .catch((error) => {
        console.error("Ses izni alınamadı:", error);
        setFeedback(
          "🔇 Tarayıcı izni gerekli! Lütfen sayfada herhangi bir yere tıklayın"
        );
      });
  };

  const handleCardClick = (animal) => {
    if (!audioPermissionGranted) {
      setFeedback(
        "Önce ses iznini vermelisiniz! Sayfada herhangi bir yere tıklayın"
      );
      return;
    }

    if (audioRef.current) {
      try {
        // Önceki sesi durdur
        audioRef.current.pause();
        audioRef.current.currentTime = 0;

        // Yeni sesi yükle ve oynat
        audioRef.current.src = animal.sound;
        audioRef.current.play().catch((error) => {
          console.error("Ses oynatma hatası:", error);
          setFeedback("Ses oynatma izni gerekli! Lütfen izin verin");
        });
      } catch (error) {
        console.error("Ses oynatma hatası:", error);
        setFeedback("Ses oynatma hatası!");
      }
    }

    setCurrentAnimal(animal);
    setIsGameStarted(true);
    setUserInput("");
  };

  const replaySound = () => {
    if (audioRef.current && currentAnimal) {
      try {
        // Sadece mevcut sesi baştan oynat
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.error("Ses tekrar oynatma hatası:", error);
          setFeedback("Ses oynatma izni gerekli!");
        });
      } catch (error) {
        console.error("Ses tekrar oynatma hatası:", error);
        setFeedback("Ses oynatma hatası!");
      }
    } else {
      setFeedback("Önce bir hayvan seçmelisiniz!");
    }
  };

  const handleGuess = () => {
    if (!currentAnimal || !userInput.trim()) return;

    const userGuess = userInput.toLowerCase().trim();
    const correctAnswer = currentAnimal.name.toLowerCase();

    setAttempts((prev) => prev + 1);

    if (userGuess === correctAnswer) {
      setFeedback("Doğru!");
      setScore((prev) => prev + 1);
    } else {
      setFeedback("Yanlış!");
    }

    setTimeout(() => {
      setFeedback("");
      setUserInput("");
      setIsGameStarted(false);
      setCurrentAnimal(null);
    }, 3000);
  };

  const resetGame = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentAnimal(null);
    setUserInput("");
    setFeedback("");
    setIsGameStarted(false);
    setScore(0);
    setAttempts(0);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };

  // Sayfa tıklamasıyla izin alma
  const handlePageClick = () => {
    setAudioPermissionGranted(true);
    setShowPermissionScreen(false);
    setFeedback("");
  };

  if (showPermissionScreen) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4 "
        onClick={handlePageClick}
      >
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-6 animate-bounce">🔊</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Ses İzni Gerekli
          </h1>
          <p className="text-gray-600 mb-6">
            Oyun seslerini duyabilmek için tarayıcınızın ses oynatma iznini
            vermeniz gerekiyor. Lütfen aşağıdaki butona tıklayarak veya sayfada
            herhangi bir yere tıklayarak izin verin.
          </p>

          <button
            onClick={requestAudioPermission}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 mb-4"
          >
            Ses İzni Ver
          </button>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded animate-pulse">
            <p className="flex items-center justify-center">
              <span className="mr-2">ℹ️</span>
              Sayfada herhangi bir yere tıklayarak da izin verebilirsiniz
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Not: Bazı tarayıcılar otomatik olarak ses oynatmayı engeller. Bu
            butona tıkladığınızda izin vermeniz istenecektir.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-fade-in">
            Hayvan Seslerini Tahmin Et
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Hayvan kartlarına tıklayarak seslerini dinle ve doğru hayvanı tahmin
            et!
          </p>

          {/* Score Board */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-2 border-green-200">
              <span className="text-sm text-gray-600">Doğru:</span>
              <span className="ml-2 text-xl font-bold text-green-600">
                {score}
              </span>
            </div>
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-2 border-blue-200">
              <span className="text-sm text-gray-600">Toplam:</span>
              <span className="ml-2 text-xl font-bold text-blue-600">
                {attempts}
              </span>
            </div>
            <button
              onClick={resetGame}
              className="px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              🔄 Sıfırla
            </button>
          </div>
        </div>

        {/* Ses Uyarısı */}
        {feedback && feedback.includes("🔇") && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4 rounded animate-pulse text-center max-w-2xl mx-auto">
            <p>{feedback}</p>
          </div>
        )}

        {/* Game Status */}
        {isGameStarted && currentAnimal && (
          <div className="text-center mb-6 p-4 bg-white rounded-lg shadow-md border-2 border-yellow-200 animate-fade-in">
            <p className="text-lg text-gray-700 mb-2">
              🔊 Ses dinleniyor! Tahmin etmeye hazır mısın?
            </p>
            <button
              onClick={replaySound}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sesi Tekrar Oynat
            </button>
          </div>
        )}

        {/* Animal Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {animals.map((animal) => (
            <div
              key={animal.name}
              className={`
                cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                bg-white rounded-xl p-4 flex flex-col items-center text-center
                border-2 hover:border-blue-300 shadow-md
                ${
                  currentAnimal?.name === animal.name
                    ? "border-yellow-400 bg-yellow-50 shadow-lg ring-2 ring-yellow-300"
                    : "border-gray-200"
                }
                active:scale-95
              `}
              onClick={() => handleCardClick(animal)}
            >
              {/* Animal Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop";
                  }}
                />
              </div>

              {/* Active Indicator */}
              {currentAnimal?.name === animal.name && (
                <div className="mt-2 flex items-center text-yellow-600 animate-pulse">
                  <span className="text-sm font-medium">Seçili</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input and Guess Section */}
        {isGameStarted && (
          <div className="text-center animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-blue-100">
              <label
                htmlFor="guess-input"
                className="block text-lg font-semibold text-gray-700 mb-3"
              >
                Hangi hayvanın sesi bu?
              </label>
              <input
                id="guess-input"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hayvan adını yazın..."
                className="w-full h-10 px-3 py-2 text-center text-lg border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                autoFocus
              />
              <button
                onClick={handleGuess}
                disabled={!userInput.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 text-lg shadow-lg rounded-md transition-all duration-200"
              >
                Tahmin Et
              </button>
            </div>
          </div>
        )}

        {/* Feedback */}
        {feedback && !feedback.includes("🔇") && currentAnimal && (
          <div className="text-center mt-6 animate-fade-in">
            <div
              className={`inline-block px-6 py-4 rounded-lg shadow-lg text-2xl font-bold ${
                feedback.includes("Doğru")
                  ? "bg-green-100 text-green-700 border-2 border-green-300"
                  : "bg-red-100 text-red-700 border-2 border-red-300"
              }`}
            >
              {feedback}
            </div>

            <div className="mt-6 bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Doğru Hayvan:
              </h3>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 mb-4">
                  <img
                    src={currentAnimal.image}
                    alt={currentAnimal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {currentAnimal.name}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isGameStarted && !showPermissionScreen && (
          <div className="text-center mt-8 animate-fade-in">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-2 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Nasıl Oynanır?
              </h3>
              <div className="text-left space-y-2 text-gray-600">
                <p>1. Herhangi bir hayvan kartına tıklayarak sesini dinle</p>
                <p>2. Hangi hayvanın sesi olduğunu tahmin et</p>
                <p>3. Doğru hayvan adını yaz ve "Tahmin Et" butonuna bas</p>
                <p>4. Skorunu takip et ve tüm hayvanları tanımaya çalış!</p>
                <p className="mt-4 text-red-500 font-medium">
                  Sesleri duyabilmek için tarayıcının otomatik oynatma iznini
                  vermelisin!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalSoundsGame;
