import React, { useState, useEffect } from "react";

const WORDS = [
  "ASLAN",
  "KAPLAN",
  "ZÜRAFA",
  "MAYMUN",
  "TAVŞAN",
  "GERGEDAN",
  "TİMSAH",
  "PENGUEN",
  "KÖPEK",
  "YARASA",
  "KARTAL",
  "BAYKUŞ",
  "YILAN",
  "AYI",
  "KURT",
  "TİLKİ",
  "ÇAKAL",
  "LEYLEK",
  "ŞAHİN",
  "GÜVERCİN",
  "KIRLANGIÇ",
  "KARGA",
  "SERÇE",
  "DEVE",
  "EŞEK",
  "AT",
  "İNEK",
  "KOYUN",
  "KEÇİ",
  "DOMUZ",
  "KEDİ",
  "FARE",
  "KUNDUZ",
  "SUAYGISI",
  "KOKARCA",
  "KANARYA",
  "PAPAĞAN",
  "LEOPAR",
  "PANTER",
  "AHTAPOT",
];

const TURKISH_LETTERS = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];

const HangmanGame = () => {
  const [kelimeToGuess, setKelimeToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongLetters = guessedLetters.filter(
    (letter) => !kelimeToGuess.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    kelimeToGuess.includes(letter)
  );

  const isLoser = wrongLetters.length >= 6;
  const isWinner = kelimeToGuess
    .split("")
    .every((letter) => correctLetters.includes(letter));

  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setKelimeToGuess(randomWord);
    console.log("Seçilen kelime:", randomWord);
  }, []);

  const addGuessedLetter = (letter) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((prev) => [...prev, letter]);
  };

  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setKelimeToGuess(randomWord);
    setGuessedLetters([]);
    console.log("Yeni kelime:", randomWord);
  };

  // Hangman Drawing Component
  const HangmanDrawing = ({ wrongGuessCount }) => {
    const HEAD = (
      <circle
        key="head"
        cx="200"
        cy="70"
        r="20"
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
    );

    const BODY = (
      <line
        key="body"
        x1="200"
        y1="90"
        x2="200"
        y2="170"
        stroke="black"
        strokeWidth="4"
      />
    );

    const RIGHT_ARM = (
      <line
        key="rightArm"
        x1="200"
        y1="120"
        x2="160"
        y2="140"
        stroke="black"
        strokeWidth="4"
      />
    );

    const LEFT_ARM = (
      <line
        key="leftArm"
        x1="200"
        y1="120"
        x2="240"
        y2="140"
        stroke="black"
        strokeWidth="4"
      />
    );

    const RIGHT_LEG = (
      <line
        key="rightLeg"
        x1="200"
        y1="170"
        x2="160"
        y2="210"
        stroke="black"
        strokeWidth="4"
      />
    );

    const LEFT_LEG = (
      <line
        key="leftLeg"
        x1="200"
        y1="170"
        x2="240"
        y2="210"
        stroke="black"
        strokeWidth="4"
      />
    );

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

    return (
      <div
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <svg
          width="300"
          height="250"
          style={{ margin: "0 auto", display: "block" }}
        >
          {/* Darağacı */}
          <line
            x1="20"
            y1="230"
            x2="20"
            y2="20"
            stroke="#8B4513"
            strokeWidth="6"
          />
          <line
            x1="20"
            y1="20"
            x2="180"
            y2="20"
            stroke="#8B4513"
            strokeWidth="6"
          />
          <line
            x1="180"
            y1="20"
            x2="180"
            y2="50"
            stroke="#8B4513"
            strokeWidth="4"
          />
          <line
            x1="5"
            y1="230"
            x2="100"
            y2="230"
            stroke="#8B4513"
            strokeWidth="6"
          />

          {/* Çöp adam parçaları */}
          {BODY_PARTS.slice(0, wrongGuessCount)}
        </svg>
      </div>
    );
  };

  // Word Component
  const Word = ({ word, guessedLetters }) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {word.split("").map((letter, index) => (
          <div
            key={index}
            style={{
              width: "48px",
              height: "64px",
              borderBottom: "4px solid #1f2937",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1f2937",
                transition: "all 0.5s",
                opacity: guessedLetters.includes(letter) ? 1 : 0,
                transform: guessedLetters.includes(letter)
                  ? "translateY(0)"
                  : "translateY(-16px)",
              }}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Keyboard Component
  const Keyboard = ({ onGuess, guessedLetters, disabled }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))",
          gap: "8px",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        {TURKISH_LETTERS.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);

          return (
            <button
              key={letter}
              style={{
                height: "48px",
                width: "48px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                transition: "all 0.2s",
                backgroundColor: isGuessed ? "#ef4444" : "#3b82f6",
                color: "white",
                border: "none",
                cursor: isGuessed || disabled ? "not-allowed" : "pointer",
                opacity: disabled && !isGuessed ? 0.5 : 1,
              }}
              onClick={() => onGuess(letter)}
              disabled={isGuessed || disabled}
              onMouseOver={(e) => {
                if (!isGuessed && !disabled) {
                  e.target.style.backgroundColor = "#2563eb";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseOut={(e) => {
                if (!isGuessed && !disabled) {
                  e.target.style.backgroundColor = "#3b82f6";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#007BFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          padding: "32px",
          maxWidth: "1280px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1f2937",
            marginBottom: "32px",
          }}
        >
          Adam Asmaca Oyunu
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 1024 ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <HangmanDrawing wrongGuessCount={wrongLetters.length} />
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Word word={kelimeToGuess} guessedLetters={correctLetters} />
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <Keyboard
            onGuess={addGuessedLetter}
            guessedLetters={guessedLetters}
            disabled={isLoser || isWinner}
          />
        </div>

        {(isWinner || isLoser) && (
          <div
            style={{
              background: "linear-gradient(to right, #f9fafb, #f3f4f6)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
              boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            }}
          >
            {isWinner && (
              <div
                style={{
                  fontSize: "36px",
                  color: "#059669",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  animation: "bounce 1s infinite",
                }}
              >
                🎉 Tebrikler, kazandınız!
              </div>
            )}
            {isLoser && (
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "36px",
                    color: "#dc2626",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  😔 Maalesef kaybettiniz.
                </div>
                <div style={{ fontSize: "20px", color: "#374151" }}>
                  Doğru kelime:{" "}
                  <span style={{ fontWeight: "bold", color: "#111827" }}>
                    {kelimeToGuess}
                  </span>
                </div>
              </div>
            )}
            <button
              style={{
                background: "linear-gradient(to right, #10b981, #059669)",
                color: "white",
                fontWeight: "bold",
                padding: "16px 32px",
                borderRadius: "50px",
                fontSize: "20px",
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              onClick={resetGame}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.background =
                  "linear-gradient(to right, #059669, #047857)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.background =
                  "linear-gradient(to right, #10b981, #059669)";
              }}
            >
              🔄 Yeni Oyun
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HangmanGame;
