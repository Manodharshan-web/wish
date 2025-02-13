function checkPassword() {
    let inputPassword = document.getElementById("passwordInput").value;
    let correctPassword = "Maya2020";

    if (inputPassword === correctPassword) {
        document.getElementById("messageBox").classList.remove("hidden");
        document.getElementById("valentineMessage").innerHTML = `
            <strong>💌 To My Love, My Forever Valentine 💌</strong><br><br>
            My dearest <strong>Poonakutty</strong>,<br><br>
            From the moment we started this journey, every second with you has been nothing short of magical. It has been <strong>4+ years</strong>, but my heart still races for you like it did on day one. Through every smile, every laugh, and even the little fights, our love has only grown stronger.<br><br>
            You are my <strong>safe place</strong>, my happiness, and my best decision. In your eyes, I see a future filled with endless love, warmth, and dreams that we’ll build together. No matter how many years pass, my love for you will <strong>never fade, only grow deeper</strong>.<br><br>
            Happy Valentine’s Day, my <strong>Poonakutty</strong>! ❤️ I promise to cherish and love you not just today, but for a lifetime.<br><br>
            <strong>Forever yours,</strong><br>
            <em>Your Rowdy ❤️</em>
        `;
    } else {
        alert("Oops! Wrong password. Try again! 💔");
    }
}
